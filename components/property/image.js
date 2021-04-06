import { useContext } from 'react';
import { CarouselContext } from './carouselContext';


export default function Image(props) {

    const {idx} = useContext(CarouselContext)

    return (
        <div className="w-11/12 lg:w-6/12">
            <img src={props.images[idx].url} />
        </div>
    )
};