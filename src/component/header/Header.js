import React from 'react'
import './Header.css';

const Header = props => {
    return (
        <div className="header">
            <div className="header-title">
                <div>Transactions</div>
            </div>
            <div className="header-account">
                <div>Account: 123456-12345678, Mr YYYYY</div>
            </div>
        </div>
    )
};

export default Header;