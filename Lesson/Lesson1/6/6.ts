// Інтерфейс для об'єкта книги
interface Book {
    title: string;
    pageCount: number;
    genre: string;
}

// Створення об'єктів книг з типізацією
const book1: Book = {
    title: "Мексиканські хроніки",
    pageCount: 250,
    genre: "Пригодницький роман"
};

const book2: Book = {
    title: "Зазирни у мої сни",
    pageCount: 251,
    genre: "Трилер"
};

const book3: Book = {
    title: "Колонія. Нові темні віки",
    pageCount: 252,
    genre: "Роман"
};

console.log(book1);
console.log(book2);
console.log(book3);
