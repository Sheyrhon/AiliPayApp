import React, { useState } from 'react';
import { View, Text, Button,Modal,StyleSheet,Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import { StateProvider, store } from './store';
import { getUserAccountSettings } from './src/services';
import i18n from './src/services/i18next'; // Import the i18n.js file
import { I18nextProvider, useTranslation } from 'react-i18next';

export default function App() {
 
  const [showModal, setShowModal]=useState(false);

  const handleOpenModal =()=>{
    setShowModal(true);
  };
  const handleCloseModal =()=>{
    setShowModal(false);

  };

  return (
    <I18nextProvider i18n={i18n}>
      <StateProvider>
        <Routes />
        <Toast visibilityTime={9000} />
        
        {showModal && (
         <Modal visible={true} animationType='slide-left' >
          <View style={styles.modalontainer}>
            <View style={styles.modalContent}>
              <LanguageSwitcher onClose ={handleCloseModal}/>
            </View>
          </View>
         
         </Modal> 
        )}
        
        <Button title='Open Language Switcher'
        onPress={handleOpenModal}/>
       
      </StateProvider>
    </I18nextProvider>
  );
}

function LanguageSwitcher({onClose}) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleClose =()=>{
    onClose();
  }

  return (
    <View>
      <Button title={t('switchToEnglish')} onPress={() => changeLanguage('en')}  />
      <Button title={t('switchToFrench')} onPress={() => changeLanguage('fr')} />
      <Button  title='close' onPress={handleClose}/>
    </View>
  );
}

const styles =StyleSheet.create({
  modalontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContent:{
    backgroundColor:'#fff',
    width:'75%',
    maxHeight: Dimensions.get('window').height/4,
    padding:16,
    borderRadius:8,
  },
});