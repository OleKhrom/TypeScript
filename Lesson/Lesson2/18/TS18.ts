let createParagraph = (text: string): void => {
    let paragraph = document.createElement("p");
    paragraph.innerText = text;
    document.body.appendChild(paragraph);
};

createParagraph(`This is difficult.`);
