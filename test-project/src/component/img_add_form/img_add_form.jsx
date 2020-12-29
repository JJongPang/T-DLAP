import React, { useRef } from 'react';
import styles from './img_add_form.module.css';

const ImageAddForm = ({FileInput, addCard}) => {
    const formRef = useRef();

    const onFileChange = file => {
        const card = {
            id: Date.now(),
            fileURL: file.url || '',
        };
        formRef.current.reset();
        addCard(card);
    };

    return (
        <form ref={formRef} className={styles.form}> 
            <FileInput onFileChange={onFileChange} />
        </form>
    );
};

export default ImageAddForm;