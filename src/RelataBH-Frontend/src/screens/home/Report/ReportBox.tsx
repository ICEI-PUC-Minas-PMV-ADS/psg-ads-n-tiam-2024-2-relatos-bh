import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const BoxComponent = () => {
  const categorys = [
    { id: 1, name: "Buraco" },
    { id: 2, name: "Poste" },
    { id: 3, name: "Eletricidade" },
    { id: 4, name: "Esgoto" },
    { id: 5, name: "Inundação" },
    { id: 6, name: "Lixo" },
    { id: 8, name: "Ciclismo" },
    { id: 9, name: "Cachorro" },
    { id: 10, name: "Mal Cheiro" },
    { id: 11, name: "Mendigo" },
    { id: 12, name: "Calçada" },
    { id: 13, name: "Pichação" },
    { id: 14, name: "Barulho Alto" },
  ];

  const [NomeProblema, setNome] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]); 

  const handleItemPress = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.subtitle}>Sobre o Problema</Text>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.inputNomeProblema}
          placeholder="Nome Do problema"
          value={NomeProblema}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.inputDescricaoProblema}
          placeholder="Descrição Do Problema"
          value={Descricao}
          multiline={true}
          onChangeText={setDescricao}
        />
      </View>
      <View style={[styles.box, styles.displayCategorys, { justifyContent: "center", alignItems: "flex-start", paddingTop: 50 }]}>
        <Text style={styles.subtitle}>Categoria Do Problema</Text>
        {categorys.slice(0, 10).map((item) => {
          return (
            <TouchableOpacity key={item.id} onPress={() => handleItemPress(item.id)}>
              <Text style={[styles.text, selectedItems.includes(item.id) && styles.selectedItem]}>
                {item.name}
                
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
        <View style={styles.box}><Text style={styles.subtitle}>Localização</Text></View>
        <View style={styles.box}><Text style={styles.subtitle}>Fotos</Text></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  box: {
    height: 290,
    marginHorizontal: 5,
    marginVertical: 15,
    backgroundColor: '#f2defa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'relative',
    borderColor: '#6f6095',
    borderWidth: 1,
  },
  subtitle: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8b80ab',
    padding: 5,
  },
  label: {
    position: 'absolute',
    top: 40,
    left: 50,
    backgroundColor: '#f2defa',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#6a1b9a',
    zIndex: 1,
  },
  inputNomeProblema: {
    width: '80%',
    height: 40,
    borderColor: '#6f6095',
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    marginRight: 25,
  },
  inputDescricaoProblema: {
    width: '80%',
    height: 150,
    borderColor: '#6f6095',
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 20,
    marginRight: 25,
    textAlignVertical: 'top',
  },
  displayCategorys: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    textAlign: 'center',
  },
  selectedItem: {
    backgroundColor: '#d1c4e9', // Cor de fundo do item selecionado
  },
});

export default BoxComponent;
