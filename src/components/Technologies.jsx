import React from 'react';
import {RiVuejsLine} from "react-icons/ri";
import {RiReactjsLine} from "react-icons/ri";
import {RiBootstrapFill} from "react-icons/ri";
import {RiNextjsFill} from "react-icons/ri";
import {RiTailwindCssFill} from "react-icons/ri";
import {RiJavascriptFill} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y:-10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{ duration: 1.5}}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{ duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiJavascriptFill className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiVuejsLine className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 inline-flex items-center justify-center bg-black">
                    <RiNextjsFill className="text-7xl text-white"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiBootstrapFill className="text-7xl text-purple-700"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiTailwindCssFill className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <FaNodeJs className="text-7xl text-green-600"/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;