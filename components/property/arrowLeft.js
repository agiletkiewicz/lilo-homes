import { useContext } from 'react';
import { CarouselContext } from './carouselContext';

export default function ArrowLeft(props) {

    const {goLeft} = useContext(CarouselContext)
    
    return (
        <div className="" onClick={goLeft}>
            &#9664;
        </div>
    )
};
