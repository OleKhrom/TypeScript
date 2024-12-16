type User = {
    id: number;
    name: string;
    age: number;
};

let users: User[] = [
    { id: 1, name: "John", age: 32 },
    { id: 2, name: "Johnson", age: 35 },
    { id: 3, name: "Jason", age: 39 }
];


function displayUsers(users: User[]): void {
    users.forEach(user => {
        const userBlock = document.createElement("div");
        userBlock.innerHTML = `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`;
        document.body.appendChild(userBlock);
    });
}

displayUsers(users);
