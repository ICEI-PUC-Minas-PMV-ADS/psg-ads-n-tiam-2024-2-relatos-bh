import { useState } from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import { Chip, Text } from "react-native-paper";

type Props = {
    style?: StyleProp<ViewStyle>
}

export const ReportCategoryComponent: React.FC<Props> = ({style}) => {
    const [categories, setCategories] = useState<ReportCategory[]>(categoriesMock());
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const onCategoryClicked= (id: number) => {
        var index = selectedCategories.indexOf(id);
        console.log(index)
    if (index === -1) {
        setSelectedCategories(selectedCategories.concat(id))
    } else {
        setSelectedCategories(selectedCategories.splice(index, 1));
    }
    }
    return (
        <FlatList
            style={[style, {marginTop: 4}]} 
            contentContainerStyle={{marginHorizontal: 10}}
            horizontal={true}
            data={categories}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
                <Chip 
                    style={{marginEnd: 4}} 
                    onPress={() => {onCategoryClicked(item.id)}}
                    selected = { selectedCategories?.includes(item.id) }
                    showSelectedCheck={true}
                >
                        {item.name}
                </Chip>
            }
            keyExtractor={(_, index) => index.toString()}
            />
    );
}

const categoriesMock = () => {
    return [
        {
            id: 1,
            name: "Buraco"
        } as ReportCategory,
        {
            id: 2,
            name: "Árvore"
        } as ReportCategory,
        {
            id: 3,
            name: "Buraco1"
        } as ReportCategory,
        {
            id: 4,
            name: "Buraco2"
        } as ReportCategory,
    ]
}