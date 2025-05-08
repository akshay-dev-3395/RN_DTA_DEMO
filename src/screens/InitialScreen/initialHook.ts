import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import useAppStore from '@app/stores/appStore';

const initialHook = () => {
  const [firstRoute, setFirstRoute] = useState('OnboardScreen');
  const [isLoading, setLoading] = useState(true);
  const {isOnboard}: any = useAppStore(state => state);

  const initialCheckFunction = useCallback(() => {
    if (isOnboard) {
      setFirstRoute('BottomNavigation');
    } else {
      setFirstRoute('OnboardScreen');
    }
    setLoading(false);
  }, [firstRoute, isLoading, isOnboard]);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      initialCheckFunction();
    }, 1500);

    return () => clearTimeout(subscribe);
  }, []);

  return {firstRoute, isLoading};
};

export default initialHook;
