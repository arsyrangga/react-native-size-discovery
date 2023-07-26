import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export let height = Dimensions.get('window').height
export let width = Dimensions.get('window').width
export let isTabletAll = DeviceInfo.isTablet() === true;
export let isTablet =
Platform.OS === 'android' && DeviceInfo.isTablet() === true;
export let isTabletIOS =
  Platform.OS === 'ios' && DeviceInfo.isTablet() === true;



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
  if(width > 650 && !isTablet && !isTabletAll && isTabletIOS){
  return (teh / 2) / guidelineBaseWidth * size
  }
  return teh / guidelineBaseWidth * size
};
