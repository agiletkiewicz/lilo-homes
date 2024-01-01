import { useContext } from 'react';
import { CarouselContext } from './carouselContext';

export default function ArrowRight(props) {

    const {goRight} = useContext(CarouselContext)
    
    return (
        <div className="w-1/12 lg:p-5" onClick={goRight}>
            <img src="/right.png" />
        </div>
    )
};
