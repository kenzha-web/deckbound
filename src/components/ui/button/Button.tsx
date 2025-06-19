import cn from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'gray';
    isCircle?: boolean;
}

export function Button({ children, variant = 'primary', isCircle, ...rest }: Props) {
    return (
        <button
            className={cn(
                styles.button,
                styles[variant],
                {
                    [styles.circle]: isCircle,
                },
                rest.className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
}
