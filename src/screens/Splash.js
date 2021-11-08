import React from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../styles/Styles';
import splashStyles from '../styles/Splash';

export default function Splash({navigation}) {
  function goToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={[styles.pd, splashStyles.container]}>
      {/* image */}
      <View>
        <Image
          style={splashStyles.image}
          source={require('../assets/images/watch2.png')}
        />
      </View>
      {/* text */}
      <View style={splashStyles.textContainer}>
        <Text style={splashStyles.title}>Find the Best</Text>
        <Text>
          <Text style={[splashStyles.title, styles.yellowText]}>Watches </Text>
          <Text style={splashStyles.title}>For You</Text>
        </Text>
        <Text style={splashStyles.description}>
          {'There are new watches that\nmake you cool'}
        </Text>
        <TouchableHighlight onPress={() => goToHome()}>
          <View style={splashStyles.button}>
            <Text style={styles.blackText}>Get Started</Text>
            <Icon name="arrow-forward-outline" type="ionicon" />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
