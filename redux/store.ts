import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import * as thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import { name as appName } from '../app.json';


const persistConfig = {
    key: `${appName}-storage`,
    storage: AsyncStorage,
    whitelist: ['userDetails', 'appDetails']
};

const persist = persistReducer(persistConfig, rootReducer);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware.thunk)(createStore);
export const store = createStoreWithMiddleware(persist);
export const persistor = persistStore(store);