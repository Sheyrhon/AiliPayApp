import React, { useContext, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { getUserAccountSettings, validateAccessToken } from '../../services';

import { store } from '../../../store';
import Logo from '../../components/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LandingScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(store);

  const onSubmitEvent = useCallback(async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      setLoading(false);
      return;
    }
    const response = await validateAccessToken(token);
    setLoading(false);
    if (response.status == 200) {
      await dispatch({
        type: 'SET_USER',
        payload: { data: response.data.data, accessToken: token }
      });
      const accountSettings = await getUserAccountSettings();
      await dispatch({
        type: 'SET_ACCOUNT_SETTINGS',
        payload: { data: accountSettings.data.data }
      });
      navigation.navigate('DrawerScreens');
    } else {
      await AsyncStorage.removeItem('access_token');
    }

    return;
  }, []);
  useEffect(() => {
    onSubmitEvent();
  }, [onSubmitEvent]);
  const goToLandingPage2 = () => {
    navigation.navigate('LandingScreen2');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <TouchableOpacity style={{ width: '50%' }} onPress={goToLandingPage2}>
        <Text style={styles.seconderyText}>Financial system that works for everyone</Text>
        <ActivityIndicator size="large" color="#00ff00" animating={loading} hidesWhenStopped />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063B87',
    alignItems: 'center',
    justifyContent: 'center'
  },
  seconderyText: {
    fontWeight: 700,
    color: '#979EBA',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20
  }
});
