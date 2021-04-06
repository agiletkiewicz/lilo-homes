import { useContext } from 'react';
import { CarouselContext } from './carouselContext';

export default function ArrowRight(props) {

    const {goRight} = useContext(CarouselContext)
    
    return (
        <div className="" onClick={goRight}>
            &#9654;
        </div>
    )
};
