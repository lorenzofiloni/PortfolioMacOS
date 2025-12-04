import React from 'react';
import styles from './Desktop.module.css';

const Desktop = ({ children }) => {
    return (
        <div className={styles.desktop}>
            {children}
        </div>
    );
};

export default Desktop;
