import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import Modal from 'react-native-modal';

type Props = {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: (state: boolean) => void;
  position?: 'flex-end' | 'center' | 'flex-start';
};

const CustomModal = (props: Props) => {
  const {children, isVisible, onClose, position = 'flex-start'} = props;
  return (
    <>
      {isVisible && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <Modal
        onBackButtonPress={() => {
          onClose(false);
        }}
        onBackdropPress={() => {
          onClose(false);
        }}
        isVisible={isVisible}
        backdropOpacity={0.1}
        style={{
          margin: 0,
          padding: 0,
        }}
        propagateSwipe={true}
        useNativeDriver={false}
        onSwipeComplete={() => onClose(false)}
        //   swipeDirection={['down']}
        // animationType={'fade'}
        //   animationIn={'slideInUp'}
        //   animationOut={'slideInDown'}
        //   animationInTiming={500}
        //   animationOutTiming={500}
      >
        <View style={[styles.wrapperDiv, {justifyContent: position}]}>
          {children}
        </View>
      </Modal>
    </>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  wrapperDiv: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});
