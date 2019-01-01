import { StyleSheet } from 'react-native'
import theme from '../../constant/theme';
import { moderateScale, verticalScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  contentContainerStyle: {

  },
  collapsibleHeading: {
    // backgroundColor : "#E4E8E6"
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.secondaryColor,
    borderColor: theme.fontPrimaryColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: moderateScale(15),
    paddingLeft: moderateScale(10)
  },
  collapsibleHeadingText: {
    color: theme.fontPrimaryColor,
    fontSize: moderateScale(18)
  },
  collapsibleHeaderIcon: {
    color: theme.fontPrimaryColor,
    fontSize: moderateScale(30),
  },
  reportContainer: {
    padding: moderateScale(15),
    justifyContent: 'space-between',
  },
  harasserContainer: {
    padding: moderateScale(15),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: theme.secondaryColor,
  },
  victimsContainer: {
    padding: moderateScale(15),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: theme.secondaryColor,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(5),
  },
  headingTexts: {
    flex: 0.6,
    fontSize: moderateScale(16),
  },
  itemValueText: {
    flex: 0.4,
    textAlign: 'right'
  }
});
