import React from 'react';
import { View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    return <View style={{backgroundColor:'white',flex:1,paddingTop: 56,paddingHorizontal: 19}}>

<view style={{flexDirection:'row',justifyContent: "space-between"}}>
<Ionicons name="ios-menu-outline"size={24} color="black"/>
<FontAwesome5 name="shoe-prints" size={24} color="black" />
<view style={{flexDirection: 'row'}}>
<AntDesign name="search1" size={24} color="black" />
<Ionicons name="notifications-circle" size={24} color="black" />

</view>
</view>
    </View>;
    
}