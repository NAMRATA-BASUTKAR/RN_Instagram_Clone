import { FlatList} from 'react-native';
import React from 'react';
import {Box} from '@gluestack-ui/themed';
import Header from '../../components/Home/Header';
import Stories from '../../components/Home/Stories';
import Post from '../../components/Home/Post';
import {useSelector} from 'react-redux';

const Main = () => {
  const {postData} = useSelector((state: any) => state.appDetails);
  console.log('data====>postada=====>',postData)
  return (
    <Box mb={130} bgColor='white'>
      <Header />
      <Stories />
      <FlatList
        data={postData}
        renderItem={({item, index}) => <Post data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Box>
  );
};

export default Main;
