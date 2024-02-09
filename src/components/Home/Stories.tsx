import {Divider, ScrollView} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Box} from '@gluestack-ui/themed';
import InstaStory from 'react-native-insta-story';
import {dummystories} from '../../../utils/constants';

const Stories = () => {
  const [display, setDisplay] = useState(dummystories);

  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box style={{height: '120%', width: '100%', flexDirection: 'row'}}>
          <InstaStory
            data={display}
            duration={10}
            onStart={item => console.log(item)}
            onClose={item => console.log('close: ', item)}
          />
        </Box>
      </ScrollView>
      <Divider my="$0.5" />
    </Box>
  );
};

export default Stories;
