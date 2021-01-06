import React from 'react';

function Resume() {
    return (
        <section className="content-section resume-section">
            <div className="section-wrapper">
                <ul className="section">
                    <li className="section-title">Front End Proficiencies</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaSCript</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Responsive Design</li>
                </ul>
                <ul className="section">
                    <li className="section-title">Back End Proficiencies</li>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                </ul>
            </div>

        </section>
    )
}

export default Resume;