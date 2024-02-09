import {Pressable} from 'react-native';
import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Avatar,
  AvatarImage,
  Box,
  HStack,
  Icon,
  ThreeDotsIcon,
  VStack,
  Text,
} from '@gluestack-ui/themed';
import GalleryCarousel from './GalleryCarousel';
import {useDispatch, useSelector} from 'react-redux';
import {Pencil, Trash} from 'lucide-react-native';
import {removePostData} from '../../../redux/actions/app';
import {removeUserData} from '../../../redux/actions/user';
import {useNavigation} from '@react-navigation/native';

const Post = (props: any) => {
  const {data} = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {user} = useSelector((state: any) => state.userDetails);

  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = () => setShowActionsheet(!showActionsheet);

  const onDelete = () => {
    handleClose();
    navigation.goBack();
    dispatch(removePostData(data.id));
    dispatch(removeUserData(data.id));
  };

  const onEdit = () => {
    handleClose();
    navigation.navigate('AddPost', {data});
  };

  return (
    <Box mb={20}>
      <Box>
        <Box py={10}>
          <HStack justifyContent="space-between">
            <HStack columnGap={10} pl={5}>
              <Avatar size="md">
                <AvatarImage
                  source={{
                    uri: data?.avatarUri
                      ? data.avatarUri
                      : 'https://picsum.photos/200/300',
                  }}
                />
              </Avatar>
              <VStack pt={5}>
                <Text
                  color="$coolGray800"
                  fontWeight="$bold"
                  $dark-color="$warmGray100">
                  {data?.userName ? data.userName : 'Anci'}
                </Text>
                <Text color="$coolGray600" $dark-color="$warmGray200">
                  {data?.locations ? data.locations : 'Switzerland, Europe'}
                </Text>
              </VStack>
            </HStack>
            {data?.isLocal ? (
              <Pressable onPress={handleClose}>
                <Icon as={ThreeDotsIcon} m="$2" w="$4" h="$4" />
              </Pressable>
            ) : null}
          </HStack>
        </Box>
      </Box>

      <Box>
        <GalleryCarousel item={data} />
      </Box>

      <Box>
        <Actionsheet
          isOpen={showActionsheet}
          onClose={handleClose}
          zIndex={999}>
          <ActionsheetBackdrop />
          <ActionsheetContent h="$70" zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetItem onPress={onEdit}>
              <HStack alignItems="center">
                <Pencil color="black" size={20} />
                <ActionsheetItemText>Edit</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>
            <ActionsheetItem onPress={onDelete}>
              <HStack alignItems="center">
                <Trash color="red" size={20} />
                <ActionsheetItemText color="red">Delete</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>
          </ActionsheetContent>
        </Actionsheet>
      </Box>
    </Box>
  );
};

export default Post;
