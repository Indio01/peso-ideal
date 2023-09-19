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
      <View>
        <Text>Altura:</Text>
        <TextInput onChangeText={setAltura} placeholder='Digite sua altura'/>
      </View>
      
      <View>
        <Picker
          style={{height: 50, width: 300}}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          <Picker.Item label="Homem" value="Homem" />
          <Picker.Item label="Mulher" value="Mulher" />
        </Picker>
      </View>

      <Pressable onPress={calcular}>
        <Text>calcular peso ideal</Text>
      </Pressable>

      <Text>{`seu peso ideal é de: ${pesoIdeal}`}</Text>
    </View>
  );
}