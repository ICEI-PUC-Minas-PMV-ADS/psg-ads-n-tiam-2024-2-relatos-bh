import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Button, Text, Searchbar, IconButton, Divider } from "react-native-paper";
import { PlacesService } from "../../services/places/PlacesService";

export const SearchScreen: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [result, setResult] = React.useState<Place[]>();
    const navigation = useNavigation();

    const search = async () => {
        let response = await new PlacesService().search(searchQuery)
        setResult(response)
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
            
            <FlatList
                data={result}
                renderItem={({ item, index, separators }) => (
                    <View>
                        <Button
                            key={item.id}
                            mode="text"
                            onPress={() => console.log(item)}>
                            <Text style={{ textAlign: 'left', flex: 1 }}>{item.name}</Text>
                        </Button>
                        <Divider />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})