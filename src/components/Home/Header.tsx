import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';
import InstaLogo from '../../../assets/InstaLogo';
import {
  Box,
  FavouriteIcon,
  Icon,
  MessageCircleIcon,
} from '@gluestack-ui/themed';


import { Heart, LogOut, MessageCircleCode } from 'lucide-react-native';


const Header = () => {
  return (
    <Box flexDirection="row" my={8}>
      <Box flex={1}>
        <TouchableOpacity>
          <InstaLogo />
        </TouchableOpacity>
      </Box>

      <Box flexDirection="row" columnGap={20} px={5}>
      <Heart color="black" size={25} />
      <MessageCircleCode color="black" size={25} />
      {/* <LogOut color="black" size={25} /> */}
      </Box>
    </Box>
  );
};

export default Header;
