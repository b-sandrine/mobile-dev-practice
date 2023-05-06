import React from 'react'
import { View, Text, Button, Stylesheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
    return <View>
        <Text> Welcome to my app</Text>
        <Button
            onPress={() => navigation.navigate('Picker')}
            title="Go to Picker" />
        <Button
            onPress={() => navigation.navigate('Checkbox')}
            title="Go to Checkbox" />
        <Button
            onPress={() => navigation.navigate('Switch')}
            title="Go to Switch" />
        <Button
            onPress={() => navigation.navigate('TextInput')} 
            title="Go to Textinput" />
        {/* <Button
            onPress={() => navigation.navigate('TimePickerAndroid')} 
            title="Go to TimePickerAndriod" /> */}
        <Button
            onPress={() => navigation.navigate('Slider')} 
            title="Go to Slider" />
    </View>
}

export default HomeScreen;