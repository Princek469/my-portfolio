import { useState } from "react";
import { Link } from "react-router-dom";
import { checkValidateData } from "../utility/validate";

function ContactUs() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
    });

    const [isErrorMessage, setIsErrorMessage] = useState(null);

    let handleInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    async function handleContactForm(e) {
        e.preventDefault();

        const message = checkValidateData(user);
        if (message) {
            setIsErrorMessage(message);
        }

        const { name, email, phoneNumber, subject, message: userMessage } = user;

        if (name && email && phoneNumber && subject && userMessage) {
            try {
                const response = await fetch(`https://myportfolio-bb613-default-rtdb.firebaseio.com/contactUsForm.json`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phoneNumber,
                        subject,
                        message: userMessage
                    })
                });

                if (response.ok) {
                    // Clear the form by resetting the state
                    setUser({
                        name: "",
                        email: "",
                        phoneNumber: "",
                        subject: "",
                        message: ""
                    });
                    alert("Thank You For Contacting Me");
                } else {
                    alert("There was an issue with the submission. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting the form:", error);
                alert("There was an error submitting the form. Please try again later.");
            }
        } else {
            alert("Please fill the form to contact me.");
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-custom-dark-blue to-custom-light-blue pt-24">
            <div className="max-w-6xl mx-auto p-6 bg-gray-900 dark:bg-gray-100 shadow-md rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white dark:text-gray-900">
                            𝐿𝑒𝓉'𝓈 𝒸𝒽𝒶𝓉. 𝒯𝑒𝓁𝓁 𝓂𝑒 𝒶𝒷𝑜𝓊𝓉 𝓎𝑜𝓊𝓇 𝓅𝓇𝑜𝒿𝑒𝒸𝓉.
                            𝐿𝑒𝓉’𝓈 𝒸𝓇𝑒𝒶𝓉𝑒 𝓈𝑜𝓂𝑒𝓉𝒽𝒾𝓃𝑔 𝓉𝑜𝑔𝑒𝓉𝒽𝑒𝓇
                        </h2>
                        <p className="mt-4 text-lg text-gray-200 dark:text-gray-900">
                            Let’s create something together{" "}
                            <span role="img" aria-label="sparkles">
                                ✨
                            </span>
                        </p>
                        <div className="mt-6">
                            <p className="text-lg text-gray-100 dark:text-gray-900">𝑀𝒶𝒾𝓁 𝓂𝑒 𝒶𝓉: 📧</p>
                            <Link to="#" className="mt-2 text-xl font-semibold text-blue-600">𝓅𝓇𝒾𝓃𝒸𝑒𝓀𝟦𝟨𝟫𝟥𝟩@𝑔𝓂𝒶𝒾𝓁.𝒸𝑜𝓂</Link>
                        </div>
                        <div className="mt-6">
                            <p className="text-lg relative text-gray-100 dark:text-gray-900">𝒞𝒶𝓁𝓁 𝓂𝑒 𝒶𝓉: 📞</p>
                            <p className="mt-2 text-xl font-semibold text-blue-600">+91-𝟫𝟪𝟣𝟪𝟥𝟫𝟢𝟩𝟦𝟢</p>
                        </div>

                    </div>
                    
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-100 mb-4">𝒮𝑒𝓃𝒹 𝓊𝓈 𝒶 𝓂𝑒𝓈𝓈𝒶𝑔𝑒</h3>
                        <form className="space-y-4" onSubmit={handleContactForm}>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={user.name}
                                    className="block w-full text-black font-semibold p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                                    placeholder="𝒩𝒶𝓂𝑒"
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    className="block w-full text-black font-semibold p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                                    placeholder="𝐸𝓂𝒶𝒾𝓁 𝒜𝒹𝒹𝓇𝑒𝓈𝓈"
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={user.phoneNumber}
                                    className="block w-full text-black font-semibold p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                                    placeholder="𝒫𝒽𝑜𝓃𝑒 𝒩𝓊𝓂𝒷𝑒𝓇"
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={user.subject}
                                    className="block w-full text-black font-semibold p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                                    placeholder="𝒮𝓊𝒷𝒿𝑒𝒸𝓉"
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={user.message}
                                    className="block w-full text-black font-semibold p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                                    placeholder="𝒯𝑒𝓁𝓁 𝓊𝓈 𝓂𝑜𝓇𝑒 𝒶𝒷𝑜𝓊𝓉 𝓎𝑜𝓊𝓇 𝓅𝓇𝑜𝒿𝑒𝒸𝓉"
                                    onChange={handleInput}
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
                                >
                                    𝓢𝓮𝓷𝓭 𝓜𝓮𝓼𝓼𝓪𝓰𝓮
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
