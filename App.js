import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

//http://www.conversorfacil.com.br/calcular/peso-ideal

export default function App() {
  
  const [sexo, setSexo] = useState('Homem');
  const [altura, setAltura] = useState('')
  const [k, setK] = useState(4);
  const [peso, setPeso] = useState('')

  const calcular = () => {
    if(sexo == "Homem"){
      setK(4)
    }else{
      setK(2)
    };

    setPeso((parseFloat(altura) - 100) - ((parseFloat(altura) - 150)/parseFloat(k)))
    console.log(peso)
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
