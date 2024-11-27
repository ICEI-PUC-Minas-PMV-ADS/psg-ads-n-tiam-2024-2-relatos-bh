import React, { useCallback, useRef, useMemo, useEffect, useState } from "react";
import { StyleSheet, View, StyleProp, ViewStyle, ListRenderItemInfo } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList, BottomSheetScrollView, BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { Chip, Button, Text, Divider, IconButton } from "react-native-paper";
import { ReportService } from "../../../../services/report/ReportService";

type Props = {
    isVisible: Boolean,
    onCategorySelected: (categories: ReportCategory[]) => void,
    onClose: () => void,
    selectedCategories: ReportCategory[] | null,
    style?: StyleProp<ViewStyle>
}

export const ReportCategoryComponent: React.FC<Props> = ({ style, isVisible, onCategorySelected, selectedCategories, onClose }) => {
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
        setDraft(selectedCategories ?? []);
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

    const handleOnDrag = (index: number) => {
        if(index == -1){
            onClose();
        }
    }

    const snapPoints: string[] = useMemo(() => ["80%"], []);

    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            style={{ padding: 6 }}
            enablePanDownToClose={true}
            onChange={handleOnDrag}
        >
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View >
                    <Text style={{ textAlign: 'center', marginVertical: 4, fontWeight: 'bold' }} variant="titleMedium">Categorias</Text>
                    <Divider style={{ marginBottom: 12 }} />
                    <BottomSheetScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }} >
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
                    <Button 
                        style={{ flex: 1, marginBottom: 12 }} 
                        mode="outlined" 
                        onPress={() => { onCategorySelected([]) }}
                        >
                        Limpar
                    </Button>
                    <View style={{width: 6}} />
                    <Button 
                        style={{ flex: 1, marginBottom: 12 }} 
                        mode="contained" 
                        onPress={() => { onCategorySelected(draft) }}>
                            Selecionar
                    </Button>
                </View>
            </View>
        </BottomSheet>
    );
};
