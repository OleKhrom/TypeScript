type Currency = {
    currency: string;
    value: number;
};

let exchange = (sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number => {
    let currency = currencyValues.find(x => x.currency === exchangeCurrency);
    return currency ? sumUAH / currency.value : 0;
};

let result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
console.log(result);
