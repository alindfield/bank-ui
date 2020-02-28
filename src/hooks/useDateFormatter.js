export const useDateFormatter = () => {

    const formatter = (str, format) => {
        const date = new Date(str);
        if (isNaN(date)) return "";
        return date.getDate().toString().padStart(2, "0") + "." + (date.getMonth() + 1).toString().padStart(2, "0") + "." + date.getFullYear().toString().padStart(4, "0");
    };

    return formatter;
}
