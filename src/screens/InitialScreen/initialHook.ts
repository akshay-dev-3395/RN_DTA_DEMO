import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

const initialHook = () => {
  const [firstRoute, setFirstRoute] = useState('OnboardScreen');
  const [isLoading, setLoading] = useState(true);

  const initialCheckFunction = useCallback(() => {
    setFirstRoute('OnboardScreen');
    // setLoading(false);
  }, [firstRoute, isLoading]);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      initialCheckFunction();
    }, 1500);

    return () => clearTimeout(subscribe);
  }, []);

  return {firstRoute, isLoading};
};

export default initialHook;
