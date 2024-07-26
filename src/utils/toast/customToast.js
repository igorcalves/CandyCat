import { View, Text } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import colors from '../../consts/colors';
import { Ionicons } from '@expo/vector-icons'; // ou qualquer biblioteca de ícones que você esteja usando

export default toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ 
        borderLeftColor: '#5fff4c',
        backgroundColor: '#ccffce'
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontFamily: 'Inter-ExtraBold',
      }}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
          <Ionicons name="checkmark-circle" size={24} color="#00ff08" />
        </View>
      )}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{ 
        borderLeftColor: '#ff3434',
        backgroundColor: '#ffb1b1'
      }}
      text1Style={{
        fontSize: 17,
        fontFamily: 'Inter-ExtraBold',
      }}
      text2Style={{
        fontSize: 15,
        fontFamily: 'Inter-ExtraBold',
      }}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
          <Ionicons name="close-circle" size={26} color="#ff6744" />
        </View>
      )}
    />
  ),
};