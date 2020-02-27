import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Table from '../../component/table/Table';
import {updateData} from '../../store/reducers/transactions';

const Transactions = props => {

    const transactionState = useSelector(state => state.TRN);
    const dispatch = useDispatch();

    const update = (data) => {
        dispatch(updateData(data))
    };

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