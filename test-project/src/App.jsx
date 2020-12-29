import React, {  useState } from 'react';
import styles from './App.module.css';
import ImgList from './component/img_list/img_list';


const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
};

const App = ({ FileInput }) => {
    const [cards, setCards] = useState([]);
    const [preview, setPreview] = useState(null);
    const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

    const onDragStart = (event) => {
        const initialPosition = Number(event.currentTarget.dataset.position);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: cards,
        });
    };

    const onDragOver = (event) => {
        event.preventDefault();
        let newList = dragAndDrop.originalOrder;
        const draggedFrom = dragAndDrop.draggedFrom;
        const draggedTo = Number(event.currentTarget.dataset.position);
        const itemDragged = newList[draggedFrom];
        const remainingItems = newList.filter((item, index) => index !== draggedFrom);

        newList = [...remainingItems.slice(0, draggedTo), itemDragged, ...remainingItems.slice(draggedTo)];

        if (draggedTo !== dragAndDrop.draggedTo) {
            setDragAndDrop({
                ...dragAndDrop,
                updatedOrder: newList,
                draggedTo: draggedTo,
            });
        }
    };

    const onDrop = () => {
        setCards(dragAndDrop.updatedOrder);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false,
        });
    };

    const onDragLeave = () => {
        setDragAndDrop({
            ...dragAndDrop,
            draggedTo: null,
        });
    };

    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated)
    }

    const handlerPreviewEvent= (event) => {
        if(event.target.currentSrc !== undefined) {
            const inputImage = {
                fileURL: event.target.currentSrc
            }
            setPreview(inputImage)
        }
    } 

    return (
        <div className={styles.box}>
            <ImgList 
                cards={cards}  
                FileInput={FileInput} 
                addCard={addCard} 
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                handlerPreviewEvent={handlerPreviewEvent}
                preview={preview}
            />
        </div>
    );
};

export default App;
