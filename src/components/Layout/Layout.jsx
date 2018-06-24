import React, { Fragment } from 'react';
import Header from '../Header/Header';
import UserLogin from '../UserLogin/UserLogin';

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                {/* if !UserLogedIn */}
                <UserLogin />
                {/* if UserLogedIn */}
            </div>
        </Fragment>
    );
};

export default Layout;