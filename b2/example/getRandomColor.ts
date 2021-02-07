import { Colors } from './colors';

const getRandomColor = () => {
  const colorsArray = Object.values(Colors.colors);
  const size = colorsArray.length;
  const random = Math.floor(Math.random() * size);
  return colorsArray[random];
};

export { getRandomColor };
