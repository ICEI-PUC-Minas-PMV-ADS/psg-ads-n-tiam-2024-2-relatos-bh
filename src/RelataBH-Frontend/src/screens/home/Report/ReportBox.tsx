// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
// import { AppStackNavigation } from '../../../routes/app.routes';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import MapView from 'react-native-maps';

import { View , StyleSheet } from "react-native";

// type BoxComponentRouteProp = RouteProp<AppStackNavigation, 'BoxComponent'>;
// type BoxComponentNavigationProp = NativeStackNavigationProp<AppStackNavigation, 'BoxComponent'>;

const BoxComponent : React.FC = () => {
  return (<View></View>);
  // const navigation = useNavigation<BoxComponentNavigationProp>();
  // const route = useRoute<BoxComponentRouteProp>();
  // const [region, setRegion] = useState<{ latitude: number; longitude: number; latitudeDelta:number;longitudeDelta:number } | null>(null);
  // const [adress, setAdress] = useState<string | null | undefined>("");

  // useEffect(() => {
  //   if (route.params?.region) {
  //     setRegion(route.params.region);
  //     setAdress(route.params.address);
  //   }
  // }, [route.params?.region, route.params?.address]);

  // const categorys = [
  //   { id: 1, name: "Buraco" },
  //   { id: 2, name: "Poste" },
  //   { id: 3, name: "Eletricidade" },
  //   { id: 4, name: "Esgoto" },
  //   { id: 5, name: "Inundação" },
  //   { id: 6, name: "Lixo" },
  //   { id: 8, name: "Ciclismo" },
  //   { id: 9, name: "Cachorro" },
  //   { id: 10, name: "Mal Cheiro" },
  //   { id: 11, name: "Mendigo" },
  //   { id: 12, name: "Calçada" },
  //   { id: 13, name: "Pichação" },
  //   { id: 14, name: "Barulho Alto" },
  // ];

  // const [NomeProblema, setNome] = useState('');
  // const [Descricao, setDescricao] = useState('');
  // const [selectedItems, setSelectedItems] = useState<number[]>([]);
  // const [images, setImages] = useState<string[]>([]);

  // const handleItemPress = (id: number) => {
  //   if (selectedItems.includes(id)) {
  //     setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== id));
  //   } else {
  //     setSelectedItems([...selectedItems, id]);
  //   }
  // };

  // const pickImages = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: false,
  //     quality: 1,
  //     allowsMultipleSelection: true,
  //     selectionLimit: 10,
  //   });
  //   if (!result.canceled) {
  //     const uris = result.assets.map((asset) => asset.uri);
  //     setImages(uris);
  //   }
  // };

  // const removeImage = (index: number) => {
  //   setImages(images.filter((_, i) => i !== index));
  // };
  

  // return (
  //   <View style={[styles.Container, 
  //     {
  //         flexDirection: "column",
  //     },]}>  
  //     <Text style={styles.H1}>RELATAR PROBLEMA</Text>
  //     <ScrollView contentContainerStyle={styles.container1}>
  //     <View style={styles.box}>

  //         <Text style={styles.subtitle}>Localização</Text>
  //         <Text style={[styles.textLocalization,{ marginTop: 50, marginBottom: 10}]}> Endereço: {adress} </Text>
  //         {region && ( 
              
  //             <MapView  style={{ width: '80%', height: 150,}}
  //               cameraZoomRange={{minCenterCoordinateDistance:1, maxCenterCoordinateDistance:3}}
  //               zoomEnabled={false}
  //               rotateEnabled={false}
  //               scrollEnabled={false}
  //               showsMyLocationButton={false}
  //               showsUserLocation={true}
  //               followsUserLocation={true}
  //               initialRegion={{
  //               latitude: region.latitude,
  //               longitude: region.longitude,
  //               latitudeDelta: region.latitudeDelta,
  //               longitudeDelta: region.longitudeDelta,
              
  //               }}
                
  //             />
              
  //         )}
          
  //         <TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate("SelectLocationScreen") }}>
  //           <Text style={styles.addButtonText}>Alterar Localização</Text>
  //         </TouchableOpacity>

  //     </View>
  //       <View style={[styles.box, styles.displayCategorys, { justifyContent: "center", alignItems: "flex-start", paddingTop: 50 }]}>
  //         <Text style={styles.subtitle}>Categoria Do Problema</Text>
  //         {categorys.slice(0, 10).map((item) => (
  //           <TouchableOpacity key={item.id} onPress={() => handleItemPress(item.id)}>
  //             <Text style={[styles.text, selectedItems.includes(item.id) && styles.selectedItem]}>
  //               {item.name}
                
  //             </Text>
  //           </TouchableOpacity>
  //         ))}
  //       </View>
        
  //       <View style={styles.box}>
  //         <Text style={styles.subtitle}>Sobre o Problema</Text>
  //         <Text style={styles.label}>Nome</Text>
  //         <TextInput
  //           style={styles.inputNomeProblema}
  //           placeholder="Nome Do problema"
  //           value={NomeProblema}
  //           onChangeText={setNome}
  //         />
  //         <Text style={styles.labelDescricao}>Descrição</Text>
  //         <TextInput
  //           style={styles.inputDescricaoProblema}
  //           placeholder="Descrição Do Problema"
  //           value={Descricao}
  //           multiline={true}
  //           onChangeText={setDescricao}
  //         />
  //       </View>
  //       <View style={styles.box}>
  //         <Text style={styles.subtitle}>Fotos</Text>
  //         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
  //           {images.map((uri, index) => (
  //             <View key={index} style={styles.imageWrapper}>
  //               <TouchableOpacity style={styles.deleteButton} onPress={() => removeImage(index)}>
  //                 <Text style={styles.deleteText}>X</Text>
  //               </TouchableOpacity>
  //               <Image source={{ uri }} style={styles.image} />
  //             </View>
  //           ))}
  //         </ScrollView>
  //         <TouchableOpacity style={styles.addButton} onPress={pickImages}>
  //           <Text style={styles.addButtonText}>Adicionar fotos</Text>
  //         </TouchableOpacity>

  //       </View>
        
  //     </ScrollView>
  //     <TouchableOpacity style={styles.addButton}>
  //       <Text style={styles.addButtonText}>Salvar</Text>
  //     </TouchableOpacity>
  //   </View>  
  // );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 20,
  },
H1:{
    alignSelf: "center",
    padding: 30,
    color: "#8b80ab",
    fontSize: 20,
},addButton: {
    backgroundColor: '#6f6095',  
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,            
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#ffffff',            
    fontSize: 16,
    fontWeight: 'bold',
  },
  container1: {
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
  labelDescricao:{
    position: 'absolute',
    top: 92,
    left: 45,
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
    backgroundColor: '#d1c4e9', 
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  deleteText: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 5,
  },
  scrollContainer: {
    maxHeight: 150,
    marginBottom: 10,
  },
  textLocalization: {
    color: "#65558f",

  }
});

export default BoxComponent;
