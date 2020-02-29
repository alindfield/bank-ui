import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Table from '../../component/table/Table';
import {updateData, getData} from '../../store/reducers/transactions';
import './Transactions.css';

const Transactions = () => {

    /*

    todo
    ====

    columns trans date (sortable), trans amount (sortable), current balance, trans type (sortable), reference

    row formatting light grey - credit, light blue debit, light green direct debit

    cell formatting - trans amount blue positive and red negative

    */

    /*

    todo
    ====

    add tests
    
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

    const formatRow = (row) => {
        if (row.type === "Direct Debit") return {"backgroundColor": "lightGreen"}
        if (row.amount > 0) return {"backgroundColor": "lightGrey"};
        if (row.amount < 0) return {"backgroundColor": "lightBlue"};
        return {};
    };

    const formatAmount = (data) => {
        if (data < 0) return {"color": "red"};
        if (data > 0) return {"color": "blue"};
        return {};
    };

    const config = {
        rowFormatter: formatRow,
        columns: [
            {
                name: 'Transaction Date',
                config: {align: 'left', width: '150px'},
                field: 'transactionDate',
                dateFormat: "DD:MM:YYYY",
                sortable: true
            },
            {
                name: 'Amount',
                config: {align: 'right', width: '90px'},
                field: 'amount',
                formatter: formatAmount,
                currency: true,
                sortable: true
            },
            {
                name: 'Balance',
                config: {align: 'right', width: '90px'},
                currency: true,
                field: 'balance'
            },
            {
                name: 'Type',
                config: {align: 'left', width: '110px'},
                field: 'type',
                sortable: true
            },
            {
                name: 'Reference',
                config: {align: 'left', width: '300px'},
                field: 'ref'
            } 
        ]
    };

    return (
        <Table className="table" update={update} config={config} data={transactionState.rows}/>
    );
};

export default Transactions;