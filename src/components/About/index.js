import React from 'react';
import myPhoto from "../../assets/about/janehsu_photo.jpg";

function About() {

    const aboutText =
        "I love solving problems and the process of learning.  The climb into full stack web development to satisfy my desire to express creativity in my work.  I am inspired by the beauty of our planet and am driven by a compassion for humankind.  I hope to help others reach their goals as I reach mine. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

    return (
        <section className="content-section about-section">
            <div className="about-text-wrapper">
                <p className="about-text">
                    {aboutText}
                </p>
            </div>
            <div className="my-photo-wrapper">
                <img className="my-photo" src={myPhoto} alt="Jane Hsu wearing a mask but smiling with her eyes"/>
            </div>
        </section>
    )
}

export default About;