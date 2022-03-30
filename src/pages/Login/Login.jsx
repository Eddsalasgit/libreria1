import React from "react";
import {StatusBar} from "expo-status-bar";
import { Text, View } from 'react-native';

import {styles} from "./Login.styles";
import ButtonComponent from "../../components/Button";

export default function Login({onPress}){
return (
    <View style={styles.container}>
      <StatusBar/>
      <Text>Quiubo</Text>
      <ButtonComponent title="Login" onPress={onPress} color="#55DA12" />
    </View>
  );
}