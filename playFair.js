function createPlayfairTable(key) {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // 'J' заменяется на 'I'
    key = key.toUpperCase().replace(/J/g, 'I') + alphabet;
    let seen = new Set();
    let table = [];

    key.split('').forEach(c => {
        if (!seen.has(c)) {
            table.push(c);
            seen.add(c);
        }
    });

    return table;
}

function prepareText(text) {
    text = text.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
    let result = '';
    for (let i = 0; i < text.length; i += 2) {
        let a = text[i];
        let b = text[i + 1];
        if (!b) b = 'X';
        if (a === b) {
            result += a + 'X';
            i--;
        } else {
            result += a + b;
        }
    }
    return result;
}

function playfairEncrypt(plaintext, key) {
    const table = createPlayfairTable(key);
    plaintext = prepareText(plaintext);

    function getPos(c) {
        let idx = table.indexOf(c);
        return [Math.floor(idx / 5), idx % 5];
    }

    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i += 2) {
        let a = plaintext[i];
        let b = plaintext[i + 1];

        let [rowA, colA] = getPos(a);
        let [rowB, colB] = getPos(b);

        if (rowA === rowB) {
            ciphertext += table[rowA * 5 + (colA + 1) % 5];
            ciphertext += table[rowB * 5 + (colB + 1) % 5];
        } else if (colA === colB) {
            ciphertext += table[((rowA + 1) % 5) * 5 + colA];
            ciphertext += table[((rowB + 1) % 5) * 5 + colB];
        } else {
            ciphertext += table[rowA * 5 + colB];
            ciphertext += table[rowB * 5 + colA];
        }
    }

    return ciphertext;
}

function playfairDecrypt(ciphertext, key) {
    const table = createPlayfairTable(key);

    function getPos(c) {
        let idx = table.indexOf(c);
        return [Math.floor(idx / 5), idx % 5];
    }

    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i += 2) {
        let a = ciphertext[i];
        let b = ciphertext[i + 1];

        let [rowA, colA] = getPos(a);
        let [rowB, colB] = getPos(b);

        if (rowA === rowB) {
            plaintext += table[rowA * 5 + (colA + 4) % 5];
            plaintext += table[rowB * 5 + (colB + 4) % 5];
        } else if (colA === colB) {
            plaintext += table[((rowA + 4) % 5) * 5 + colA];
            plaintext += table[((rowB + 4) % 5) * 5 + colB];
        } else {
            plaintext += table[rowA * 5 + colB];
            plaintext += table[rowB * 5 + colA];
        }
    }

    return plaintext;
}

// Примеры использования:
console.log(playfairEncrypt("HELLO WORLD", "keyword"));
console.log(playfairDecrypt(playfairEncrypt("HELLO WORLD", "keyword"), "keyword"));
