import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_18: "",
    TextInput_20: "",
    TextInput_22: "",
    TextInput_24: ""
  }

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Screen_Shot_2020-11-22_at_11.39.07_PM.png"
        }}
      />
      <TextInput
        placeholder="EIU NetID"
        value={this.state.TextInput_18}
        onChangeText={nextValue => this.setState({ TextInput_18: nextValue })}
      />
      <TextInput
        placeholder="XXXXXXXXX"
        value={this.state.TextInput_20}
        onChangeText={nextValue => this.setState({ TextInput_20: nextValue })}
      />
      <TextInput
        placeholder="PASSWORD"
        value={this.state.TextInput_22}
        onChangeText={nextValue => this.setState({ TextInput_22: nextValue })}
      />
      <TextInput
        placeholder="XXXXXXXXX"
        value={this.state.TextInput_24}
        onChangeText={nextValue => this.setState({ TextInput_24: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  TextInput_18: {},
  TextInput_20: {},
  TextInput_22: {},
  TextInput_24: {}
})
