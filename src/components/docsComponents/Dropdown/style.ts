import { StyleSheet } from 'react-native';
import platform from '../../../helpers/platform';

const styles = StyleSheet.create({
  dropDown: {
    backgroundColor: '#e8e8e8',
    borderColor: platform.brandColor,
    borderWidth: 1.15,
    borderRadius: 18,
    height: 45,
  },
  text: {
    fontSize: 14.4,
  },
  container: {
    alignItems: 'center',
    width: '83%',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upload: {
    bottom: 1,
    marginLeft: 5,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownContainer: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    borderColor: platform.brandColor,
    borderTopColor: '#e8e8e8',
    borderRadius: 18,
  },
});

export default styles;
