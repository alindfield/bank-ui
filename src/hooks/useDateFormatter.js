import moment from 'moment';

export const useDateFormatter = () => {

    const formatter = (str, format) => {
        const date = new Date(str);
        if (isNaN(date)) return "";
        return moment(date).format(format);
    };

    return formatter;
}
