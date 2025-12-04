import React from 'react';
import styles from './Dock.module.css';
import { apps } from '../../config/fileSystem.jsx';

const Dock = () => {
    return (
        <div className={styles.dockContainer}>
            <div className={styles.dock}>
                {apps.map((app) => (
                    <div key={app.id} className={styles.dockItem}>
                        <div className={styles.iconPlaceholder}>{app.name[0]}</div>
                        <span className={styles.tooltip}>{app.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dock;
