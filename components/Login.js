import React from 'react'
import { StyleSheet } from 'react-native'
import {View,Text,Button,Container,Content} from 'native-base'

const Login = ()=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Hello from login</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'red',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        color:"#fff",
        fontSize:32
    }
})

export default Login