interface Author {
    name: string;
    age: number;
}

interface Book {
    title: string;
    pageCount: number;
    genre: string;
    authors: Author[]; // Масив авторів
}


const book1: Book = {
    title: "Мексиканські хроніки",
    pageCount: 250,
    genre: "Пригодницький роман",
    authors: [{ name: "Макс Кідрук", age: 40 }],
};

const book2: Book = {
    title: "Пригоди Гуллівера",
    pageCount: 259,
    genre: "Пригоди",
    authors: [{ name: "Джонатан Свіфт", age: 64 }],
};

const book3: Book = {
    title: "Вбивство у східному експресі",
    pageCount: 350,
    genre: "Детективний роман",
    authors: [{ name: "Агата Крісті", age: 86 }],
};

console.log(book1);
console.log(book2);
console.log(book3);
