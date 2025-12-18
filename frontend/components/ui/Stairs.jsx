import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Calculate the reverse index for staggered delay
const reverseIndex = (index, totalSteps) => {
    return totalSteps - index - 1;
};

const Stairs = () => {
    const totalSteps = 6; // Number of steps

    return (
        <>
            {[...Array(totalSteps)].map((_, index) => {
                const delay = reverseIndex(index, totalSteps) * 0.1;
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.2, // Adjust the duration for smoother animation
                            ease: "easeInOut",
                            delay,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
    );
};

export default Stairs;