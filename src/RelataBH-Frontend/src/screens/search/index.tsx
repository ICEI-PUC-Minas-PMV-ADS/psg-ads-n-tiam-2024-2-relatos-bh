import {  useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, ToastAndroid, View } from "react-native";
import { Button, Text, Searchbar, IconButton, Divider, ActivityIndicator } from "react-native-paper";
import { HomeStackTypes } from "../../routes/app.routes";
import { PlaceService } from "../../services/places/PlacesService";

export const SearchScreen: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchedPlaces, setSearchedPlaces] = useState<Place[] | null>();
    const [loading, setLoading] = useState<Boolean>(false);
    const navigation = useNavigation<HomeStackTypes>();

    const search = async () => {
        setLoading(true);
        let response = await PlaceService.searchPlaces(searchQuery);
        if(response.success){
            setSearchedPlaces(response.data);
        } else {
            ToastAndroid.show('Erro! Tente novamente mais tarde.', ToastAndroid.SHORT);
        }
        setLoading(false);
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={styles.row}>
                <IconButton icon={"keyboard-backspace"} onPress={() => navigation.goBack()} />
                <Searchbar
                    style={{ marginHorizontal: 8, marginVertical: 16, flex: 1 }}
                    placeholder="Buscar bairro..."
                    autoFocus={true}
                    returnKeyType="search"
                    onSubmitEditing={search}
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>

            {loading ? <ActivityIndicator /> : <View>
                {searchedPlaces?.length == 0 ?
                    <Text>Nenhum resultado!</Text>
                    :
                    <FlatList
                        data={searchedPlaces}
                        renderItem={({ item, index, separators }) => (
                            <View>
                                <Button
                                    key={item.id}
                                    mode="text"
                                    onPress={() => { navigation.navigate("HomeScreen", { searchedPlace: item, region: null }) }}>
                                    <Text style={{ textAlign: 'left', flex: 1 }}>{item.name}</Text>
                                </Button>
                                <Divider />
                            </View>
                        )}
                    />
                }
            </View>}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})