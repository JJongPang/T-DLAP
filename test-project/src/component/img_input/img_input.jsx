import React, { memo, useRef, useState } from 'react';
import styles from './img_input.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage} from "@fortawesome/free-solid-svg-icons"

const ImgInput = memo(({imageUploader, onFileChange}) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }
    
    const onChange = async (event) => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onFileChange({
            url: uploaded.url
        })
    }

    return (
        <div>
            <input ref={inputRef} className={styles.input} type="file" name="file" accept="image/*"  onChange={onChange} />
                {!loading && 
                    <button className={styles.button} onClick={onButtonClick}>
                        <FontAwesomeIcon className={styles.icon} icon={faImage} />
                        <span className={styles.title}>Add Image</span>
                    </button>}
                {loading && <div className={styles.loading}></div>}
        </div>
    );
});

export default ImgInput;