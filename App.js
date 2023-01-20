import React, { Component } from "react";
import {View,Text,VirtualizedList} from "react-native";
const dataArray = require("./src/dataArray.json")

class App extends Component{
  render(){
    return(
<View style={{flex:1}}>
  <View style={{flex:8,backgroundColor:"yellow",alignItems:"center",justifyContent:"center"}}>
     <Text>
     <VirtualizedList 
      data={dataArray}
      keyExtractor={(item,index)=>item.id+index}
      renderItem={({item})=>{
        return(
          <View ><Text>{item.id} {item.name} {item.family}</Text></View>
        )
      }}
      getItemCount={(data)=>{ return data.length
      }}
      getItem={(data,index)=>{
        return data[index]
      }}
      />
</Text>
  </View>
  <View style={{flex:2, backgroundColor:"pink"}}>

  </View>
</View>
    );
  }
}
export default App; 