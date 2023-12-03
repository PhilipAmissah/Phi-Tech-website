import React from 'react';

class ContactUsPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <p>Please fill out the form below to get in touch with us.</p>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Message:
                        <textarea name="message"></textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ContactUsPage;