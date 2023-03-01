import { combineReducers } from 'redux';
import commonReducer from './commomReducer';
import authReducer from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['currentColor'],
};
const persistConfigAuth = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userDetails','getsettingdata'],
};
const rootReducers = combineReducers({
  commonReducer: persistReducer(persistConfig, commonReducer),
  authReducer: persistReducer(persistConfigAuth, authReducer),

});

export default rootReducers;