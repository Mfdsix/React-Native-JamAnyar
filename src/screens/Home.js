import {isTSEnumMember} from '@babel/types';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {Icon} from 'react-native-elements';
import CATEGORIES from '../assets/data/categories';

export default function Home() {
  return (
    <View>
      {/* header */}
      <View>
        <View>
          <Text>Buy Your Item</Text>
          <Text>Desired Watch</Text>
        </View>
        <View>
          <Icon name="" type="" />
          <View></View>
        </View>
      </View>
      {/* search */}
      <View>
        <View>
          <Icon name="" type="" />
          <Text>Search here...</Text>
        </View>
        <View>
          <Icon name="" type="" />
        </View>
      </View>
      {/* category slider */}
      <View>
        {CATEGORIES.map((category, index) => (
          <View>
            <Text>{category.name}</Text>
          </View>
        ))}
      </View>
      {/* watch list */}
      <View>
        <FlatList
          numColumns={2}
          data={CATEGORIES}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              key={index}
              onPress={() => alert('hai')}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View>
                <Image src={item.image} />
                <View>
                  <Text>{item.name}</Text>
                  <View>
                    <Text>${item.price}</Text>
                    <Icon name="" type="" />
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
      {/*  */}
    </View>
  );
}
