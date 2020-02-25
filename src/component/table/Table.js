import React from 'react';
import Rows from './rows/Rows';
import Headings from './headings/Headings';
import './Table.css';

const Table = props => {
    return (
        <div className="table">
            <table>
                <thead>
                    <Headings columns={props.config.columns} />
                </thead>
                <tbody>
                    <Rows rows={props.data} columns={props.config.columns}/>
                </tbody>
            </table>
        </div>
    );
};

export default Table;