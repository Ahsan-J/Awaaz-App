import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { moderateScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondaryColor,
  },
  buttonsWrapper : {
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  touchableWrapper : {
    margin:moderateScale(0.5),
    alignItems:'center',
    justifyContent:'center',
    borderWidth : moderateScale(1),
    borderColor : theme.primaryColor,
  },
  buttonText : {
    marginTop : moderateScale(10),
    color : theme.fontPrimaryColor,
  },  
  buttonIcon : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(30),
  },
  chart: {
    flex: 1
  }

});
