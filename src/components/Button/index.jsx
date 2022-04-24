import { motion } from "framer-motion"

function Button ({children, className, type, onClick}) {
    return (
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={className}
        type={type}
        onClick={onClick}
        >{children}</motion.button>
    )
}

export default Button