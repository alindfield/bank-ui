import React from 'react';
import './Headings.css';

const Headings = props => {
    const display = props.config.columns.map((column, index) => {
        const heading = column.name + (props.sort.hasOwnProperty('field') && props.sort.field === column.field ? (" " + (props.sort.ascending ? "↑" : "↓")) : "");
        const th = column.sortable
            ? <th className="headings-hover" onClick={() => {props.doSort(column)}} key={index} {...column.config}>{heading}</th>
            : <th key={index} {...column.config}>{column.name}</th>
        return th;
    });
    return (
        <tr>
            {display}
        </tr>
    );
}

export default Headings;