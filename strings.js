// Способы записи
let singleQuote = 'Строка в одиночных кавычках';
let doubleQuote = 'Строка в двойных кавычках';
let tickQuote = 'Строка в обратных кавычках';

// Многострочный текст
let multiline1 = 'Строка\nc\nпереносом';
let multiline2 = `Строка
c
переносом`;

// Конкатинация строк
let str1 = 'Первая строка';
let str2 = 'Вторая строка';

let concat = str1 + '\n' + str2; // Первая строка\nВторая строка

let tickConcat = `${str1}
${str1}`; // Первая строка\nВторая строка

let greetings = 'Привет';
let name1 = 'Вася';
console.log(`${greetings},${name1}! Добро пожаловать!`)

// Вариант записи зарезервированных символов
console.log('"Кавычка в кавычках: \'"');
console.log("'Кавычка в кавычках: \"'");
console.log(`'Кавычка в кавычках: \`'`);
console.log('Символ табуляции: \t');
console.log('Обратный слэш: \\');
console.log('\x31'); // цифра 1 в UTF-8 в hex
console.log('\u0031'); // цифра 1 в UTF-16 в hex
console.log('\u{1F354}'); // символ эмодзи гамбургер, код 1 в UTF-32 в hex


