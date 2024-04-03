import AsyncStorage from '@react-native-async-storage/async-storage';

export const async_keys = {
  itemsAdded: 'itemsAdded',
};

export const storeData = async (key, data) => {
  try {
    const info = JSON.stringify(data);
    await AsyncStorage.setItem(key, info);
  } catch (error) {
    console.log(error.message);
  }
};

export const getItem = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    const info = JSON.parse(data);
    return info;
  } catch (error) {
    return null;
  }
};
