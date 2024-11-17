import React, { useCallback, useRef, useMemo, useEffect, useState } from "react";
import { StyleSheet, View, StyleProp, ViewStyle, ListRenderItemInfo } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList, BottomSheetScrollView, BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { Chip, Button, Text, Divider } from "react-native-paper";
import { ReportService } from "../../../../services/report/ReportService";

type Props = {
    isVisible: Boolean,
    onCategorySelected: (categories: ReportCategory[]) => void,
    selectedCategories: ReportCategory[],
    style?: StyleProp<ViewStyle>
}

export const ReportCategoryComponent: React.FC<Props> = ({ style, isVisible, onCategorySelected, selectedCategories }) => {
    const sheetRef = useRef<BottomSheet>(null);
    const [categories, setCategories] = useState<ReportCategory[]>([]);
    const [draft, setDraft] = useState<ReportCategory[]>([]);

    const fetchCategories = async () => {
        const response = await ReportService.fetchCategories();
        if (response.success) {
            setCategories(response.data);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    useEffect(() => {
        isVisible ? sheetRef.current?.expand() : sheetRef.current?.close();
    }, [isVisible])

    useEffect(() => {
        setDraft(selectedCategories);
    }, [selectedCategories])

    const handleChipClicked = (category: ReportCategory) => {
        if (draft.indexOf(category) == -1) {
            setDraft(draft.concat(category))
        } else {
            setDraft(draft.filter(item => item != category))
        }
    }

    const handleSelectedCategories = () => {
        onCategorySelected(draft);
    }

    const handleClearCategories = () => {
        onCategorySelected([]);
    }

    const snapPoints: string[] = useMemo(() => ["80%"], []);

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            style={{ padding: 6 }}
            enablePanDownToClose={false}
        >
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View >
                    <Text style={{ textAlign: 'center', marginVertical: 4 }} variant="titleMedium">Categorias</Text>
                    <Divider style={{ marginBottom: 12 }} />
                    <BottomSheetScrollView
                        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                    >
                        {categories.map((item) => (
                            <Chip
                                key={item.id}
                                style={{ marginEnd: 4, marginBottom: 4 }}
                                selected={draft.includes(item)}
                                onPress={() => { handleChipClicked(item) }}>
                                {item.name}
                            </Chip>
                        ))}
                    </BottomSheetScrollView>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Button style={{ flex: 1, marginBottom: 12 }} mode="outlined" onPress={handleClearCategories}>Limpar</Button>
                    <Button style={{ flex: 1, marginBottom: 12 }} mode="contained" onPress={handleSelectedCategories}>Selecionar</Button>
                </View>
            </View>
        </BottomSheet>
    );
};
