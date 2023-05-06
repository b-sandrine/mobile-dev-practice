import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SwitchScreen from './src/screens/Switch';
import TimePickerAndroidScreen from './src/screens/TimePickerAndroid';
import CheckBoxScreen from './src/screens/CheckBox';
import SliderScreen from './src/screens/Slider';
import TextInputScreen from './src/screens/TextInput';
import PickerScreen from './src/screens/Picker';

const navigator = createStackNavigator (
    {
      Home: HomeScreen,
      Switch: SwitchScreen,
      // TimePickerAndroid: TimePickerAndroidScreen,
      Checkbox: CheckBoxScreen,
      Slider: SliderScreen,
      TextInput: TextInputScreen,
      Picker: PickerScreen
    },
    {
      initialRouteName: "Home",
      defaultNavigationOption: {
        title: 'App'
      }
    }
  )
  
  export default createAppContainer(navigator)
