import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaAws, FaDocker, FaLinux } from 'react-icons/fa';
import { SiSpring, SiJavascript, SiOracle, SiMysql, SiMicrosoftsqlserver, SiMariadb, SiHtml5, SiCss3, SiJquery, SiNginx, SiApachetomcat } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
    const skills = [
        {
            category: 'Backend Development',
            description: '안정적이고 확장 가능한 서버 시스템을 구축합니다.',
            items: [
                { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
                { name: 'Spring', icon: <SiSpring className="text-[#6DB33F]" /> },
                { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> }
            ],
            bgColor: 'from-green-50 to-emerald-50'
        },
        {
            category: 'Frontend Development',
            description: '모던 웹 개발을 위한 다양한 프론트엔드 기술을 활용합니다.',
            items: [
                { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
                { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
                { name: 'jQuery', icon: <SiJquery className="text-[#0769AD]" /> }
            ],
            bgColor: 'from-blue-50 to-cyan-50'
        },
        {
            category: 'Database',
            description: '다양한 데이터베이스 시스템을 활용한 데이터 관리.',
            items: [
                { name: 'Oracle', icon: <SiOracle className="text-[#F80000]" /> },
                { name: 'MS SQL', icon: <SiMicrosoftsqlserver className="text-[#CC2927]" /> },
                { name: 'MariaDB', icon: <SiMariadb className="text-[#003545]" /> },
                { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> }
            ],
            bgColor: 'from-orange-50 to-yellow-50'
        },
        {
            category: 'DevOps & Infrastructure',
            description: '효율적인 개발 환경과 인프라를 구축하고 운영합니다.',
            items: [
                { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: 'AWS', icon: <FaAws className="text-[#232F3E]" /> },
                { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
                { name: 'Linux', icon: <FaLinux className="text-[#FCC624]" /> },
                { name: 'Nginx', icon: <SiNginx className="text-[#009639]" /> },
                { name: 'Tomcat', icon: <SiApachetomcat className="text-[#F8DC75]" /> }
            ],
            bgColor: 'from-purple-50 to-pink-50'
        }
    ];

    return (
        <section id="skills" className="py-32 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.h2 
                    className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    다양한 기술 스택을 활용하여 최적의 솔루션을 제공합니다
                </motion.p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gradient-to-br ${skill.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                {skill.category}
                            </h3>
                            <p className="text-gray-600 mb-6">{skill.description}</p>
                            <div className="flex flex-wrap gap-6">
                                {skill.items.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        className="flex flex-col items-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index * 0.1) + (i * 0.1) }}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center text-3xl mb-2 hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm text-gray-600">{item.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;