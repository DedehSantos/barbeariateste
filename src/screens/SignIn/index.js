import React, {useState, useContext} from  'react';
import { useNavigation } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-community/async-storage';

import {UserContext} from  '../../contexts/UserContext';
import{
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingMensageButton,
    SignMensageButtonText,
    SignMensageButtonTextBold

} from './styles';

import Api from '../../Api';
import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg'
import EmailIcon from  '../../assets/email.svg';
import LockIcon from    '../../assets/lock.svg';

export default () => {
     
    const {dispatch: userDispatch } = useContext(UserContext); 
    const navigation = useNavigation();
     const [emailField, setEmailField] = useState('');
     const [passwordField, setPasswordField] = useState('');
      
      const handleSignClick =  async ()=>{
            if(emailField != ''&& passwordField !='' ){
                  let json = await Api.signIn(emailField, passwordField);
  
                  if(json.token){
                    await AsyncStorage.setItem('token', json.token);
                     
                    userDispatch({
                       type: 'setAvatar',
                       payload:{
                         avatar: json.data.avatar
                       }
                    });

                    navigation.reset({
                         routes:[{name: 'MainTab'}]
                    });

                  } else{
                      alert('E-mail e/ou senha errados!');
                  }
            } else{
                alert("Prencha os campos")
            }
   
        }

     const handleMessageButtonClick = () =>{
         navigation.reset({
            routes: [{name: 'SignUp'}]
         });
          
     }


    return(
        <Container>
            <BarberLogo width="100%" height ="160"/>

            <InputArea>
                   
                   <SignInput 
                   IconSvg={EmailIcon}
                    placeholder="Digite seu Email"
                        value={emailField}
                    onChangeText={t=>setEmailField(t)}
                   />


                   <SignInput  
                   IconSvg={LockIcon}
                   placeholder="Digite sua senha"
                   value={passwordField}
                   onChangeText={t=>setPasswordField(t)}
                    password ={true}
                   />
            
               <CustomButton onPress={handleSignClick}>
                   <CustomButtonText>LOGIN</CustomButtonText>
               </CustomButton>
            </InputArea>
              

              <SingMensageButton onPress={handleMessageButtonClick}>
                 <SignMensageButtonText> Ainda não possui uma conta?</SignMensageButtonText>
                 <SignMensageButtonTextBold> Cadastre-se </SignMensageButtonTextBold>
             </SingMensageButton>
        </Container>
    );
}
