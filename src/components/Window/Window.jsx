import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import styles from './Window.module.css';

const Window = ({ id, title, children, onClose, isOpen, zIndex, isActive, onFocus, initialPosition }) => {
    const nodeRef = useRef(null);

    if (!isOpen) return null;

    return (
        <Draggable
            nodeRef={nodeRef}
            handle={`.${styles.titleBar}`}
            defaultPosition={initialPosition || { x: 100, y: 100 }}
            onStart={onFocus}
        >
            <div
                ref={nodeRef}
                className={`${styles.window} ${isActive ? styles.active : ''}`}
                style={{ zIndex }}
                onClick={onFocus}
            >
                <div className={styles.titleBar}>
                    <div className={styles.buttons}>
                        <button className={`${styles.button} ${styles.close}`} onClick={(e) => { e.stopPropagation(); onClose(id); }}></button>
                        <button className={`${styles.button} ${styles.minimize}`}></button>
                        <button className={`${styles.button} ${styles.maximize}`}></button>
                    </div>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Draggable>
    );
};

export default Window;
