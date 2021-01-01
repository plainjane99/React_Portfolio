import React from 'react';
import myPhoto from "../../assets/about/janehsu_photo.jpg";

function About() {
    return (
        <section className="content-section about-section">
            <div className="about-text-wrapper">
                <p className="about-text">
                    I am a long-time aerospace engineer who has made the climb into full stack web development to satisfy my desire to express creativity in my work.  I am inspired by the beauty of our planet and am driven by a compassion for humankind.  I hope to help others reach their goals as I reach mine.
                </p>
            </div>
            <div className="my-photo-wrapper">
                <img className="my-photo" src={myPhoto} alt="Jane Hsu wearing a mask but smiling with her eyes"/>
            </div>
        </section>
    )
}

export default About;