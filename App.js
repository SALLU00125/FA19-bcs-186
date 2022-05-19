import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TouchableOpacity } from 'react-native';
import React, {useReducer, useState, useEffect} from 'react';



const AnsARR = [2,1,0,1,2,1,0]; // answer of array
const OptionsARR= [  
["11","1","0", "2"], 
["True","False"],
["Yes","No"],
["First Second Third","First,Second,Third", "First-SecondThird"],
["2","4", "5"],
["2","4", "5", "3"],
["git commit","git init", "git push", "git pull"], 
]; // options array

const QuestionsARR= [
  " '/ 1 '/ + 1 ",
  "'5.0' = = = 5 ",
  "What is JS",
  "Is JavaScript case sensitive language ",
  "(['First','Second','Third'].join(' - ')",
  "How many values are available for flexDirection?",
  "How many built-in hooks are available in react-native?",
  "Which command is used to make a directory git enabled?",
  "What is useEffect used for?",

]; //questions

function reducer (state, action) {

  switch (action.type) {
        case 'QuestionCountR':
          return( {count: state.count + 1})

        case 'IncreaseScoreR':
          {
            if(state.selection == AnsARR[state.count])
            {
              return( {score: state.score + 1})
            }
            else
            {
              return( {score: state.score})
            }
          }

        case 'nextQuestionR':
          return ( {question: QuestionsARR[state.count]} )

        case 'selection1':
          return ( {selection: 1})
        case 'selection2':
          return ( {selection: 2})
        case 'selection3':
          return ( {selection: 3})
        case 'selection4':
          return ( {selection: 4})

        case 'nextOptionR':
          return ( {options: OptionsARR[state.count]})

        default:
          return state

      }

    }

export default function App() {



  const [state, dispatch ] = useReducer( reducer , {count:0 , score:0 ,selection:0, options: ['hooks','books','cooks'] , question: "everything in react is"} )
      // Object ,caller to update =      reduceCustom , default Obj


  function SELECt__1(){
    dispatch({type:'selection1'}); // select option 1 on button 1
    dispatch({type:'IncreaseScoreR'}); // check condition and increase score
    dispatch({type:'nextQuestionR'}); // next question
    dispatch({type:'nextOptionR'}); // next option array
    dispatch({type:'QuestionCountR'}); // next question count++
  }


  function SELECt__2(){
    dispatch({type:'selection2'}); // select option 2 on button 2
    dispatch({type:'IncreaseScoreR'}); // check condition and increase score
    dispatch({type:'nextQuestionR'}); // next question
    dispatch({type:'nextOptionR'}); // next option array
    dispatch({type:'QuestionCountR'}); // next question count++
  }

  function SELECt__3(){
    dispatch({type:'selection3'}); // select option 3 on button 3
    dispatch({type:'IncreaseScoreR'}); // check condition and increase score
    dispatch({type:'nextQuestionR'}); // next question
    dispatch({type:'nextOptionR'}); // next option array
    dispatch({type:'QuestionCountR'}); // next question count++
  }

  // function SELECt__4(){
  //   dispatch({type:'selection4'}); // select option 2 on button 2
  //   dispatch({type:'IncreaseScoreR'}); // check condition and increase score
  //   dispatch({type:'nextQuestionR'}); // next question
  //   dispatch({type:'nextOptionR'}); // next option array
  //   dispatch({type:'QuestionCountR'}); // next question count++
  // }



  return (
<View style={styles.container}>

<View Style={{margin:10}} >
      <Text style= {{justifyContent: 'center', color: 'red' ,fontSize:20}}>{state.count}/10</Text>
</View>
    
<View style={{ width:20 , height: 40 } }>
    </View>

    <View Style={{margin:10}} >
      <Text style= {{justifyContent: 'center', color: 'black' ,fontSize:40}}>{state.question} _____</Text>
</View>
    




  <View style={{ width:300 , height: 40, backgroundColor: "lightgrey"} }>
 
    
  </View>

    
  <View style={{ flex: 1,flexDirection: "column" ,marginLeft:20, marginTop:10} }>


    <TouchableOpacity style={styles.S_BUTTON} onPress={SELECt__1}>
      <Text  style={{fontSize:40}}>1. {state.options[0]}</Text>
    </TouchableOpacity>

    <View style={{ width:10 , height: 15 } }>
    </View>

    <TouchableOpacity style={styles.S_BUTTON} onPress={SELECt__2}>
      <Text  style={{fontSize:40}}> 2. {state.options[1]} </Text>
    </TouchableOpacity>
    
    <View style={{ width:10 , height: 15 } }>
    </View>


    <TouchableOpacity style={styles.S_BUTTON} onPress={SELECt__3}>
      <Text style={{fontSize:40}}>3. {state.options[2]} </Text>
    </TouchableOpacity>

    <View style={{ width:10 , height: 15 } }>
    </View>

    {/* <TouchableOpacity style={styles.S_BUTTON} onPress={SELECt__4}>
      <Text  style={{fontSize:40}}>3. {state.options[3]} </Text>
    </TouchableOpacity> */}

  </View>



    
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 50,
    paddingLeft: 15
  },
  con_inner: {
    flex: 1,
    //padding: 20,
    flexDirection: "row"
  },
  S_BUTTON:{
     flexDirection: "row" ,
     backgroundColor: "gray",
     color:'white',
     height:40,
     width:300,
     alignItems: 'center',
     justifyContent: 'center',
     alignContent: 'space-between',
     borderRadius: 15,
     flexBasis: 100,
     
    }


  
  
  

});
