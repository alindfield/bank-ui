import React from 'react';

const Row = props => {
    console.log(props.row);
    const content = props.columns.map((column, index) => {
        const data = props.row[column.field] === undefined ? '' : props.row[column.field];
        return (
            <td {... column.config} key={index}>
                {data}
            </td>
        );
    });
    /*const content = props.columns.map((column, index) => (
        <td key={index}>
            abc
        </td>
    ));*/
    return content;
}

export default Row;