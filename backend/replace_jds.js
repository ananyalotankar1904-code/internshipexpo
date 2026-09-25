const fs = require('fs');
const p = 'src/scripts/seedRealCompanies.ts';
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/jobDescriptionPdfUrl:\s*['"][^'"]*['"]/g, "jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'");
fs.writeFileSync(p, c);
console.log('Done');
