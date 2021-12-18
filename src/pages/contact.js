import React, { useState } from 'react';
import Footer from '../components/Layouts/footer';
import Header from '../components/Layouts/header';
import Navigation from '../components/Layouts/navigation';

const Contact = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3008/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <>
            <Navigation />
            <main className="section-contact">
                <div className="row">
                    <div className="contact">
                        <div className="contact__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Contact us now
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full name" id="name" required />
                                    <label htmlFor="name" className="form__label">Full name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>

                                <div className="form__group">
                                    <textarea type="message" className="form__input" placeholder="Your message..." id="message" required />
                                </div>
                                <div className="form__group pt-5">
                                    <button className="btn btn--green">
                                        <i className="fas fa-envelope-open me-3"></i>
                                        Send 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contact;