import React  from 'react'
import {useState} from 'react'
import PhoneInput from "react-native-phone-number-input";
import {post} from '../services/http'
import { constants } from "../constants";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default function LogIn(props) {
    const [mobileNumber, setMobileNumber] = useState ('')

    const inputMobileNumber = function(value){
        console.log(value)
        let tempMobile = value
        tempMobile = tempMobile.replace(/^92+/, '');
        tempMobile = tempMobile.replace(/^0+/, '');
        setMobileNumber("92" +value)
    }
    const varifyUser = async function () {
        
        if(!mobileNumber.match(constants.mobileValidation)){
            console.log("invalid number")
            return
        }
       
        let response = await post ('/verifications/user',{mobileNumber})
            if(response.resultCode==2001){
                props.navigation.navigate('OtpCode', { mobileNumber: mobileNumber })
            }
       
    }

   
    return (
        <>
        <SafeAreaView style={styles.input_wrapper}>
        <PhoneInput
          style={styles.input}
          onChangeText={inputMobileNumber}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          withDarkTheme
            withShadow
            autoFocus
            defaultCode="PK"
            layout="first"
        />
      </SafeAreaView>
      <View style={styles.button_wrapper}>
          <TouchableOpacity 
          onPress={varifyUser}
          >
            <Text style={styles.button}>Sign me Up</Text>
            
        </TouchableOpacity>
      </View>
        </>
    )
}
const styles = StyleSheet.create({
    input_wrapper:{
        alignItems:'center'
    },
    
    input: {
        height: 60,
        width: 150,
        margin: 12,
        borderWidth: 1,
        borderColor:'#555',
        borderRadius: 10,
        padding: 10,
        outlineStyle: 'none',
        fontSize: 20,
      },
      button_wrapper:{
          alignItems:'center'
      },
      button:{
          width: 150,
          padding: 15,
          textAlign: 'center',
          marginTop: 20,
          backgroundColor: '#778899',
          color: '#fff',
          borderRadius: 10,
      }
})