import React from 'react';
import {useDateFormatter} from '../../../../hooks/useDateFormatter';
import {useCurrencyFormatter} from '../../../../hooks/useCurrencyFormatter';

const Row = props => {
    const dateFormatter = useDateFormatter();
    const currencyFormatter = useCurrencyFormatter();
    const content = props.columns.map((column, index) => {
        let data = props.row[column.field] === undefined ? '' : props.row[column.field];
        const styles = column.dataFormatter ? column.dataFormatter(data) : {};
        if (column.hasOwnProperty('dateFormat')) {
            data = dateFormatter(data, column.dateFormat);
        };
        if (column.hasOwnProperty('currency') && column.currency) {
            data = currencyFormatter(data);
        }
        return (
            <td style={styles} {... column.config} key={index}>
                {data}
            </td>
        );
    });
    return content;
}

export default Row;