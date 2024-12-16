interface User {
    id: number;
    name: string;
    age: number;
}

function foobar(users: User[]): void {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

foobar([
    {id: 1, name: "John Doe", age: 20},
    {id: 2, name: "Johnson", age: 30},
    {id: 3, name: "Jacob", age: 35},
    {id: 4, name: "January", age: 40},
    {id: 5, name: "Johnson", age: 55},
]);
