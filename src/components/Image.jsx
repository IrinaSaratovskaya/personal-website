import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';



function Image(props) {
    const {category, categories, src, alt, title, titleUrl, subtitle, images} = props;

    const [photoIndex, setPhotoIndex] = useState('0');
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenImg = () => {
        setIsOpen(true);
    }

    const handleCloseImg = () => {
        setIsOpen(false);
    }

    const handleOnMovePrev = () => {
        setPhotoIndex((photoIndex + images.length - 1) % images.length);
    }

    const handleOnMoveNext = () => {
        setPhotoIndex((photoIndex + 1) % images.length);
    }

    if (categories.includes(category)) {
        return (
            <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4">
                <article className="post portfolio_post category_5">
                    <div className="post_pic portfolio_post_pic"> 
                        <a className="w_hover img-link img-wrap" onClick={handleOpenImg}> 
                            <span className="overlay"></span> 
                            <span className="link-icon"></span> 
                            <img src={src} alt={alt} /> 
                        </a> 
                    </div>
                    <h4 className="post_title">
                        <a href={titleUrl}>{title}</a>
                    </h4>
                    <h5 className="post_subtitle">{subtitle}</h5>
                </article>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={handleCloseImg}
                        onMovePrevRequest={handleOnMovePrev}
                        onMoveNextRequest={handleOnMoveNext}
                    />
                )}
            </div>
        );
    } else {
        return null;
    }

}

export default Image;