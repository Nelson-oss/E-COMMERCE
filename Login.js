import React from 'react';
import { View , Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function Login() {
    return <View style={{flex:1, justifyContent:"centre",alignItems:"center"}}>
       <Image 
       style = {{
           width:100,
           height:100,
           borderRadius: 10,
           marginBottom: 20,
       }}
       source={{uri:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}/>
        <Text style={{color:"rgba(0,0,0,0.6",fontSize: 24}}>Welcome to </Text>
        <Text style={{color:'black',fontSize: 30,fontWeight:"500"}}>SHOE FACTORY</Text>
        <TouchableOpacity style={{backgroundColor:"#e3e3e3",borderRadius: 10,flexDirection: "row",alignItems:"center", padding:10,paddingHorizontal: 60,marginTop: 20}}>
          <Image 
          style = {{height: 10, resizeMode:"contain"}}
          source={{uri :"data:image/png;base64,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"}}/>
            <Text style={{fontSize:18, marginLeft:18}}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"black",borderRadius: 10,flexDirection: "row",alignItems:"center", padding:10,paddingHorizontal: 60,marginTop: 20}}>
           source={{uri :"data:image/jpeg;base64,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"}}
            <Text style={{fontSize:18, color:"white"}}>Login with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity><Text style={{marginTop: 10,fontWeight: 500, color:'grey'}}>Not a memeber? SignUp</Text>
        </TouchableOpacity>
    </View>;

} 