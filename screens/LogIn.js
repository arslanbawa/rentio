import React  from 'react'
import {useState} from 'react'
import PhoneInput from "react-native-phone-number-input";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default function LogIn() {
    const [number, setNumber] = useState ('')
    console.log(number)
    return (
        <>
        <SafeAreaView style={styles.input_wrapper}>
        <PhoneInput
          style={styles.input}
          onChangeText={(value) => setNumber(value)}
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
          <TouchableOpacity>
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