type TemperatureRecord = {
    day: string;
    morning: number;
    afternoon: number;
    evening: number;
};

let temperatures: TemperatureRecord[] = [
    { day: "Monday", morning: 1, afternoon: 6, evening: 3 },
    { day: "Tuesday", morning: 2, afternoon: 7, evening: 4 },
    { day: "Wednesday", morning: 3, afternoon: 8, evening: 5 },
    { day: "Thursday", morning: 4, afternoon: 9, evening: 6 },
    { day: "Friday", morning: 5, afternoon: 10, evening: 5 },
    { day: "Saturday", morning: 6, afternoon: 11, evening: 5 },
    { day: "Sunday", morning: 7, afternoon: 11, evening: 5 }
];

console.log(temperatures);
