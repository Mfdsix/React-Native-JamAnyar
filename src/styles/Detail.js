import {Dimensions, StyleSheet} from 'react-native';
import COLORS from './Colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    zIndex: 1,
  },
  headerIconContainer: {
    backgroundColor: COLORS.lightBlack,
    padding: 10,
    borderRadius: 10,
  },
  //
  imageContainer: {
    position: 'relative',
  },
  imageCircleLarge: {
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: COLORS.lightBlack,
  },
  imageCircleMedium: {
    width: width - 80,
    height: width - 80,
    borderRadius: (width - 80) / 2,
    backgroundColor: COLORS.lightBlack2,
    position: 'absolute',
    left: width / 2 - (width - 80) / 2,
    top: width / 2 - (width - 80) / 2,
  },
  watchImage: {
    position: 'absolute',
    width: 250,
    height: 250,
    transform: [
      {
        rotate: '20deg',
      },
    ],
    left: width / 2 - 125,
    top: width / 2 - 125,
  },
  //
  watchName: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 24,
    marginEnd: 20,
    flex: 1,
    flexWrap: 'wrap',
  },
  cartIconContainer: {
    padding: 10,
    backgroundColor: COLORS.orange,
    borderRadius: 10,
  },
  optionsContainer: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 30,
    flexDirection: 'row',
  },
  optionsItemContainer: {
    padding: 10,
    flex: 1,
  },
  optionsItemContainerWithBorder: {
    borderColor: COLORS.white,
    borderRightWidth: 1,
  },
  optionTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionCriteriasContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  colorItem: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: COLORS.orange,
    marginEnd: 5,
  },
  colorActive: {
    borderColor: COLORS.orange,
    borderWidth: 1,
  },
  optionSizeContainer: {
    borderColor: COLORS.white,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginEnd: 4,
  },
  //
  footerContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: COLORS.lightBlack,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  watchPrice: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  buyButton: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.orange,
    borderRadius: 20,
  },
  buyButtonText: {
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
