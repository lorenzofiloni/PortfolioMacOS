import React from 'react';
import styles from './FileIcon.module.css';

const FileIcon = ({ name, type, onClick, position, previewImage }) => {
    return (
        <div
            className={styles.fileIcon}
            style={{ top: position.y, left: position.x }}
            onClick={onClick}
        >
            <div className={styles.iconGraphic}>
                {previewImage ? (
                    <img src={previewImage} alt={name} className={styles.previewImage} />
                ) : (
                    <>
                        <div className={styles.fileCorner}></div>
                        <span className={styles.typeLabel}>{type.toUpperCase()}</span>
                    </>
                )}
            </div>
            <span className={styles.fileName}>{name}</span>
        </div>
    );
};

export default FileIcon;
