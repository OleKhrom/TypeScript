let CylinderSquare = (r: number, h: number): number => {
    return 2 * Math.PI * r * h + 2 * Math.PI * r * r;
};

console.log(CylinderSquare(5, 10));
