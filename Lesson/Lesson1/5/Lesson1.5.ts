type ArrayElement = number | object | boolean | undefined | string | symbol | number[] | (() => void) | null;

let arr: ArrayElement[] = [
    39,
    { name: "Olesia" },
    true,
    undefined,
    "Hello",
    Symbol("*"),
    [1, 2, 3],
    function () { console.log("Function executed"); },
    null,
    12345677889999
];

arr.forEach((item) => {
    console.log(item);
});
