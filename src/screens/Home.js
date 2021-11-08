import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import CATEGORIES from '../assets/data/categories';
import WATCHES from '../assets/data/watches';
import styles from '../styles/Styles';
import homeStyles from '../styles/Home';
import COLORS from '../styles/Colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Home({navigation}) {
  function goToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* header */}
        <View style={[homeStyles.headerContainer, styles.pd]}>
          <View>
            <Text style={homeStyles.headerText}>Buy Your</Text>
            <Text style={[homeStyles.headerText, styles.boldText]}>
              Desired Watch
            </Text>
          </View>
          <View style={homeStyles.notificationHeaderContainer}>
            <Icon
              color={COLORS.white}
              name="notifications-outline"
              type="ionicon"
            />
            <View style={homeStyles.notificationIndicator}></View>
          </View>
        </View>
        {/* search */}
        <View style={[homeStyles.searchContainer, styles.pd]}>
          <View style={homeStyles.searchBoxContainer}>
            <Icon name="search-outline" type="ionicon" color={COLORS.white} />
            <Text style={homeStyles.searchText}>Search here...</Text>
          </View>
          <View style={homeStyles.filterContainer}>
            <Icon name="options-outline" type="ionicon" />
          </View>
        </View>
        {/* category slider */}
        <View style={[styles.pd, homeStyles.categoryContainer]}>
          <ScrollView horizontal={true}>
            {CATEGORIES.map((category, index) => (
              <View
                key={index}
                style={[
                  homeStyles.categoryItemContainer,
                  index == 1 ? homeStyles.categoryItemActive : null,
                ]}>
                <Text
                  style={[
                    homeStyles.categoryItemText,
                    index == 1 ? styles.blackText : null,
                  ]}>
                  {category.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* watch list */}
        <SafeAreaProvider
          style={[
            styles.pd,
            {
              marginBottom: 30,
            },
          ]}>
          <FlatList
            data={WATCHES}
            renderItem={({item, index, separators}) => (
              <TouchableHighlight
                style={{flex: 1}}
                key={index}
                onPress={() => goToDetail()}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View style={homeStyles.watchListItem}>
                  <Image
                    source={item.image}
                    style={homeStyles.watchListImage}
                  />
                  <View style={homeStyles.watchListDetailContainer}>
                    <View style={homeStyles.watchListItemNameContainer}>
                      <Text style={homeStyles.watchListItemName}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={homeStyles.watchListPriceContainer}>
                      <Text style={homeStyles.watchListItemPrice}>
                        ${item.price}
                      </Text>
                      <View style={homeStyles.watchListItemIconContainer}>
                        <Icon size={20} name="add-outline" type="ionicon" />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
            numColumns={2}
          />
        </SafeAreaProvider>
        {/*  */}
      </View>
    </ScrollView>
  );
}
