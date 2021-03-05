import React, { useState, useEffect } from 'react';
import ImagePreview from 'components/ImagePreview';
import { getImages } from 'helpers/image';
import './style.scss';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [imageFetchError, setImageFetchError] = useState('');

    useEffect(() => {
        try {
            async function fetchImages() {
                const imagesData = await getImages();
                setImages(imagesData);
            }

            fetchImages();
        } catch (err) {
            const errMsg = err.response.data.message;
            setImageFetchError(errMsg)
        }
    })

    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <div className="image-list">
                {!imageFetchError && images.map(image => (
                    <ImagePreview url={image.url} image={image} key={image.id} />
                ))}
            </div>
            {imageFetchError && (
                <div className="error">{imageFetchError}</div>
            )}
        </div>
    )
};

export default Gallery;