import { useContext } from 'react';
import { CarouselContext } from './carouselContext';

export default function ArrowLeft(props) {

    const {goLeft} = useContext(CarouselContext)
    
    return (
        <div className="w-1/12 lg:p-5" onClick={goLeft}>
            <img src="/left.png" />
        </div>
    )
};
