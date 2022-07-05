import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import dictionary from '../database';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      word: "Nothing", 
      definition: 'Not Found' 
    };
  }

  getWord = (text) => {
    var text = text.toLowerCase()
    try{
      var word = dictionary [text]['word']
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var definition = dictionary [text]["definition"]

      this.setState({
        "word" : word,
        "lexicalCategory" : lexicalCategory,
        "definition" : definition
      })
    }
    catch (err){
      alert("Sorry this word isn't available. :(")
      this.setState({
        'text' : '',
        'isSearchPressed' : false

      })
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: '#f5dbc2' }}>
        <Text style={styles.title}>Dictionary</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: 'Press the search button for the definition :)',
              lexicalCategory: ':)',
              examples: [],
              definition: ':)',
            });
          }}></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text)
           
}}>

          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <Text style = {styles.text}> Word : {''}</Text>
        <Text style = {styles.info}>        {this.state.word}</Text>


        <Text style = {styles.text}> Type: {''}</Text>
        <Text style = {styles.info}>         {this.state.lexicalCategory}</Text>


        <Text style = {styles.text}> Definition : {''}</Text>
        <Text style = {styles.info}>         {this.state.definition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 300,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 30,
  },
  button: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 50,
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: 'green',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'green',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -13,
  },
  text : {
    fontSize:45

  },
  info : {
    fontSize : 30

  }
});
