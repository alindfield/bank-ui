import React, {useState} from 'react';
import Rows from './rows/Rows';
import Headings from './headings/Headings';
import {useSort} from '../../hooks/useSort';
import './Table.css';

const Table = props => {
    
    const [sort, setSort] = useState({});

    const doSort = useSort();

    const applySort = (column) => {
        const [ascending, data] = doSort(column.field, props.data);
        setSort({field: column.field, ascending: ascending});
        props.update(data);
    };

    return (
        <div className="table">
            <table>
                <thead>
                        <Headings doSort={applySort} config={props.config} sort={sort}/>
                </thead>
                <tbody>
                        <Rows rows={props.data} config={props.config}/>
                </tbody>
            </table>
        </div>
    );
};

export default Table;