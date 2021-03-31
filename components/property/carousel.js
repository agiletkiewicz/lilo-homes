import { useState } from 'react';
import Image from './image'
import Arrow from './arrow'


export default function Carousel({ images }) {

    const [idx, setIdx] = useState(0);
    const lastIdx = images.length - 1;
    
    function goLeft() {
        if (idx === 0) {
            setIdx(lastIdx);
        } else {
            setIdx(prevState => prevState - 1);
        }
    };

    function goRight() {
        if (idx === lastIdx) {
            setIdx(0);
        } else {
            setIdx(prevState => prevState + 1);
        }
    };

    return (
        <div className="flex flex-wrap justify-between items-center pt-10 pb-10">
            {console.log()}
            <Arrow glyph="&#9664;" onClick={goLeft} />
            <Image url={images[idx].url} />
            <Arrow glyph="&#9654;" onClick={goRight} />
        </div>
    )
};