import { Dimensions } from 'react-native';

export let height = Dimensions.get('window').height
export let width = Dimensions.get('window').width

export const setWidth = (data) =>{
  width = data
}
export const setHeight = (data) =>{
  height = data
}
// @ts-ignore
const guidelineBaseWidth = 350;
export const scale = (size) => {
  // @ts-ignore
  const teh = width < height ? width : height
  if(width > 650){
  return (teh / 1.9) / guidelineBaseWidth * size
  }
  return teh / guidelineBaseWidth * size
};
