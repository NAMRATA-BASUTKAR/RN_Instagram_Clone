import {StyleSheet, Dimensions, PermissionsAndroid} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  container: {
    position: 'relative',
    height: windowHeight,
    width: windowWidth,
  },
  menuButton: {
    position: 'absolute',
    right: 12,
  },
  userImage: {
    height: 96,
    width: 96,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  content: {
    position: 'absolute',
    top: 70,
    left: 145,
  },
  digits: {
    paddingLeft: 30,
  },
  digitWeight: {
    fontWeight: '600',
  },
  userName: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
  },

  editButton: {
    height: 29,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  highlights: {
    padding: 10,
  },
  postsTags: {
    height: 44,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
