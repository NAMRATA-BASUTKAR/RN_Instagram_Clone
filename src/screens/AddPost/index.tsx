/* eslint-disable react-native/no-inline-styles */
import {TextInput, Alert, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {StyleSheet} from 'react-native';
import {
  Box,
  Divider,
  Pressable,
  Text,
  Image,
  Button,
  AddIcon,
  ButtonIcon,
  ButtonText,
  HStack,
  KeyboardAvoidingView,
} from '@gluestack-ui/themed';
import {
  ArrowLeft,
  CheckIcon,
  ImageIcon,
  MapPin,
  Music,
  Users,
} from 'lucide-react-native';
import {saveUserData} from '../../../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';
import {addPostData, setPostData} from '../../../redux/actions/app';
import {useNavigation} from '@react-navigation/native';

const AddPost = (props: any) => {
  const {params} = props?.route;
  const {userData, user} = useSelector((state: any) => state.userDetails);
  const {postData} = useSelector((state: any) => state.appDetails);
  const navigation = useNavigation();
  const [caption, setCaption] = useState('');
  const [localImage, setLocalImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.data) {
      setCaption(params?.data?.content);
      setLocalImage(params?.data?.images[0]);
    }
  }, [params?.data]);

  const openImage = async () => {
    const image = await launchImageLibrary({mediaType: 'photo'});
    setLocalImage(image);
    console.log(image);
  };

  const uploadImage = () => {
    if (params?.data) {
      const userPostIndex = userData.findIndex(
        item => item.id === params.data.id,
      );
      let newData = JSON.parse(JSON.stringify([...userData]));
      newData[userPostIndex].content = caption;
      dispatch(saveUserData([...newData]));
      const postIndex = postData.findIndex(item => item.id === params.data.id);
      let newPostData = JSON.parse(JSON.stringify([...postData]));
      newPostData[postIndex].content = caption;
      dispatch(setPostData([...newPostData]));
      Alert.alert('Edited successfully');
    } else {
      dispatch(
        saveUserData([
          {image: localImage, content: caption, id: userData.length + 1},
          ...userData,
        ]),
      );
      dispatch(
        addPostData({
          avatarUri: user?.avatarUri || '',
          images: [localImage],
          content: caption,
          isLocal: true,
          userName: user?.username || '',
          locations: 'Banglore, Karnataka',
          id: userData.length + 1,
        }),
      );
      Alert.alert('Added successfully');
    }
    setCaption('');
    setLocalImage(null);
    navigation.navigate('Home');
  };

  const Component = Platform.select({
    ios: () => (
      <Box style={styles.iosHeader} mt={10}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft size={25} color={'black'} />
        </Pressable>
        <Text style={{fontSize: 23, fontWeight: '500', color: 'black'}}>
          New Post
        </Text>

        {localImage !== null ? (
          <Pressable
            onPress={() => {
              uploadImage();
            }}>
            <CheckIcon size={30} color="#3797EF" />
          </Pressable>
        ) : (
          <Box height={30} width={30}></Box>
        )}
      </Box>
    ),
    android: () => (
      <>
        <Box style={styles.androidHeader}>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeft size={30} color={'black'} />
          </Pressable>
          <Text style={[styles.androidHeading, {color: 'black'}]}>
            New Post
          </Text>
          <Pressable
            onPress={() => {
              uploadImage();
            }}>
            <CheckIcon size={35} color="#3797EF" />
          </Pressable>
        </Box>
      </>
    ),
  });

  const AddNewPost = () => {
    return (
      <Box bgColor="white" height={'100%'}>
        <Component />
        <Box flex={1}>
          {localImage !== null ? (
            <Box alignItems="center">
              <Image
                source={{uri: localImage.assets[0].uri}}
                w={200}
                h={200}
                m={20}
                alt="New-post-image"
              />
            </Box>
          ) : (
            <Box alignItems="center">
              <ImageIcon size={200} color="grey" />
            </Box>
          )}

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'height' : 'height'}
            style={{flex: 1, zIndex: 999}}>
            <Box flex={1} m={15}>
              <TextInput
                value={caption}
                onChangeText={e => setCaption(e)}
                placeholder="Write a caption..."
                style={{color: 'black'}}
              />
            </Box>
          </KeyboardAvoidingView>
        </Box>
        <Divider />
        <Pressable>
          <HStack alignItems="center" px={15}>
            <Users color="black" size={20} />
            <Text style={{fontSize: 18, margin: 15, color: 'black'}}>
              Tag people
            </Text>
          </HStack>
        </Pressable>
        <Divider />

        <Pressable>
          <HStack alignItems="center" px={15}>
            <MapPin color="black" size={20} />
            <Text style={{fontSize: 18, margin: 15, color: 'black'}}>
              Add location
            </Text>
          </HStack>
        </Pressable>
        <Divider />
        <Pressable>
          <HStack alignItems="center" px={15}>
            <Music color="black" size={20} />
            <Text style={{fontSize: 18, margin: 15, color: 'black'}}>
              Add music
            </Text>
          </HStack>
        </Pressable>
        <Divider />

        <Box
          style={{
            alignItems: 'center',
            position: 'relative',
            marginVertical: 80,
          }}>
          <Button
            size="md"
            variant="solid"
            action={params?.data ? 'negative' : 'primary'}
            isDisabled={false}
            isFocusVisible={false}
            disabled={params?.data}
            onPress={openImage}>
            <ButtonText>Pick Image </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box style={{backgroundColor: 'black', height: '100%'}}>
      <AddNewPost />
    </Box>
  );
};

const styles = StyleSheet.create({
  iosHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  androidHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  androidHeading: {
    position: 'absolute',
    left: 40,
    fontSize: 25,
    fontWeight: '500',
  },
});

export default AddPost;
