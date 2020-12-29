import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageUploader from './service/image_uploader';
import ImgInput from './component/img_input/img_input';

const imageUploader = new ImageUploader();
const FileInput = memo((props) => <ImgInput {...props} imageUploader={imageUploader} />);

ReactDOM.render(
    <React.StrictMode>
        <App FileInput={FileInput} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
