import { useState } from "react";
import "./ContactForm.css";
import contact from "../../assets/contact.png";

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        const data = {
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

            subject: "New Contact Message from Portfolio",

            from_name: `${formData.firstName} ${formData.lastName}`,

            email: formData.email,

            message: formData.message,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("Message sent successfully! 🚀");

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Unable to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container">

            <div className="contact-left">
                <img
                    src={contact}
                    alt="Let's Connect"
                    className="contact-img"
                />
            </div>

            <div className="contact-right">
                <h2>Get in touch</h2>

                <p>
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities. Feel free to reach out!
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <div className="form-group">
                            <label>
                                First Name<span>*</span>
                            </label>

                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                Last Name<span>*</span>
                            </label>

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label>
                            Email<span>*</span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Your Message</label>

                        <textarea
                            name="message"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="send-btn"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p className="form-status">
                            {status}
                        </p>
                    )}

                </form>
            </div>

        </div>
    );
}

export default ContactForm;