import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [name, setName] = useState('')
    const [response, setResponse] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const formRef = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_sn0fpbi",
            "template_exzddx7",
            formRef.current,
            "DjoIsJNRZPdoZUWUg"
          )
          .then(
            (res) => {
              console.log(res.text);
              setResponse("Message sent");
            },
            (error) => {
              console.log(error.text);
              setError("Message failed");
            }
          );
        setName('')
        setMessage('')
    }

    return (
        <div className="w-full h-fit flex justify-center bg-white">
            <div className="w-[400px] p-5">
                <form 
                    onSubmit={sendEmail} 
                    ref={formRef} 
                    className="bg-white text-black"
                >

                    <div className="flex justify-center mb-5">
                        <h3 className="text-center text-2xl">
                            Contact me
                        </h3>
                    </div>


                    <label>
                        <h4 className="mb-1 font-light">
                            Email:
                        </h4>
                        <input 
                            required 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="w-full h-10 p-1 text-white 
                            placeholder-green-300/50 bg-green-900" 
                            name="user_name" 
                            type="text" 
                            placeholder="email..." 
                        />
                    </label>

                    <label>
                        <h4 className="mb-1 font-light mt-5">
                            Message: 
                        </h4>
                        <textarea 
                            required 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            className="bg-green-900 placeholder-green-300/50 
                            text-white p-1 w-full h-28" 
                            name="message" 
                            id="" 
                            cols="40" 
                            rows="3" 
                            placeholder="message..."
                        />
                    </label>

                    <motion.button 
                        whileTap={{ scale: 1.1 }} 
                        className="bg-green-900 text-white p-1 
                        w-full block mt-10"
                    >
                        Send
                    </motion.button>


                    {response && (
                        <div className="bg-green-300 text-black text-center rounded-md mt-5 p-1">
                            {response}
                        </div>
                    )}
                    {error && (
                        <div className="bg-gray-600 text-red-900 text-center rounded-md p-1">
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Contact