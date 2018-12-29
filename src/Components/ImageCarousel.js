import React from "react";
import ImageCard from "./ImageCard";


const ImageCarousel = () => {
    return (
        <div className="row">
        <ImageCard footerType="button"/>
        <ImageCard footerType="link"/>
        <ImageCard footerType="text"/>
        </div>
        

    );
}

export default ImageCarousel;