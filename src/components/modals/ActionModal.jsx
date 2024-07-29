import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../consts/colors';
import PrimaryButton from '../buttons/PrimaryButton';
import { call } from 'redux-saga/effects';
import TextInput from '../inputs/TextInput';

export default function CustomAlert({
    isModalVisible,
    toggleModal,
    actionCallback,
    id,
    taskTitle,
    callback,
    text,
    value,
    onChangeText,
    updateTask= false,
    onPressToUpdateName
}) {


    const buttons = () => {
        return (
            <View style={styles.buttons}>
                <PrimaryButton
                title="Sim"
                primaryButtonStyle={{width: 100}}   
                onPress={() => {
                    toggleModal();
                    actionCallback(id);
                    callback && callback();
                }}
                />
                <PrimaryButton
                title={'Não'}
                primaryButtonStyle={{width: 100}}   
                onPress={() => toggleModal()}
                />
            </View>
        )
    }

    const edit = () => {
        return (
           <View style={{alignItems:'center'}}>
             <TextInput
                value= {value}
                onChangeText={onChangeText}
                placeholder={'Novo nome'}
             />
             <PrimaryButton
                title={'Salvar'}
                onPress={() => {
                    onPressToUpdateName()
                    }}
             />
             <PrimaryButton
                title={'Cancelar'}
                onPress={() => {
                    toggleModal()
                    onChangeText('')
                    }}
             />
           </View>
        );
    }

    

    
    return (
        <View style={styles.container}>
        <Modal isVisible={isModalVisible}>
            <View style={styles.modal}>
            <Text style={styles.title}>{`${text} ${taskTitle}`}</Text>
            {updateTask? edit(): buttons()}
            </View>
        </Modal>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
        },
    modal: {
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 17,
        fontFamily: 'Inter-ExtraBold',
        marginBottom: 20,
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    });