import React, { useState } from 'react';

function Nav() {


    const [navigation] = useState([
        {
            name: "About Me"
        },
        {
            name: "Projects"
        },
        {
            name: "Contact Me"
        },
        {
            name: "Resume"
        }
    ]);

    const [currentNav, setCurrentNav] = useState(navigation[0]);

    function navSelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <nav>
            {navigation.map((nav) => (
                <span onClick={() => navSelected(nav.name)} className="nav-element" key={nav.name}>
                    {nav.name}
                </span>
            ))}
        </nav>
    )
}

export default Nav;