import React, { useEffect, useRef } from 'react';

const CrimsonDither = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    
    let observer;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(syncSize);
      observer.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;
    
    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

// 8x8 Bayer matrix ordered dither normalized 0.0 - 1.0
float bayer8(vec2 uv) {
    int x = int(mod(uv.x, 8.0));
    int y = int(mod(uv.y, 8.0));
    int index = x + y * 8;
    
    float dither[64];
    dither[0]  = 0.0/64.0;  dither[1]  = 32.0/64.0; dither[2]  = 8.0/64.0;  dither[3]  = 40.0/64.0; dither[4]  = 2.0/64.0;  dither[5]  = 34.0/64.0; dither[6]  = 10.0/64.0; dither[7]  = 42.0/64.0;
    dither[8]  = 48.0/64.0; dither[9]  = 16.0/64.0; dither[10] = 56.0/64.0; dither[11] = 24.0/64.0; dither[12] = 50.0/64.0; dither[13] = 18.0/64.0; dither[14] = 58.0/64.0; dither[15] = 26.0/64.0;
    dither[16] = 12.0/64.0; dither[17] = 44.0/64.0; dither[18] = 4.0/64.0;  dither[19] = 36.0/64.0; dither[20] = 14.0/64.0; dither[21] = 46.0/64.0; dither[22] = 6.0/64.0;  dither[23] = 38.0/64.0;
    dither[24] = 60.0/64.0; dither[25] = 28.0/64.0; dither[26] = 52.0/64.0; dither[27] = 20.0/64.0; dither[28] = 62.0/64.0; dither[29] = 30.0/64.0; dither[30] = 54.0/64.0; dither[31] = 22.0/64.0;
    dither[32] = 3.0/64.0;  dither[33] = 35.0/64.0; dither[34] = 11.0/64.0; dither[35] = 43.0/64.0; dither[36] = 1.0/64.0;  dither[37] = 33.0/64.0; dither[38] = 9.0/64.0;  dither[39] = 41.0/64.0;
    dither[40] = 51.0/64.0; dither[41] = 19.0/64.0; dither[42] = 59.0/64.0; dither[43] = 27.0/64.0; dither[44] = 49.0/64.0; dither[45] = 17.0/64.0; dither[46] = 57.0/64.0; dither[47] = 25.0/64.0;
    dither[48] = 15.0/64.0; dither[49] = 47.0/64.0; dither[50] = 7.0/64.0;  dither[51] = 39.0/64.0; dither[52] = 13.0/64.0; dither[53] = 45.0/64.0; dither[54] = 5.0/64.0;  dither[55] = 37.0/64.0;
    dither[56] = 63.0/64.0; dither[57] = 31.0/64.0; dither[58] = 55.0/64.0; dither[59] = 23.0/64.0; dither[60] = 61.0/64.0; dither[61] = 29.0/64.0; dither[62] = 53.0/64.0; dither[63] = 21.0/64.0;
    
    for (int i = 0; i < 64; i++) {
        if (i == index) return dither[i];
    }
    return 0.5;
}

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; ++i) {
        v += a * noise(p);
        p = rot * p * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 pixelPos = gl_FragCoord.xy;
    
    // Calm ambient flow: waveSpeed = 0.03
    float t = u_time * 0.03;
    vec2 q = vec2(st.x * 2.2 + t * 0.25, st.y * 1.5 - t * 0.15);
    
    float n1 = fbm(q);
    float n2 = fbm(q * 1.4 - vec2(t * 0.2) + n1);
    
    // Wave forms
    float waveIntensity = sin((st.y * 2.5 + n2 * 2.0 + st.x * 1.8) + t) * 0.5 + 0.5;
    waveIntensity = pow(waveIntensity, 1.6) * 1.2;
    waveIntensity += n1 * 0.35;
    
    // Dimmed to ~55% intensity overall & concentrated towards far left and right edges (center dark & quiet)
    float edgeFactor = smoothstep(0.12, 0.45, abs(st.x - 0.5) * 1.0);
    waveIntensity = waveIntensity * 0.55 * (edgeFactor * 1.1 + 0.08);
    
    // 8x8 Bayer Matrix threshold
    float ditherVal = bayer8(pixelPos);
    
    vec3 waveColor = vec3(0.549, 0.102, 0.102); // #8C1A1A
    vec3 coreColor = vec3(0.725, 0.110, 0.110); // #B91C1C
    vec3 voidColor = vec3(0.0, 0.0, 0.0);       // #000000
    
    float quantizedLevel = floor(waveIntensity * 3.5 + (ditherVal - 0.5) * 1.3);
    quantizedLevel = clamp(quantizedLevel / 3.0, 0.0, 1.0);
    
    vec3 finalColor = mix(voidColor, waveColor, smoothstep(0.08, 0.6, quantizedLevel));
    finalColor = mix(finalColor, coreColor, smoothstep(0.7, 1.0, quantizedLevel) * 0.45);
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function cs(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    
    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    let animationFrameId;

    function render(t) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-black">
      <canvas ref={canvasRef} className="block w-full h-full"></canvas>
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.5)_55%,rgba(0,0,0,0)_100%)]"></div>
    </div>
  );
};

export default CrimsonDither;
