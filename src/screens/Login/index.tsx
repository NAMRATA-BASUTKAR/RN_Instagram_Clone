import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import InstaLogo from '../../../assets/InstaLogo';
import {
  Box,
  Button,
  ButtonText,
  Input,
  InputField,
  KeyboardAvoidingView,
} from '@gluestack-ui/themed';
import InstaNavigator from '../../navigation/StackNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser, saveUserData } from '../../../redux/actions/user';
import { setPostData } from '../../../redux/actions/app';
import { postDummyData } from '../../../utils/constants';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const {postData} = useSelector((state: any) => state.appDetails);
  console.log('postada=====>',postData)

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoginButtonDisabled = !username;

  const handleUsernameChange = (text: React.SetStateAction<string>) => {
    setUsername(text);
  };
  useEffect(()=>{
    dispatch(setPostData([]))
    dispatch(saveUserData([]))
  },[])

  const handleLogin = () => {
    setIsLoggedIn(true);
    dispatch(saveUser({username, avatarUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxY-b_aZw5Xim2nVCn2eP4L5uvRVmhjah8-HBaRTDrMHVVh1I8iNFKg82mUw&s'}))
    dispatch(setPostData(postDummyData))
  };

  return (
    <>
      {isLoggedIn ? (
        <InstaNavigator />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'height'}
          style={{flex: 1, zIndex: 999}}>
          <Box flex={1} justifyContent="center" p={10}>
            <Box alignSelf="center" mb={20}>
              <InstaLogo />
            </Box>

            <Box rowGap={15}>
              <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                <InputField
                  placeholder="Phone number, username, or email address"
                  value={username}
                  onChangeText={handleUsernameChange}
                />
              </Input>

              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={isLoginButtonDisabled}
                isFocusVisible={false}
                onPress={handleLogin}>
                <ButtonText>Log In</ButtonText>
              </Button>
            </Box>
          </Box>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

export default Login;
