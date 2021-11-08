import {StyleSheet} from 'react-native';
import COLORS from './Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.black,
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    resizeMode: 'cover',
    transform: [
      {
        rotate: '-10deg',
      },
    ],
  },
  //
  textContainer: {
    marginTop: 30,
    width: '100%',
    backgroundColor: COLORS.lightBlack,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 20,
    textAlign: 'center',
    color: COLORS.blackText,
  },
  //
  button: {
    flexDirection: 'row',
    backgroundColor: COLORS.orange,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default styles;
