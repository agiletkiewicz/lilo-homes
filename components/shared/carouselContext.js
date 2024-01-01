import { createContext } from "react";

export const CarouselContext = createContext({
  idx: 0,
  goLeft: () => {},
  goRight: () => {}
});