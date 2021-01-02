import React, { useState } from 'react';

// validate email format
import { validateEmail } from '../../utils/helpers';

// import image
import contactImage from "../../assets/contact/Apache_Plume.jpg";


function ContactForm() {

    // manage the form data
    // clear the input fields on the component loading 
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // destructure formState object
    const { name, email, message } = formState;

    // define the error message that may occur for input validation
    const [errorMessage, setErrorMessage] = useState('');

    // sync the state with user input
    function handleChange(e) {

        // validate email before syncing the form data 
        if (e.target.name === 'email') {
            // validate the value of the email input field with validateEmail function
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                // empty string if no errror
                setErrorMessage('');
            }
        }
        // message to confirm fields are not blank.
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // update the formState value for the name, email, message properties
        setFormState({ ...formState, [e.target.name]: e.target.value })

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // prevent the default action of the form Submit button
    // log the formState object on the Submit button click since we do not have a backend
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // create the DOM elements in the contact form for the three inputs (name, email, and message)
    return (
        <section className="content-section contact-section">
            <div className="contact-form-wrapper">
                <div className="under-construction">
                    <p>The back-end for my contact form is still under construction. Please stay tuned.</p>
                </div>
                <form id="contact-form" onSubmit={handleSubmit}>
                    {/* name input */}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>

                    {/* email input */}
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>

                    {/* message text area */}
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>

                    {/* render this if there is an error */}
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}

                    {/* add the button*/}
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-img-wrapper">
                <img className="contact-image" src={contactImage} alt="Pink and fluffy Apache Plume in bloom"></img>
            </div>
        </section>
    )
}

export default ContactForm;