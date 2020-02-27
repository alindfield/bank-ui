import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Table from '../../component/table/Table';
import {updateData, getData} from '../../store/reducers/transactions';

const Transactions = () => {

    /*

    todo
    ====

    columns trans date (sortable), trans amount (sortable), current balance, trans type (sortable), reference

    row formatting light grey - credit, light blue debit, light green direct debit

    cell formatting - trans amount blue positive and red negative

    */
    useEffect(() => {
        if (!transactionState.loading && transactionState.load) {
            dispatch(getData());
        };
    });

    const transactionState = useSelector(state => state.TRN);
    const dispatch = useDispatch();

    const update = (data) => {
        dispatch(updateData(data))
    };

    /*
add row styling function
add column styling function
    */
    const config = {
        columns: [
            {
                name: 'Date',
                config: {width: '300px', align: 'left'},
                field: 'transactionDate',
                sortable: true
            },
            {
                name: 'Date2',
                config: {width: '300px', align: 'left'},
                field: 'otherDate',
                sortable: true
            },
            {
                name: 'Amount',
                config: {width: '200px', align: 'right'},
                field: 'amount',
                sortable: true
            },
            {
                name: 'test',
                config: {width: '100px'},
                field: 'test'
            }        
        ]
    };

    return (
        <Table update={update} config={config} data={transactionState.rows}/>
    );
};

export default Transactions;