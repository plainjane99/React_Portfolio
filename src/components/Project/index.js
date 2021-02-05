import React from 'react';

function Project() {

    const projects = [
        {
            className: "project-1",
            name: "Color Theory",
            description: "Group Project: MERN Stack Application",
            github: "https://github.com/plainjane99/color-theory-1.0",
            deploy: "https://color-theory.herokuapp.com/",
        },
        {
            className: "project-2",
            name: "Fitness Pal",
            description: "Group Project: Full Stack Application",
            github: "https://github.com/plainjane99/fitness-pal",
            deploy: "https://fitness-pal-jhacms.herokuapp.com/"
        },
        {
            className: "project-3",
            name: "Tech Blog",
            description: "Assignment: Using MVC, Sequelize, MySQL",
            github: "https://github.com/plainjane99/Tech_Blog",
            deploy: "https://secret-temple-20724.herokuapp.com/"
        },
        {
            className: "project-4",
            name: "Photo Port",
            description: "Assignment: Learning React",
            github: "https://github.com/plainjane99/photo-port",
            deploy: "https://plainjane99.github.io/photo-port/"
        },
        {
            className: "project-5",
            name: "City Explorer",
            description: "Group Project: Front End Application using an API",
            github: "https://github.com/plainjane99/city-explorer",
            deploy: "https://plainjane99.github.io/city-explorer/"
        },
        {
            className: "project-6",
            name: "Budget Tracker",
            description: "Assignment: PWA with Offline Functionality",
            github: "https://github.com/plainjane99/Budget_Tracker",
            deploy: "https://shrouded-hollows-80758.herokuapp.com/"
        }
    ]

    return (
        <section className="content-section project-section">
            <div className="grid-container">
                {projects.map((project) => (
                    <div 
                        className={`project-item-wrapper ${project.className}`}
                        key={project.className}
                    >
                        <div className="project-content">
                            <a href={project.deploy} target="_blank" rel="noreferrer" className="project-title">{project.name}</a>
                            <div className="project-description">{project.description}</div>
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <i className="fa fa-github github-link"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project;