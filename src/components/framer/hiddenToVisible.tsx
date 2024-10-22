import { motion } from 'framer-motion';

export default function HiddenToVisible({
    IsClassName,
    children,
}: {
    IsClassName?: string;
    children?: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className={IsClassName}
        >
            {children}
        </motion.div>
    );
}
