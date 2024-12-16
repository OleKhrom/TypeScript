interface User {
    name: string;
    username: string;
    password: string;
}

let users: User[] = [
    { name: "John", username: "John1", password: "password1" },
    { name: "Oleg", username: "Oleg2", password: "password2" },
    { name: "Karmen", username: "Karmen1", password: "password3" },
    { name: "Olga", username: "Olga22", password: "password4" },
    { name: "Sam", username: "Sam2", password: "password5" },
    { name: "Adam", username: "Adam5", password: "password6" },
    { name: "Iryna", username: "Iryna8", password: "password7" },
    { name: "Samuel", username: "Samuel3", password: "password8" },
    { name: "Olesia", username: "Olesia2", password: "password9" },
    { name: "Eliza", username: "Eliza1", password: "password10" },
];

users.forEach(user => console.log(user.password));
