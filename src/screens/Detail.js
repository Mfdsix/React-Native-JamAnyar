import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import WATCHES from '../assets/data/watches';

export default function Detail() {
  const WATCH = WATCHES[0];

  return (
    <View>
      {/* header */}
      <View>
        <View>
          <Icon name="" type="" />
        </View>
        <View>
          <Icon name="" type="" />
        </View>
      </View>
      {/* content */}
      <View>
        {/* image */}
        <View>
          <View></View>
          <View></View>
          <Image src={WATCH.image} />
        </View>
        {/* description */}
        <View>
          <Text>{WATCH.name}</Text>
          <View>
            <Icon name="" type="" />
          </View>
        </View>
        {/* options */}
        <View>
          <View>
            <Text>Color:</Text>
            {WATCH.colors.map((color, index) => (
              <View
                key={index}
                style={[
                  {
                    backgroundColor: color,
                  },
                ]}></View>
            ))}
          </View>
          <View>
            <Text>Size:</Text>
            {WATCH.sizes.map((size, index) => (
              <View key={index}>{size}</View>
            ))}
          </View>
        </View>
      </View>
      {/* footer */}
      <View>
        <Text>${WATCH.price}</Text>
        <TouchableHighlight>
          <Text>Buy Now</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
