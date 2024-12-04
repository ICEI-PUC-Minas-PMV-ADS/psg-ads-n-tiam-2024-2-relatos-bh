import { View } from "react-native";
import { Badge, IconButton, Searchbar } from "react-native-paper";

type Props = {
    onSearchClicked: () => void,
    onCategoryClicked: () => void,
    place: Place | null,
    categoryCount: number
}

export const ReportSearchBar: React.FC<Props> = ({
    onSearchClicked, 
    onCategoryClicked, 
    place, 
    categoryCount
}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginRight: 6 }}>
                <Searchbar
                    style={{ marginStart: 8, marginVertical: 16, flex: 1 }}
                    placeholder="Buscar bairro..."
                    focusable={false}
                    onPress={() => { onSearchClicked() }}
                    onChangeText={(text) => { }}
                    value={ place?.name ?? '' }
                />

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <IconButton
                        icon={ "filter" }
                        size={24}
                        onPress={() => { onCategoryClicked() }}
                    />
                    <Badge style={{ position: 'absolute', top: 0 }} visible={categoryCount > 0}>{categoryCount}</Badge>
                </View>

            </View>
    );
}