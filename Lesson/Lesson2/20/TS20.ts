const createSomething = (text: string, count: number): HTMLUListElement => {
    let ul = document.createElement('ul');

    for (let i = 0; i < count; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }

    return ul;
};

let text = createSomething('Something', 3);
document.body.appendChild(text);
