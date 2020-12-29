import React, { memo } from 'react';
import styles from './img_preview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage} from "@fortawesome/free-solid-svg-icons"

const ImgPreview = memo(({preview, cards}) => {
    return (
        <li className={styles.preview}>
            { preview && cards && <img className={styles.img} src={preview.fileURL} alt="card" /> }
            { 
                !preview && 
                    <div className={styles.box}>
                        <FontAwesomeIcon className={styles.icon} icon={faImage} />
                        <span className={styles.title}>Choose an Image</span>
                    </div>
                }
        </li>
    );
});

export default ImgPreview;