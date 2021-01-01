import React from 'react';

function Nav() {

    const navigation = [
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
    ]

    return (
        <nav>
            {navigation.map((nav) => (
                <span className="nav-element" key={nav.name}>
                    {nav.name}
                </span>
            ))}
        </nav>
    )
}

export default Nav;