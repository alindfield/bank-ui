import React from 'react';
import Table from '../../component/table/Table';

const Transactions = props => {

    const data = [
        {
            transactionDate: '2020-02-24T19:51:46.339+0000',
            amount: 100
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        },
        {
            transactionDate: '2020-02-22T19:51:46.339+0000',
            amount: 140
        }
    ];

    const config = {
        columns: [
            {
                id: 1,
                name: 'Date',
                config: {width: '300px', align: 'left'},
                field: 'transactionDate'
            },
            {
                id: 2,
                name: 'Amount',
                config: {width: '200px', align: 'right'},
                field: 'amount'
            }            
        ]
    };

    return (
        <Table config={config} data={data}/>
    );
};

export default Transactions;