import React from 'react';
import Rows from './rows/Rows';
import Headings from './headings/Headings';
import './Table.css';

const Table = props => {
    return (
        <div className="table">
            <table>
                <thead>
                    <div>
                        <Headings columns={props.config.columns} />
                    </div>
                </thead>
                <tbody>
                    <div className="table-body">
                        <Rows rows={props.data} columns={props.config.columns}/>
                    </div>
                </tbody>
            </table>
        </div>
    );
};

export default Table;