const fs = require('fs');


async function main() {
    const txtData = fs.readFileSync(`${__dirname}/../dataset/numbersv2.txt`, 'utf-8');
    const splitted = txtData.split('\n');
    const result1 = [];
    for (let i = 0; i < splitted.length; i++) {
        result1.push(splitted[i].split(' - '));
    }
    const result2 = [];
    for (let i = 0; i < result1.length; i++) {
        result2.push({
            id: i,
            GermanEnglish: result1[i][1]
        });
    }

    fs.writeFileSync(`${__dirname}/../dataset/numbersv2.json`, JSON.stringify(result2));
}

main().then(console.log).catch(console.error);