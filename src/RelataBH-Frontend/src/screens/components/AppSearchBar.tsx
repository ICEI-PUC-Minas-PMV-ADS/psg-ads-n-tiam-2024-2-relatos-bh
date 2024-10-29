import * as React from 'react';
import { FlatList, View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

type cities = {
    id: number,
    name: string
}

const AppSearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [result, setResult] = React.useState<cities[]>();

    const data: cities[] = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 6, name: 'Banana1' },
        { id: 7, name: 'Banana2' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Pineapple' },
        { id: 5, name: 'Grapefruit' },
    ];

    const search = (text: string) => {
        if(text.length >= 3){
            const filteredItems = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setResult(filteredItems);
        } else {
            setResult([]);
        }
    }

    return (
        <View>
            <Searchbar
                style={{ marginHorizontal: 8, marginVertical: 16 }}
                placeholder="Buscar bairro..."
                onChangeText={(text) => {
                    setSearchQuery(text)
                    search(text)
                }}
                value={searchQuery}
            />
            <FlatList
                style={{zIndex: 1, position: 'absolute', top: 80, width: '100%'}}
                data={result}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text style={{backgroundColor: '#FFF', width: '100%'}}>{item.name}</Text>}
            />
        </View>
    );
};

export default AppSearchBar;