import React, {useState} from  'react';
import { useNavigation } from '@react-navigation/native'; 
import{
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingMensageButton,
    SignMensageButtonText,
    SignMensageButtonTextBold

} from './styles';

import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg'
import EmailIcon from  '../../assets/email.svg';
import LockIcon from    '../../assets/lock.svg';
import PersonIcon from    '../../assets/person.svg';

export default () => {
    
    const navigation = useNavigation();

     const [nameField, setNameField] = useState('');
     const [emailField, setEmailField] = useState('suporte@b7web.com.br');
     const [passwordField, setPasswordField] = useState('');
      
      const handleSignClick = ()=>{

      }

     const handleMessageButtonClick = () =>{
         navigation.reset({
            routes: [{name: 'SignIn'}]
         });
          
     }


    return(
        <Container>
            <BarberLogo width="100%" height ="160"/>

            <InputArea>
            
              <SignInput 
                   IconSvg={PersonIcon}
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t=>setEmailField(t)}
                   />
                   
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
                   <CustomButtonText>CADASTRAR</CustomButtonText>
               </CustomButton>
            </InputArea>
              

              <SingMensageButton onPress={handleMessageButtonClick}>
                 <SignMensageButtonText> Já possui uma conta?</SignMensageButtonText>
                 <SignMensageButtonTextBold> Faça login </SignMensageButtonTextBold>
             </SingMensageButton>
        </Container>
    );
}
