import React from 'react';
import { PROJECTS } from "../constants/index.js";
import "./About.css"
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{ duration: 0.5}}
                className="my-20 text-center text-4xl">
               Projects
           </motion.h2>
            <div>
                {PROJECTS.map((project,index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{ duration: 1}}
                            className="w-full lg:w-1/4">
                            <img src={project.image} alt={project.title} className="mb-6 rounded image-150"/>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{ duration: 1}}
                            className="w-full max-w-xl lg:w-3/4 flex flex-wrap">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="text-neutral-400 mb-4">{project.description}</p>
                            <div className="flex space-x-4 mb-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Live
                                    </a>
                                )}
                                {project.sourceUrl && (
                                    <a
                                        href={project.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Source
                                    </a>
                                )}
                            </div>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-10 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;