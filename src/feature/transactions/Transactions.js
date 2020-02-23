import React from 'react';
import Table from '../../component/table/Table';

const Transactions = props => {

    const config = {
        columns: [
            {
                id: 1,
                name: 'Date',
                config: {width: '300px', align: 'left'}
            },
            {
                id: 2,
                name: 'Date2',
                config: {width: '200px'}
            }            
        ]
    };

    return (
        <div>
            <Table config={config}/>
        </div>
    );
};

export default Transactions;