import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from 'store';
import './style.scss';

const ImagePreview = ({ url, image }) => {
    const [state, dispatch] = useContext(Context);
    const history = useHistory();

    const selectImage = () => {
        dispatch({ type: 'SELECT_IMAGE', payload: image });
        history.push('/details');
    }

    return (
        <div className="image-preview">
            <img src={url} alt="Preview" onClick={selectImage} />
        </div>
    )
}

ImagePreview.propTypes = {
    url: PropTypes.string,
    image: PropTypes.object
}

export default ImagePreview;