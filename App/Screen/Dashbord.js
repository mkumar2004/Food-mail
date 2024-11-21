import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import auth from '../services/firebaseAuth'
import { useNavigation } from '@react-navigation/native';


const Dashbord = () => {
    const navigation=useNavigation();
    const handlelogout=() =>{
         signOut(auth)
         .then(() => {
             navigation.navigate("Mainscreen")
         })
    }
  return (
    <View>
      <Text>Dashbord</Text>
      <Button  onPress={handlelogout} title='logout'/>
    </View>
  )
}

export default Dashbord
