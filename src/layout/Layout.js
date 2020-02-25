import React from 'react';
import './Layout.css';
import Header from '../component/header/Header';
import Transactions from '../feature/transactions/Transactions';

const Layout = props => {
    return (
        <div className="layout">
            <Header />
            <div className="layout-content">
                <Transactions />
            </div>
        </div>
    );
};

export default Layout;