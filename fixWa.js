const fs = require('fs');
const path = require('path');
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
        else if (file.endsWith('.js')) results.push(file);
    });
    return results;
}
walk(path.join(__dirname, 'app')).forEach(file => {
    let c = fs.readFileSync(file, 'utf8');
    if (c.includes('902827260000')) {
        fs.writeFileSync(file, c.replace(/902827260000/g, '905464014751'), 'utf8');
    }
});
