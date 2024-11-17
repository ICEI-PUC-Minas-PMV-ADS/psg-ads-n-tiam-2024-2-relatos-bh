import { useEffect, useState } from "react";
import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { Chip } from "react-native-paper";
import { ReportService } from "../../../../services/report/ReportService";

type Props = {
    isVisible: Boolean,
    style?: StyleProp<ViewStyle>
}

export const ReportCategoryComponent: React.FC<Props> = ({ style, isVisible }) => {
    const [categories, setCategories] = useState<ReportCategory[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const fetchCategories = async () => {
        if(isVisible && categories.length == 0){
            let categoriesResponse = await ReportService.fetchCategories();
            if(categoriesResponse.success){
                setCategories(categoriesResponse.data)
            }
        }
    }

    useEffect(() => { fetchCategories() }, [isVisible])

    const onCategoryClicked = (id: number) => {
        var index = selectedCategories.indexOf(id);
        if (index == -1) {
            setSelectedCategories(selectedCategories.concat(id))
        } else {
            setSelectedCategories(selectedCategories.splice(index, 1));
        }
    }

    return (
        <View>
            {isVisible &&
                <FlatList
                    style={[style, { marginTop: 4 }]}
                    contentContainerStyle={{ marginHorizontal: 10 }}
                    horizontal={true}
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <Chip
                            style={{ marginEnd: 4 }}
                            onPress={() => { onCategoryClicked(item.id) }}
                            selected={selectedCategories?.includes(item.id)}
                            showSelectedCheck={true}
                        >
                            {item.name}
                        </Chip>
                    }
                    keyExtractor={(_, index) => index.toString()}
                />
            }
        </View>
    );
}
