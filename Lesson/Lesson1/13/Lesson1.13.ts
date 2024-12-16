let dayNumber: number = 3;
let dayName: string;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        console.log('meeting');
        console.log('lunch');
        console.log('shopping');
        break;

    case 2:
        dayName = "Tuesday";
        console.log('breakfast');
        console.log('lunch2');
        console.log('time for hobby');
        break;

    case 3:
        dayName = "Wednesday";
        console.log('coffee');
        console.log('meeting');
        console.log('gym');
        break;

    case 4:
        dayName = "Thursday";
        console.log('breakfast');
        console.log('reading');
        console.log('phone call');
        break;

    case 5:
        dayName = "Friday";
        console.log('shopping');
        console.log('gym');
        console.log('meeting');
        break;

    case 6:
        dayName = "Saturday";
        console.log('breakfast');
        console.log('lesson');
        console.log('gym');
        break;

    case 7:
        dayName = "Sunday";
        console.log('breakfast');
        console.log('phone call');
        console.log('walking');
        break;

    default:
        console.log("Invalid day number");
}
