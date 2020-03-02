import {useState} from 'react';
import {copyObject} from '../shared/utilities';

export const useSort = () => {

    const [field, setField] = useState(null);
    const [ascending, setAscending] = useState(false);

    const compareValues = (key, ascending = true) => {

        return (a, b) => {
           
            let comparison = 0;

            if (!a.hasOwnProperty(key) && !b.hasOwnProperty(key)) {
                comparison = 0;
            } else if (a.hasOwnProperty(key) && !b.hasOwnProperty(key)) {
                comparison = 1;
            } else if (!a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
                comparison = -1;
            } else {
                const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
            }

            return ascending ? comparison : (comparison * -1);

        };
    }

    const doSort = (newField, data) => {
        setField(newField);
        const newAscending = !ascending;
        setAscending(field !== null && newField === field ? newAscending : true);
        return [newAscending, copyObject(data).sort(compareValues(newField, newAscending))];
    };

    return doSort;
};
