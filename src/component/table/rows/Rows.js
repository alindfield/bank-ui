import React from 'react';
import Row from './row/Row';
import './Rows.css';

const Rows = props => {
    const content = props.rows.map((row, index) => {
        const styles = props.config.rowFormatter ? props.config.rowFormatter(row) : {};
        return (
            <tr style={styles} key={index}>
                <Row row={row} columns={props.config.columns}/>
            </tr>
        );
    });
    return content;
}

export default Rows;