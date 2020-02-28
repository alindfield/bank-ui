export const useCurrencyFormatter = () => {

    const formatter = (number) => {
        return Math.floor(number) + "." + Math.floor(100 * (number - Math.floor(number))).toString().padStart(2, "0");
    };

    return formatter;
}
