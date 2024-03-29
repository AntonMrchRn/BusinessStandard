import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === 'ios' &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 844 ||
    deviceWidth === 844 ||
    deviceHeight === 896 ||
    deviceWidth === 896 ||
    deviceHeight === 926 ||
    deviceWidth === 926);

export default {
  // system
  ios: platform === 'ios',
  android: platform === 'android',
  platformStyle,
  platform,
  // Color
  brandColor: '#59ad40',
  tabBarActiveColor: '#59ad40',
  tabBarInactiveColor: '#282828',
  gray: '#383838',
  lightGray: '#757575',
  darkGray: '#292929',
  //errors
  deviceWidth,
  deviceHeight,
  isIphoneX,

  shadow:
    platform === 'ios'
      ? {
          shadowColor: '#575757',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.35,
          shadowRadius: 3.5,

          elevation: 3,
        }
      : {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.35,
          shadowRadius: 3,

          elevation: 6,
        },
};

export function opacify(color = '#ffffff', opacity = 1) {
  const o = Math.round(opacity * 256);
  const hexOpacity = o.toString(16);
  return color.concat(hexOpacity);
}
