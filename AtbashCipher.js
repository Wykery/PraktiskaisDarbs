function atbashDecode(text) {
    //удалить text и написать строчку кода, которая будет считывать текст с блядского html файла
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    const upperReversedAlphabet = upperAlphabet.split('').reverse().join('');
    let result = '';

    for (let char of text) {
        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char);
            result += reversedAlphabet[index];
        } else if (upperAlphabet.includes(char)) {
            let index = upperAlphabetalphabet.indexOf(char);
            result += upperReversedAlphabet[index];
        } else {
            result += char;
        }
    }
    //строчка для вывода результата из переменной result в html файл
}