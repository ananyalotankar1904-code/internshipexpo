const fs = require('fs');

const path = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\e2e7675e-74f5-4c45-9508-cf730cdfb498\\.system_generated\\logs\\transcript.jsonl';
const file = fs.readFileSync(path, 'utf8');
const lines = file.split('\n').filter(l => l.trim().length > 0);

const foundPositions = new Set();
const potentialPayloads = [];

lines.forEach(line => {
  try {
    const obj = JSON.parse(line);
    const content = JSON.stringify(obj);
    
    // Look for anything resembling a submission payload or selected positions
    if (content.includes('positionId') || content.includes('selectedPositions') || content.includes('"applications"')) {
      // Extract position UUIDs
      const regex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;
      let m;
      while ((m = regex.exec(content)) !== null) {
        foundPositions.add(m[0]);
      }
      
      // Store the surrounding context to see if it links a student email/id to a position
      if (content.includes('@gmail.com') || content.includes('SUBMITTED')) {
         potentialPayloads.push(content.substring(0, 500) + "...");
      }
    }
  } catch(e) {}
});

console.log("Found Position UUIDs (Total: " + foundPositions.size + ")");
console.log(Array.from(foundPositions).slice(0, 10)); // sample

console.log("\\nPotential Payloads linking students to positions:");
potentialPayloads.slice(0, 5).forEach(p => console.log(p));
