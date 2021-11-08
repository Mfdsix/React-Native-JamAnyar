import {Dimensions, StyleSheet} from 'react-native';
import COLORS from './Colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 24,
  },
  notificationHeaderContainer: {
    position: 'relative',
  },
  notificationIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.orange,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  //
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBoxContainer: {
    flexDirection: 'row',
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginEnd: 20,
    padding: 12,
    alignItems: 'center',
  },
  searchText: {
    marginStart: 10,
    color: COLORS.blackText,
  },
  filterContainer: {
    backgroundColor: COLORS.orange,
    padding: 12,
    borderRadius: 10,
  },
  //
  categoryContainer: {
    paddingTop: 10,
    paddingRight: 0,
  },
  categoryItemContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: COLORS.white,
    borderWidth: 1,
    marginEnd: 15,
  },
  categoryItemText: {
    color: COLORS.white,
  },
  categoryItemActive: {
    backgroundColor: COLORS.orange,
    borderColor: null,
    borderWidth: 0,
  },
  //
  watchListItem: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightBlack,
    margin: 2,
    flex: 1,
  },
  watchListImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'cover',
    transform: [
      {
        rotate: '20deg',
      },
    ],
  },
  watchListDetailContainer: {
    marginTop: 10,
  },
  watchListItemNameContainer: {
    flexDirection: 'row',
  },
  watchListItemName: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
  },
  watchListPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  watchListItemPrice: {
    color: COLORS.orange,
    fontWeight: 'bold',
  },
  watchListItemIconContainer: {
    backgroundColor: COLORS.orange,
    padding: 6,
    borderRadius: 5,
  },
  //
});

export default styles;
