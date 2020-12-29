import ImageAddForm from '../img_add_form/img_add_form';
import ImgItem from '../img_item/img_item';
import ImgPreview from '../img_preview/img_preview';
import styles from './img_list.module.css';


const ImgList = ({ preview, handlerPreviewEvent, cards, addCard, FileInput, onDragStart, onDragOver, onDrop, onDragLeave,imgePreview }) => {
    return (
        <div className={styles.box}>
            <ul className={styles.list} onClick={handlerPreviewEvent}>
                <ImgPreview cards={cards} preview={preview} />
                {
                    cards.map((card, index) => (
                        <ImgItem 
                            key={card.id} 
                            card={card}
                            dataPosition={index}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            onDragLeave={onDragLeave}
                        />
                    ))
                }
            </ul>
            <ImageAddForm FileInput={FileInput} addCard={addCard} />
        </div>
    );
};

export default ImgList;