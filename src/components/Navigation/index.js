import React, { useEffect } from 'react';

function Nav(props) {

    const {
        navigation = [],
        setCurrentNav,
        currentNav
    } = props;

    useEffect(() => {
        document.title = currentNav.name;
    }, [currentNav]);

    return (
        <nav>
            <ul className="nav-wrapper">
                {navigation.map((nav) => (
                    <li className={`nav-li-styling ${currentNav.name === nav.name && 'navActive'}`} key={nav.name}>
                        <span onClick={() => setCurrentNav(nav.name)}>
                            {nav.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;