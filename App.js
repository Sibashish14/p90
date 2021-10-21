import * as React from 'react';
import {Text,View,ToastAndroid,TextInput,StyleSheet, Alert} from 'react-native';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      remarks:''
    }
  }
  submit=()=>{
    if(this.state.remarks===''){
      Alert.alert('Please write your remarks before submitting');
    }
    else{
      ToastAndroid.show('Thanks for submitting your remarks');
    }
  }
  render(){
     return(
       <View>
       <Text>This app is designed to communicate with people by means of sms.It will be benefit for those who want those 
         send messages without going out to post boxes and submitting their messages.It will help 
         people to save their energy and time.
         </Text>
         <TextInput
            placeholder={"Your remarks"}
            onChangeText={text=>this.setState({remarks:text})}
            />
         <TouchableOpacity onPress={()=>this.submit()}
         style={{ alignItems: "center",
         backgroundColor: "#DDDDDD",
         padding: 10}}>
           <Text>Submit</Text>
         </TouchableOpacity>
       </View>
     )
  }
}
