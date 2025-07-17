import type { ICard } from '../../../../types/card.types.ts';
import type { CSSProperties } from 'react';
import cn from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
    card: ICard;
    onClick: () => void;
    isDisabled?: boolean;
    isHided?: boolean;
    style: CSSProperties;
}

export function HandCard({ card, onClick, isDisabled, isHided, style }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className={cn(
                'h-36 w-24 bg-yellow-300 shadow inline-block -ml-2 rounded-lg cursor-pointer will-change-transform',
                {
                    'bg-yellow-300': isHided,
                    'opacity-50': isDisabled,
                },
            )}
            style={style}
            disabled={isDisabled}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 1, zIndex: 0, y: 0 }}
            animate={isHovered && !isHided ? { scale: 1.3, zIndex: 10, y: -105 } : { scale: 1, zIndex: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 210, damping: 35 }}
        >
            {!isHided && (
                <img alt={card.name} src={card.imageUrl} draggable="false" className="will-change-transform" />
            )}
        </motion.button>
    );
}
