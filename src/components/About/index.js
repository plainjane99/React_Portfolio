import React from 'react';
import myPhoto from "../../assets/about/janehsu_photo.jpg";

function About() {

    const aboutText =
        "I love the process of solving problems.\nMy engineering background includes structural design, manufacturing, system test, analysis, and project management in the aerospace industry.\nI continue my engineering journey through full stack web development to satisfy my desire to add artistic creativity in my work.\nI am inspired by the beauty of our planet and am driven by a compassion for humankind.\nI hope to help others reach their goals as I reach mine.";

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