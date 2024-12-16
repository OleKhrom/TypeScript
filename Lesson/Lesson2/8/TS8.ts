function foobar(arrayofPrimitives: (number | string | boolean)[]): void {
    document.write(`<ul>`);
    for (const element of arrayofPrimitives) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}

foobar([1, 4, 6, 9, 3, `hello world`, true]);
