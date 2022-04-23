import { motion } from "framer-motion"

function Button ({children, className}) {
    return (
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={className}
        >{children}</motion.button>
    )
}

export default Button