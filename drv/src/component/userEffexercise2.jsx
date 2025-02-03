import { useState, useEffect } from "react";

function ImageCarousel() {
    const images = ["img1.webp", "img2.jpg", "img3.jpg", "img4.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <img src={images[currentImageIndex]} alt="carousel" style={{ width: "50%", height: "auto" }} />
        </div>
    );
}

export default ImageCarousel;
