/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

import {styles} from '../styles';
import {
  Box,
  Text,
  FlatList,
  Avatar,
  Pressable,
  VStack,
  HStack,
  Image,
  AvatarImage,
  Divider,
} from '@gluestack-ui/themed';
import {useSelector} from 'react-redux';
import {
  ChevronDown,
  Grid3X3,
  Lock,
  Menu,
  PlusSquare,
} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const {userData, user} = useSelector((state: any) => state.userDetails);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Box>
        <HStack px={10} pt={10} justifyContent="space-between">
          <HStack columnGap={5}>
            <Lock color={'black'} size={20} />
            <Text style={{color: 'black'}}>{user?.username || ''}</Text>
            <ChevronDown color={'black'} fontSize={10} />
          </HStack>

          <HStack columnGap={15}>
            <PlusSquare color={'black'} size={28} />
            <Menu color={'black'} size={28} />
          </HStack>
        </HStack>

        <Box p={15}>
          <HStack alignItems="center" w={'100%'}>
            <Box>
              <Avatar style={styles.userImage} size="md">
                <AvatarImage
                  source={{
                    uri: user?.avatarUri
                      ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      : 'https://picsum.photos/200/300',
                  }}
                />
              </Avatar>
            </Box>

            <HStack columnGap={20} ml={30}>
              <VStack alignItems="center">
                <Text color="black" style={styles.digitWeight}>
                  0
                </Text>
                <Text color="black">posts</Text>
              </VStack>
              <VStack alignItems="center">
                <Text color="black" style={styles.digitWeight}>
                  54
                </Text>
                <Text color="black">followers</Text>
              </VStack>
              <VStack alignItems="center">
                <Text color="black" style={styles.digitWeight}>
                  28
                </Text>
                <Text color="black">following</Text>
              </VStack>
            </HStack>
          </HStack>

          <Box py={10}>
            <Text color="black">{user?.username}</Text>
            <Text color="black">bio</Text>
          </Box>

          <Pressable onPress={() => {}}>
            <Box style={styles.editButton} bgColor="$coolGray200">
              <Text color="black" fontWeight="$semibold">
                Edit Profile
              </Text>
            </Box>
          </Pressable>
        </Box>

        <Box height={'100%'}>
          <Box alignItems="center">
            <Grid3X3 color="black" size={25} />
            <Divider bg="black" mt={5} />
          </Box>

          <FlatList
            numColumns={3}
            data={userData}
            renderItem={({item}) => {
              console.log('item=====>', item);
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate('Detail', {data: item})
                  }>
                  <Image
                    source={{uri: item.image.assets[0].uri}}
                    w={124}
                    h={124}
                    m={5}
                    resizeMode="cover"
                    alt="Post-image"
                  />
                </Pressable>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;
