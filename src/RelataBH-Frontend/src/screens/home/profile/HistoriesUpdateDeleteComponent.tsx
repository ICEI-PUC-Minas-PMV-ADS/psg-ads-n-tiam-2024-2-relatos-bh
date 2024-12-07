import React, { useRef, useState, useEffect, useMemo, useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { HomeStackTypes } from "../../../routes/app.routes";
import { TouchableOpacity } from "react-native-gesture-handler";


type Props = {
    hideBottomSheet: () => void;
    visible: boolean;
    relato: UserReport | null
};

export const HistoriesUpdateDelete: React.FC<Props> = ({ visible, hideBottomSheet, relato }) => {
    const SheetRef = useRef<BottomSheet>(null);
    const navigation = useNavigation<HomeStackTypes>();

    useEffect(() => {
        visible ? SheetRef.current?.expand() : SheetRef.current?.close();
    }, [visible]);

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            hideBottomSheet();
        }
    };

    const snapPoints: string[] = useMemo(() => ["25%"], []);

    return (
        <View style={StyleSheet.absoluteFill}>
            {visible && (
                <TouchableWithoutFeedback onPress={hideBottomSheet}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}

            <BottomSheet
                ref={SheetRef}
                index={-1}
                snapPoints={snapPoints}
                enableDynamicSizing={false}
                enablePanDownToClose={true}
                onChange={handleSheetChanges}
                style={{ padding: 6 }}
            >
                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#65558F",
                            fontWeight: "bold",
                            fontSize: 20,
                            marginBottom: 8,
                        }}
                    >
                        {relato?.titulo}
                    </Text>
                    <View style={{ padding: 2, justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => {
                            hideBottomSheet()
                            navigation.navigate("ReportDetailScreen", { relato: relato, isEdit: true })
                        }}>
                            <Button textColor="black">Editar Relato</Button>
                        </TouchableOpacity>

                        <Divider />
                        <Button textColor="#B61B1B"> Excluir </Button>
                        <Divider />
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
});
