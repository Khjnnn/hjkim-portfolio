import React, { useEffect, useState } from 'react';  // useState와 useEffect를 import 추가
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

function ProjectModal({ project, isOpen, onClose }) {
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (project && project.file) {
            fetch(project.file)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(text => {
                    setContent(text);
                    setError(null);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    setError(error);
                });
        }
    }, [project]);

    if (!isOpen) return null;

    if (error) {
        return (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <motion.div 
                    className="bg-white rounded-lg shadow-lg p-8 w-full h-full overflow-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Error</h2>
                    <p className="text-gray-700">Markdown 파일을 불러올 수 없습니다.</p>
                    <button 
                        onClick={onClose} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
                    >
                        Close
                    </button>
                </motion.div>
            </div>
        );
    }
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 w-full h-full overflow-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <ReactMarkdown className="prose">
                    {content}
                </ReactMarkdown>
                <button 
                    onClick={onClose} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
}

export default ProjectModal;