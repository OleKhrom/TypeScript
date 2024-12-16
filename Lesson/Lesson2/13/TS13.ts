type CurrencyValue = {
    currency: string;
    value: number;
};

function exchange(sumUAH: number, currencyValues: CurrencyValue[], exchangeCurrency: string): number | undefined {
    let chosenCurrency: CurrencyValue | undefined;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
            break;
        }
    }

    if (chosenCurrency) {
        return sumUAH / chosenCurrency.value;
    } else {
        console.error('Currency not found');
        return undefined;
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
