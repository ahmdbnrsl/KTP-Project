'use client';

import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export default function TitleAnimation({
    children,
}: {
    children: React.ReactNode;
}) {
    const animationRef = React.useRef<HTMLDivElement | null>(null);
    const isInView = useInView(animationRef);
    return (
        <motion.div
            ref={animationRef}
            initial={{
                scale: 0,
                opacity: 0,
            }}
            animate={{
                scale: isInView ? 1 : 0,
                opacity: isInView ? 100 : 0,
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.75,
            }}
        >
            {children}
        </motion.div>
    );
}
