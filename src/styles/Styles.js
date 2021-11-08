import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  pd: {
    padding: 20,
  },
  pr0: {
    paddingRight: 0,
  },
  yellowText: {
    color: COLORS.orange,
  },
  whiteText: {
    color: COLORS.white,
  },
  blackText: {
    color: COLORS.black,
  },
});

export default styles;
