import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "한국투자증권",
            period: "2023.07 - 현재",
            position: "IT본부 디지털개발부",
            description: "디지털 채널 서비스 개발",
            projects: [
                {
                    name: "모바일 트레이딩 시스템 고도화",
                    period: "2023.07 - 현재",
                    details: [
                        "React Native 기반 모바일 앱 개발",
                        "실시간 시세 처리 모듈 개발",
                        "주문 시스템 연동 및 개발"
                    ],
                    skills: ["React Native", "TypeScript", "Redux"]
                }
            ]
        },
        {
            company: "신한투자증권",
            period: "2020.03 - 2023.06",
            position: "디지털개발부",
            description: "디지털 플랫폼 개발",
            projects: [
                {
                    name: "WTS(Web Trading System) 리뉴얼",
                    period: "2022.01 - 2023.06",
                    details: [
                        "Spring Boot 기반 백엔드 시스템 구축",
                        "실시간 데이터 처리 시스템 개발",
                        "RESTful API 설계 및 구현"
                    ],
                    skills: ["Spring Boot", "Java", "Oracle", "Redis"]
                },
                {
                    name: "디지털 플랫폼 통합 프로젝트",
                    period: "2020.03 - 2021.12",
                    details: [
                        "레거시 시스템 마이그레이션",
                        "MSA 아키텍처 설계 및 구현",
                        "CI/CD 파이프라인 구축"
                    ],
                    skills: ["Spring", "Docker", "Kubernetes", "Jenkins"]
                }
            ]
        }
    ];

    return (
        <section id="career" className="py-32 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.h2 
                    className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Career
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    금융 IT 시스템 개발 경험을 바탕으로 안정적이고 혁신적인 서비스를 제공합니다
                </motion.p>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                                    <p className="text-lg text-gray-600">{exp.position}</p>
                                </div>
                                <p className="text-lg text-gray-500">{exp.period}</p>
                            </div>
                            <p className="text-gray-600 mb-6">{exp.description}</p>
                            <div className="space-y-8">
                                {exp.projects.map((project, pIndex) => (
                                    <div key={pIndex} className="border-l-4 border-blue-500 pl-6">
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h4>
                                        <p className="text-gray-500 mb-3">{project.period}</p>
                                        <ul className="list-disc list-inside space-y-2 mb-4">
                                            {project.details.map((detail, dIndex) => (
                                                <li key={dIndex} className="text-gray-600">{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, sIndex) => (
                                                <span 
                                                    key={sIndex}
                                                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;