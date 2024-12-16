let swap = (arr: number[], index1: number, index2: number): void => {

    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

let array: number[] = [11, 22, 33, 44];

swap(array, 0, 1);

console.log(array);
