import React from 'react';
import './Headings.css';

const Headings = props => {
    const display = props.columns.map((column, index) => {
        const th = column.sortable
            ? <th className="headings-hover" onClick={() => {props.doSort(column)}} key={index} {... column.config}>{column.name}</th>
            : <th key={index} {... column.config}>{column.name}</th>
        return th;
    });
    return (
        <tr className="headings">
            {display}
        </tr>
    );
}

export default Headings;