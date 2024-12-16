let createSomething = (text: string): void => {
    let ul: HTMLUListElement = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        let li: HTMLLIElement = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

createSomething(`Soon will be December`);
