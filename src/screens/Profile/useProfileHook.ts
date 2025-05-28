import {useState} from 'react';
import { navigate, navigateBack } from '@app/services/navigationService';

const useProfileHook = () => {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

    const navigateToTermsCondition = (title: string) => {
        return navigate('TermsConditionScreen', {title: title});
    }
    const logout = () => {
        setIsLogoutModalVisible(true);
    }
    const onCancelLogout = () => {
        setIsLogoutModalVisible(false);
    }
    const onPressBack = () => {
        navigateBack();
    }
    const onPressLogout = () => {
        setIsLogoutModalVisible(false);
        return navigateBack();
    }
    return {
        isLogoutModalVisible,
        navigateToTermsCondition,
        logout,
        onPressBack,
        onCancelLogout,
        onPressLogout
    };
};

export default useProfileHook;
