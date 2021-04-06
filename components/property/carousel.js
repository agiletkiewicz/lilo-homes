import { useState } from 'react';
import Image from './image';
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';
import { CarouselContext } from './carouselContext';

function Carousel(props) {

    const [idx, setIdx] = useState(0);
    const lastIdx = props.lastIdx;
    
    const goLeft = () => {
        if (idx === 0) {
            setIdx(lastIdx);
        } else {
            setIdx(prevState => prevState - 1);
        }
    };

    const goRight = () => {
        if (idx === lastIdx) {
            setIdx(0);
        } else {
            setIdx(prevState => prevState + 1);
        }
    };

    return (
        <CarouselContext.Provider value={{idx, goLeft, goRight}}>
            <div className="">
                <div className="flex flex-wrap justify-between items-center lg:justify-center pt-10 pb-10 ">
                    {props.children}
                </div>
            </div>
        </CarouselContext.Provider>
    )
};

Carousel.ArrowLeft = ArrowLeft;
Carousel.ArrowRight = ArrowRight;
Carousel.Image = Image;

export default Carousel;