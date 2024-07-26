import React from 'react';
import { View, Text } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import colors from '../../consts/colors';

export default toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontFamily: 'Inter-ExtraBold',
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{ 
        borderLeftColor: colors.strongBlue,
        backgroundColor: colors.strongBlue,
      }}
      text1Style={{
        fontSize: 17,
        fontFamily: 'Inter-ExtraBold',

      }}
      text2Style={{
        fontSize: 11,
        fontFamily: 'Inter-ExtraBold',
        color: colors.white

      }}
    />
  ),

  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato', padding: 10 }}>
      <Text style={{ flexWrap: 'wrap' }}>{text1}</Text>
      <Text style={{ flexWrap: 'wrap' }}>{props.uuid}</Text>
    </View>
  )
};