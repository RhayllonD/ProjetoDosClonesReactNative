import React from "react"
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Header from "./src/components/Header";
import ClanBackIcon from './assets/clanBack.png'
import ClanUpIcon from './assets/clanUpIcon.png'


export default function App() {
  const [message, setMessage] = React.useState('');

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.containerChatTitle}>
        <Text style={styles.chatTitle}>Chat</Text>
      </View>
      <ScrollView style={styles.containerChatMessages}>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet consectetur.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.textChatCenter}>Lorem, ipsum dolor.</Text>
        <Text style={styles.textChatCenter}>Lorem ipsum dolor sit amet consectetur.</Text>
      </ScrollView>
      <KeyboardAvoidingView contentContainerStyle={styles.containerChat} behavior="position" keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0} enabled>
        <TouchableOpacity>
          <Image style={styles.backImage} source={ClanUpIcon}></Image>
        </TouchableOpacity>
        <TextInput
        style={styles.input}
        onChangeText={(text)=>{setMessage(text)}}
        value={message}
        placeholder="Toque para escrever a mensagem"
        placeholderTextColor="#FFF"
        keyboardType="default"
      />
      <TouchableOpacity style={styles.buttonSendMessage}>
        <Text style={styles.buttonSendMessageText}>Enviar</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.containerBack}>
        <TouchableOpacity>
          <Image style={styles.backImage} source={ClanBackIcon}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Fiz os styles das pages no proprio arquivo, pois nao criei a estrutura
// de screens, esses styles, estariam na pasta da page, da mesma 
// maneira que fiz nos components...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  containerChatTitle: {
    backgroundColor: "#5f6982",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  chatTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  containerChatMessages: {
    backgroundColor: '#2c2b3d',
    flex: 1
  },
  textChatCenter: {
    alignSelf: "center",
    fontWeight: "bold",
    color: 'white',
    marginVertical: 5
  },
  containerChat: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#5f6982',
    position: "relative",
    gap: 10,
    padding: 8
  },
  buttonSendMessage: {
    backgroundColor: '#fdb901',
    padding: 5,
    position: "absolute",
    right: 10,
    borderWidth: 2,
    borderColor: "black"
  },
  buttonSendMessageText: {
    color: "white",
    fontWeight: "bold"
  },
  containerBack: {
    backgroundColor: '#384055',
    padding: 8,
    borderTopWidth: 3,
    borderTopColor: "black"
  },
  backImage: {
    width: 45,
    height: 45
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#2c2b3d',
    color: 'white'
  },
  inputText: {
    color: "white",
    fontWeight: "bold"
  },
});
