import React from 'react';

function Resume() {
    return (
        <section className="content-section resume-section">
            <div className="section-wrapper">
                <ul className="section">
                    <li className="section-title">Front End Proficiencies</li>
                    <li className="section-items">HTML</li>
                    <li className="section-items">CSS</li>
                    <li className="section-items">JavaScript</li>
                    <li className="section-items">JQuery</li>
                    <li className="section-items">Bootstrap</li>
                    <li className="section-items">React</li>
                    <li className="section-items">Responsive Design</li>
                </ul>
                <ul className="section">
                    <li className="section-title">Back End Proficiencies</li>
                    <li className="section-items">Node</li>
                    <li className="section-items">Express</li>
                    <li className="section-items">RESTful APIs/GraphQL</li>
                    <li className="section-items">MySQL</li>
                    <li className="section-items">Sequelize</li>
                    <li className="section-items">MongoDB</li>
                </ul>
            </div>
            <div className="resume-wrapper">
                <a download="Jane_Hsu_Resume" href="./assets/Jane_Hsu_Web_Dev_Resume_20210219.pdf" title="Jane Hsu's Resume. Click to download.">
                    <img className="resume-img" src={require(`../../assets/resume/resume_snip.jpg`).default} alt="Jane Hsu's resume"></img>
                </a>
            </div>

        </section>
    )
}

export default Resume;