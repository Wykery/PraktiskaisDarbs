function cipherDecode(text, shift) {
    //нужно удалить атрибуты text и shift
    //вместо этого написать 2 строчки кода, которые будут считывать данные text и shift с html файла
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decodedText = '';

    for (let char of text) {
        if (alphabet.includes(char)) {
            let charIndex = alphabet.indexOf(char);
            let newCharIndex = (charIndex+shift + 26)%26;
            decodedText += alphabet[newCharIndex];
        } else if (upperAlphabet.includes(char)){
            let charIndex = upperAlphabet.indexOf(char);
            let newCharIndex = (charIndex+shift + 26)%26;
            decodedText += upperAlphabet[newCharIndex];
        } else {
            decodedText += char;
        }
    }
    //строчка для вывода результата из переменной decodeText в html файл
}