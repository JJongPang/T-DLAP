import React from 'react';
import styles from './img_item.module.css';

const ImgItem = ({ card, onDragStart, onDragOver, onDrop, onDragLeave, dataPosition}) => {
    return(
        <li 
            className={styles.item}
            data-position={dataPosition}
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
        >
            <img className={styles.img} src={card.fileURL} alt="card" />
        </li>
    )
};

export default ImgItem;