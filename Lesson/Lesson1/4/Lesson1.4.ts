let firstName: string | null = prompt("Введіть ваше ім'я:");
let middleName: string | null = prompt("Введіть ваше по батькові:");
let lastName: string | null = prompt("Введіть ваші роки:");

firstName = firstName ?? "Ім'я не вказано";
middleName = middleName ?? "По батькові не вказано";
lastName = lastName ?? "Роки не вказано";

console.log(`${firstName} ${middleName} ${lastName}`);
