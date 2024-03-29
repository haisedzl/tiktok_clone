import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: cutusmFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handlError = () => {
        setFallback(cutusmFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handlError}
        />
    );
});

export default Image;
