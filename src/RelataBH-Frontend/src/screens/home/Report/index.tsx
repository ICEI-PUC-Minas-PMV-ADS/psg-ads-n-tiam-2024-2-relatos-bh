import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, View, Image } from "react-native";
import MapView from "react-native-maps";
import { Appbar, Button, Card, Chip, Icon, IconButton, Text, TextInput, Title } from "react-native-paper";
import { HomeStackNavigation, HomeStackTypes } from "../../../routes/app.routes";
import * as ImagePicker from 'expo-image-picker';
import { ReportService } from "../../../services/report/ReportService";

export const ReportScreen: React.FC = () => {

    const navigation = useNavigation<HomeStackTypes>();
    const route = useRoute<RouteProp<HomeStackNavigation, "HomeScreen">>();

    const [region, setRegion] = useState<RelatoRegion | null>(null);
    const [images, setImages] = useState<string[]>([]);
    const [adress, setAdress] = useState<string | null | undefined>("");
    const [categories, setCategories] = useState<ReportCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<ReportCategory | null>(null);
    const [relato, setRelato] = useState<Relato>({
        Latitude: '0.0',
        Longitude: '0.0',
        Endereco: '',
        DescricaoRelato: '',
        Titulo: '',
        IdCategoria: 0,
        IdUser: 0,
        NomeCidade: "",
        images: [''],
    });

    const requestPermission = async () => {
        // Request permission to access media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access media library is required!');
        }
    };

    const handleCategorySelected = (category: ReportCategory) => {
        setSelectedCategory(category);
        setRelato(prevRelato  => ({...prevRelato, IdCategoria: category.id})); 
    };

    const fetchCategories = async () => {
        const result = await ReportService.fetchCategories();
        if (result.success) {
            setCategories(result.data);
        }
    }

    const saveRelato = async () => {
        let relatoSalvo = await ReportService.saveRelato(relato);
    }

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    useEffect(() => {
        setRegion(route.params?.region ?? null);
        console.log(JSON.stringify(region));
        setRelato(prevRelato  => ({...prevRelato, Endereco: route.params?.region?.address ?? "aa"})); 
        setRelato(prevRelato  => ({...prevRelato, Latitude: String(route.params?.region?.latitude ?? 0)}));
        setRelato(prevRelato  => ({...prevRelato, Longitude: String(route.params?.region?.longitude ?? 0)}));
        setRelato(prevRelato  => ({...prevRelato, NomeCidade: route.params?.region?.city ?? ""}));
    }, [route.params?.region]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const pickImages = async () => {
        await requestPermission();
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
            allowsMultipleSelection: true,
            selectionLimit: 10,
        });
        if (!result.canceled) {
            const uris = result.assets.map((asset) => asset.uri);
            console.log("selecionou!");
            setRelato(prevRelato  => ({...prevRelato, images: uris ?? []}));
            setImages(uris);
        }
    };

    return (
        <View style={{ paddingHorizontal: 12, flex: 1 }}>
            <Appbar.Header mode="center-aligned">
                <Appbar.Content title="Relatar Problema" />
            </Appbar.Header>

            <ScrollView style={{ width: '100%' }}>
                <View style={{ width: '100%' }}>
                    <Card style={{ marginTop: 8 }}>
                        <Card.Content>
                            <Text variant="bodyMedium">Sobre o Problema</Text>

                            <TextInput
                                label="Nome"
                                value={relato.Titulo}
                                mode="outlined"
                                onChangeText={text => {
                                    setRelato(prevRelato  => ({...prevRelato, Titulo: text})); 
                                }}
                            />

                            <TextInput
                                style={{ marginTop: 12 }}
                                label="Descrição"
                                value={relato.DescricaoRelato}
                                mode="outlined"
                                multiline={true}
                                numberOfLines={3}
                                onChangeText={text => { 
                                    setRelato(prevRelato  => ({...prevRelato, DescricaoRelato: text})); 
                                }}
                            />
                        </Card.Content>
                    </Card>

                    <Card style={{ marginTop: 8 }}>
                        <Card.Content>
                            <Text variant="bodyMedium">Categoria do problema</Text>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {categories &&
                                    categories.map((category) => {
                                        return <Chip
                                        key={category.id}
                                            style={{ marginEnd: 4, marginBottom: 4 }}
                                            selected={selectedCategory?.id == category.id}
                                            onPress={() => { handleCategorySelected(category) }}>
                                            {category.name}
                                        </Chip>
                                    })
                                }
                            </View>
                        </Card.Content>
                    </Card>

                    <Card style={{ marginTop: 8 }}>
                        <Card.Content>
                            <Text variant="bodyMedium">Localização</Text>

                            {region &&
                                <MapView style={{ width: '100%', height: 150, }}
                                    cameraZoomRange={{ minCenterCoordinateDistance: 1, maxCenterCoordinateDistance: 3 }}
                                    zoomEnabled={false}
                                    rotateEnabled={false}
                                    scrollEnabled={false}
                                    showsMyLocationButton={false}
                                    showsUserLocation={true}
                                    followsUserLocation={true}
                                    initialRegion={{
                                        latitude: region.latitude,
                                        longitude: region.longitude,
                                        latitudeDelta: region.latitudeDelta,
                                        longitudeDelta: region.longitudeDelta,

                                    }}
                                />
                            }
                            <Button
                                mode="contained"
                                onPress={() => { navigation.navigate("SelectLocationScreen") }}>
                                Selecionar
                            </Button>
                        </Card.Content>
                    </Card>

                    <Card style={{ marginTop: 8, marginBottom: 24 }}>
                        <Card.Content>
                            <Text variant="bodyMedium">Imagens</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                {images.map((uri, index) => (
                                    <View key={index} style={{marginVertical: 6}}>
                                        <Image source={{ uri }} style={{width: 150, height: 200, borderRadius: 5, marginEnd: 4}}/>
                                        <IconButton icon={"close"} onPress={() => { removeImage(index) }} style={{position: 'absolute', right: 0, backgroundColor: '#CCC'}}/>
                                    </View>
                                ))}
                            </ScrollView>
                            <Button mode="contained" onPress={pickImages}>Selecionar imagens</Button>
                        </Card.Content>
                    </Card>

                    <Button style={{ flex: 1, marginBottom: 6 }} mode="contained" onPress={() => {saveRelato()}}>
                        Salvar
                    </Button>
                </View>
            </ScrollView>


        </View>
    );
}