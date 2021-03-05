import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from 'store';
import './style.scss';

const Details = () => {
    const [state, dispatch] = useContext(Context);
    const { selectedImage } = state;

    const history = useHistory();

    const goBack = () => {
        dispatch({ type: 'SELECT_IMAGE', payload: '' });
        history.push('/');
    }

    return (
        <div className="details">
            <img src={selectedImage.url} className="image" alt="Detail Image" />
            <div className="image-info">
                <div className="info-item">
                    Name: {selectedImage.name}
                </div>
                <div className="info-item">
                    URL: {selectedImage.url}
                </div>
                <div className="info-item">
                    Width: {selectedImage.width}
                </div>
                <div className="info-item">
                    Height: {selectedImage.height}
                </div>
            </div>
            <div className="back" onClick={goBack}>Back</div>
        </div>
    )
};

export default Details;