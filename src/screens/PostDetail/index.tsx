import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {useSelector} from 'react-redux';
import Post from '../../components/Home/Post';

const Detail = (props: any) => {

  const paramData = props?.route?.params;
  console.log('paramData', paramData);
  const {user} = useSelector((state: any) => state.userDetails);

  const profileData = {
    avatarUri: user?.avatarUri,
    images: [paramData?.data?.image],
    content: paramData?.data?.content || '',
    isLocal: true,
    locations: 'Banglore, Karnataka',
    userName: user?.username || '',
    id: paramData?.data?.id,
  };

  return (
    <Box bgColor='white' height={"100%"}>
      <Post data={profileData} />
    </Box>
  );
};

export default Detail;
