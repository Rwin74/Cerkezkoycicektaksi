const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.js')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'app'));
let changed = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('0282 726 00 00') || content.includes('+902827260000')) {
        content = content.replace(/0282 726 00 00/g, '0546 401 47 51').replace(/\+902827260000/g, '+905464014751');
        fs.writeFileSync(file, content, 'utf8');
        changed++;
        console.log('Updated', file);
    }
});
console.log(`Updated ${changed} files.`);
