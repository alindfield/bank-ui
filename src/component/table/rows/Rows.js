import React from 'react';
import Row from './row/Row';
import './Rows.css';

const Rows = props => {
    const content = props.rows.map((row, index) => (
        <tr className="rows" key={index}>
            <Row row={row} columns={props.columns}/>
        </tr>
    ));
    return content;
}

export default Rows;