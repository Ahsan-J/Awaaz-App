import {StyleSheet} from 'react-native'
import { getDeviceHeight, getDeviceWidth } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  launchImage: {
    height: getDeviceHeight(),
    width: getDeviceWidth(),
  },
});
