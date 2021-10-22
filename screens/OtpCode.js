import React  from 'react'
import {useState} from 'react'
import { Input } from 'react-native-elements';
import {post} from '../services/http'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default function OtpCode(props) {
    const mobileNumber = props.route.params.mobileNumber
      console.log("PROPS",  props.route);
    const [otp, setOtpCode] = useState ('')
    console.log(mobileNumber)
    const varifyUser = async () =>{
        console.log('clicked')
        let otpCode = parseInt(otp)
       let response = await post ('/verifications/otp',{mobileNumber,otpCode})
       if (response.data===null){
        props.navigation.navigate('UserInformation', { mobileNumber: mobileNumber })
       }
       console.log("otp",response.data)
    }
    return (
        <>
        <View>
        <Input
            placeholder='Enter OTP'
            onChangeText={(value) => setOtpCode(value)}
        />
    </View>
      <View style={styles.button_wrapper}>
          <TouchableOpacity 
           onPress={varifyUser}
          >
            <Text style={styles.button}>Send</Text>
            
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
