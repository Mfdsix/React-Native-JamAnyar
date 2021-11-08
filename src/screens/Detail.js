import React from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import WATCHES from '../assets/data/watches';
import styles from '../styles/Styles';
import detailStyles from '../styles/Detail';
import COLORS from '../styles/Colors';

export default function Detail({navigation}) {
  const WATCH = WATCHES[3];

  function goToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={detailStyles.headerContainer}>
        <TouchableHighlight onPressIn={() => goToHome()}>
          <View style={detailStyles.headerIconContainer}>
            <Icon
              color={COLORS.white}
              name="arrow-back-outline"
              type="ionicon"
            />
          </View>
        </TouchableHighlight>
        <View style={detailStyles.headerIconContainer}>
          <Icon color={COLORS.orange} name="heart-outline" type="ionicon" />
        </View>
      </View>
      {/* content */}
      <ScrollView
        style={
          (styles.container,
          {
            marginTop: -50,
          })
        }>
        {/* image */}
        <View style={detailStyles.imageContainer}>
          <View style={detailStyles.imageCircleLarge}></View>
          <View style={detailStyles.imageCircleMedium}></View>
          <Image style={detailStyles.watchImage} source={WATCH.image} />
        </View>
        {/* description */}
        <View
          style={[
            styles.pd,
            {
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}>
          <Text style={detailStyles.watchName}>{WATCH.name}</Text>
          <View style={detailStyles.cartIconContainer}>
            <Icon color={COLORS.black} name="add-outline" type="ionicon" />
          </View>
        </View>
        {/* options */}
        <View style={detailStyles.optionsContainer}>
          <View
            style={[
              detailStyles.optionsItemContainer,
              detailStyles.optionsItemContainerWithBorder,
            ]}>
            <Text style={detailStyles.optionTitle}>Color:</Text>
            <View style={detailStyles.optionCriteriasContainer}>
              {WATCH.colors.map((color, index) => (
                <View
                  key={index}
                  style={[
                    detailStyles.colorItem,
                    {
                      backgroundColor: color,
                    },
                    index == 0 ? detailStyles.colorActive : {},
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={detailStyles.optionsItemContainer}>
            <Text style={detailStyles.optionTitle}>Size:</Text>
            <View style={detailStyles.optionCriteriasContainer}>
              {WATCH.sizes.map((size, index) => (
                <View key={index} style={detailStyles.optionSizeContainer}>
                  <Text>{size}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* footer */}
        <View style={detailStyles.footerContainer}>
          <Text style={detailStyles.watchPrice}>${WATCH.price}</Text>
          <TouchableHighlight style={detailStyles.buyButton}>
            <Text style={detailStyles.buyButtonText}>Buy Now</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}
