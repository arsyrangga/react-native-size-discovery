import { Dimensions } from 'react-native';

export let height = Dimensions.get('window').height
export let width = Dimensions.get('window').width

export const setWidth = (data : number) =>{
  width = data
}
export const setHeight = (data : number) =>{
  height = data
}
// @ts-ignore
const guidelineBaseWidth = 350;
export const scale = (size : number) => {
  // @ts-ignore
  const teh = width < height ? width : height
  return teh / guidelineBaseWidth * size
};
