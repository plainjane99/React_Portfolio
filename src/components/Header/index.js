import React from 'react';
import Nav from '../Navigation';

function Header(props) {

    const {
        navigation = [],
        setCurrentNav,
        currentNav
    } = props;

    return (
        <header>
            <div className="my-name">Jane Hsu</div>
            <Nav
                navigation={navigation}
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
            ></Nav>
        </header>
    )
}

export default Header;