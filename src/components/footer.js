import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">김개발의 포트폴리오</h3>
                        <p className="text-gray-300">프론트엔드 개발자</p>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">Made with</span>
                        <FaHeart className="text-red-500 animate-pulse" />
                        <span className="ml-2">using React & Tailwind CSS</span>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-300 text-sm">
                    <p>&copy; {new Date().getFullYear()} 김개발. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;