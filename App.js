import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import styles from './styles';

//http://www.conversorfacil.com.br/calcular/peso-ideal

export default function App() {
  
  const [sexo, setSexo] = useState('Homem');
  const [altura, setAltura] = useState('')
  const [indice, setIndice] = useState(4);
  const [pesoIdeal, setPesoIdeal] = useState('');

  const calcular = () => {
    if(sexo == "Homem"){
      setIndice(4)
    }else{
      setIndice(2)
    };

    setPesoIdeal((parseFloat(altura) - 100) - ((parseFloat(altura) - 150)/parseFloat(indice)));
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput style={styles.input} onChangeText={setAltura} placeholder='Digite sua altura' keyboardType='numeric'/>
      </View>
      
      <View style={styles.viewInput}>
        <Picker
          style={{height: 50, width: 280, color: "black", backgroundColor: "#DCDCDC"}}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          <Picker.Item label="Homem" value="Homem" />
          <Picker.Item label="Mulher" value="Mulher" />
        </Picker>
      </View>

      <Pressable style={styles.botao} onPress={calcular}>
        <Text style={styles.texto}>calcular peso ideal</Text>
      </Pressable>

      <View style={styles.botaoResultado}>
        <Text style={styles.textoResultado}>o seu peso ideal é de</Text>
        <Text style={styles.textoResultado}>{pesoIdeal}</Text>
      </View>

    </View>
  );
}