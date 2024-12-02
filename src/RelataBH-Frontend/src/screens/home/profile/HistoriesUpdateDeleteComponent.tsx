import React, { useRef, useState, useEffect, useMemo, useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Button, Text } from "react-native-paper";
import BottomSheet from "@gorhom/bottom-sheet";


type Props = {
    hideBottomSheet: () => void;
    visible: boolean;
    id: number | null;
    titulo: string | null;
};

export const HistoriesUpdateDelete: React.FC<Props> = ({ visible, hideBottomSheet, id, titulo }) => {
    const SheetRef = useRef<BottomSheet>(null);

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
                        {titulo}
                    </Text>
                    <View style={{ padding: 2, justifyContent:"center" }}>
                        <Button textColor="black">Editar Relato</Button>

                        <Button textColor="#B61B1B"> Excluir </Button>
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
