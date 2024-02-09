import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Bookmark, Heart, MessageCircle, Send} from 'lucide-react-native';
import {Dimensions} from 'react-native';

import {HStack, Box, Image, Text} from '@gluestack-ui/themed';

const GalleryCarousel: React.FC = (props: any) => {
  const {item} = props;
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const CarouselItem = ({data}: any) => {
    return (
      <Box style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          height={400}
          width={windowWidth}
          source={{
            uri: item?.isLocal ? data.assets[0].uri : data,
          }}
        />
      </Box>
    );
  };

  const sliderRef = useRef(null);
  const [ActiveSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Box
      mx="auto"
      space="xl"
      justifyContent="center"
      // py={1}
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}>
      <Carousel
        ref={sliderRef}
        data={item?.images ? item.images : []}
        renderItem={({item}) => <CarouselItem data={item} />}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        hasParallaxImages={true}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={{
          overflow: 'visible',
        }}
        loop={false}
        loopClonesPerSide={2}
        autoplay={false}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={index => setActiveSlideIndex(index)}
      />
      <Box flexDirection="row" justifyContent="space-between" mx={6} my={5}>
        <Box flexDirection="row" width={'60%'} justifyContent="space-between">
          <HStack columnGap={10}>
            <Heart color="black" size={25} />
            <MessageCircle color="black" size={25} />
            <Send color="black" size={25} />
          </HStack>

          {item.images.length > 1 ? (
            <Box>
              <Pagination
                dotsLength={item.images.length}
                activeDotIndex={ActiveSlideIndex}
                containerStyle={{paddingVertical: 8}}
                dotColor={'#3897F0'}
                dotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginHorizontal: -8,
                }}
                inactiveDotColor={'black'}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={sliderRef}
                tappableDots={!!sliderRef}
              />
            </Box>
          ) : null}
        </Box>

        <Bookmark color="black" size={25} />
      </Box>

      <Box mx={8}>
        <Text color="black">86 likes</Text>
        <HStack>
          <Text color="black" fontWeight='$bold'>{item?.userName ? item.userName : 'Anci'}</Text>
          <Text ml={6} color="black">
            {item?.content ? item.content : 'Caption'}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default GalleryCarousel;
