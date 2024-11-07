import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

function Contact() {
    const contacts = [
        {
            icon: <FaEnvelope className="text-3xl" />,
            label: 'Email',
            value: 'kimdeveloper@naver.com',
            href: 'mailto:kimdeveloper@naver.com'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container max-w-4xl mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Contact Me
                </motion.h2>
                <motion.div 
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    {contact.icon}
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                                        {contact.label}
                                    </h3>
                                    <p className="text-lg text-gray-600">{contact.value}</p>
                                </div>
                            </div>
                            <FaArrowRight className="text-2xl text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;