import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imagList = props.images.map((image)=>{
        return <ImageCard image={image}/>
    });
    return <div className="image-list">{imagList}</div>;
}

export default ImageList;