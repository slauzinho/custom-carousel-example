import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { animatedStyles, scrollInterpolators } from './animations';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: 'black' }]}>
      <Carousel
        layout={'default'}
        sliderWidth={width}
        itemWidth={width}
        bounces={false}
        data={[
          'https://picsum.photos/500/700',
          'https://picsum.photos/500/700',
          'https://picsum.photos/500/700',
          'https://picsum.photos/500/700',
          'https://picsum.photos/500/700',
        ]}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{ uri: item }}
              style={{
                width: width + 100,
                height: 700,
                backgroundColor: 'black',
              }}
            />
            <Text
              style={{
                bottom: 0,
                left: 50,
                fontSize: 40,
                color: 'red',
                position: 'absolute',
              }}
            >
              {index}
            </Text>
          </View>
        )}
        scrollInterpolator={scrollInterpolators.scrollInterpolator1}
        slideInterpolatedStyle={animatedStyles.animatedStyles1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
