const sum = (arr: number[]): number => {
    let total = 0;
    arr.forEach(num => total += num);
    return total;
};

console.log(sum([1, 2, 10]));  // -> 13
