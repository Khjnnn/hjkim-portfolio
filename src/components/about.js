import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20">
            <motion.div 
                className="container max-w-4xl mx-auto px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                            alt="Developer Avatar"
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <Typewriter
                        words={['안녕하세요, 저는 김개발입니다.']}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                    />
                </h2>
                <motion.p 
                    className="text-xl text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    창의적인 문제 해결과 사용자 중심의 웹 개발을 추구하는 
                    <span className="text-blue-600 font-semibold"> 프론트엔드 개발자</span>입니다.
                    <br />
                    최신 기술 트렌드를 따라가며 지속적인 성장을 추구합니다.
                </motion.p>
            </motion.div>
        </section>
    );
}

export default About;