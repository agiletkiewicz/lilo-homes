import { useContext } from 'react';
import { CarouselContext } from './carouselContext';

export default function Text(props) {

  const {idx} = useContext(CarouselContext)

  return (
    <div className="w-10/12 lg:w-6/12">
      <p>{props.texts[idx]}</p>
    </div>
  )
};