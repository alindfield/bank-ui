import React from 'react';
import Rows from './rows/Rows';
import Headings from './headings/Headings';
import {useSort} from '../../hooks/useSort';
import './Table.css';

const Table = props => {
    
    const doSort = useSort();

    const applySort = (column) => {
        props.update(doSort(column, props.data));
    };

    return (
        <div className="table">
            <table>
                <thead>
                        <Headings doSort={applySort} columns={props.config.columns} />
                </thead>
                <tbody>
                        <Rows rows={props.data} config={props.config}/>
                </tbody>
            </table>
        </div>
    );
};

export default Table;