const fs = require('fs');
const path = require('path');

const dirs = ['app', 'components', 'lib'];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. 2010 -> 2009
    content = content.replace(/\b2010\b/g, '2009');

    // 2. 16 -> 17 for experience
    content = content.replace(/\b16\+/g, '17+');
    content = content.replace(/\b16 yıllık/g, '17 yıllık');
    content = content.replace(/16\s+yıllık/g, '17 yıllık');

    // 3. Meridyen Yapım -> Meridyen Film Yapım
    content = content.replace(/Meridyen Yapım/g, 'Meridyen Film Yapım');

    // 4. Meridyen Film -> Meridyen Film Yapım (avoiding Meridyen Film Yapım Yapım)
    // First, replace all 'Meridyen Film' with 'Meridyen Film Yapım'
    content = content.replace(/Meridyen Film/g, 'Meridyen Film Yapım');
    // Then deduplicate 'Meridyen Film Yapım Yapım'
    content = content.replace(/Meridyen Film Yapım Yapım/g, 'Meridyen Film Yapım');
    
    // For uppercase MERİDYEN FİLM
    content = content.replace(/MERİDYEN FİLM/g, 'MERİDYEN FİLM YAPIM');
    content = content.replace(/MERİDYEN FİLM YAPIM YAPIM/g, 'MERİDYEN FİLM YAPIM');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            replaceInFile(fullPath);
        }
    }
}

for (const dir of dirs) {
    processDir(path.join(__dirname, dir));
}
console.log('Done');
