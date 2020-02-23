import React from 'react';
import Rows from './rows/Rows';
import Headings from './headings/Headings';

const Table = props => {
    console.log(props);
    console.log(props.config.columns);
    return (
        <div className="table">
            <table>
                <thead>
                    <Headings config={props.config.columns} />
                </thead>
                <Rows></Rows>
            </table>
        </div>
    );
};

export default Table;