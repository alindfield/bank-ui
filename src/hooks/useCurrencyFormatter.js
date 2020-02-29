export const useCurrencyFormatter = () => {

    const formatter = new Intl.NumberFormat('pl', {style: 'currency', currency: 'PLN'});

    const doFormat = (number) => {
        return formatter.format(number);
    };

    return doFormat;
}
