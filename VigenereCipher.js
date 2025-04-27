function vigenereDecode(text, keyword) {
    //нужно удалить атрибуты text и keyword
    //вместо этого написать 2 строчки кода, которые будут считывать данные text и keyword с html файла
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let keywordIndex = 0;

    cipherText = text.toLowerCase();
    keyword = keyword.toLowerCase();

    for (let char of cipherText) {
        if (alphabet.includes(char)) {
            const textCharIndex = alphabet.indexOf(char);
            const keyCharIndex = alphabet.indexOf(keyword[keywordIndex % keyword.length]);
            const decodedIndex = (textCharIndex - keyCharIndex + 26) % 26;
            result += alphabet[decodedIndex];
            keywordIndex++;
        } else {
            result += char;
        }
    }
    //строчка для вывода результата из переменной result в html файл
}