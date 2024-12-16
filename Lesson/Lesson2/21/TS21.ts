let createSomething = (arr: (number | string | boolean)[]): string => {

    return arr.map(item => `<li>${item}</li>`).join('\n');
};

let arr: (number | string | boolean)[] = [`hello`, 6, `world`, true, 9, false, 3];


let something: string = createSomething(arr);


console.log(`<ul>${something}</ul>`);
