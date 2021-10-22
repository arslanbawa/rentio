import React  from 'react'
import {useState} from 'react'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {post} from '../services/http'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default function UserInformation(props) {
    const mobileNumber = props.route.params.mobileNumber
      console.log("PROPS",  props.route);
      const [name, setname] = useState('')
      const [city, setcity] = useState('')
      const [address, setaddress] = useState('')
    const submintUser = async () =>{
        let data = {
            name,
            city,
            address,
            mobileNumber,
            "location": []
        }
       let response = await post ('/users',data)
    //    if (response.data===null){
    //     props.navigation.navigate('UserInformation')
    //    }
       console.log("info",response)
    }
    return (
        <>
        <View>
        <Input
            placeholder='Enter Your Name'
            onChangeText={(value) => setname(value)}
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
        />
        }
    />
     <Input
            placeholder='Enter Your City'
            onChangeText={(value) => setcity(value)}
            leftIcon={
                <Icon
                name='city'
                size={24}
                color='black'
        />
        }
    />
     <Input
            placeholder='Enter Your Address'
            onChangeText={(value) => setaddress(value)}
            leftIcon={
                <Icon
                name='address'
                size={24}
                color='black'
        />
        }
    />
    </View>
      <View style={styles.button_wrapper}>
          <TouchableOpacity 
           onPress={submintUser}
          >
            <Text style={styles.button}>Submit</Text>
            
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