import React, { useRef, useState, useEffect, useMemo, useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";
import BottomSheet from "@gorhom/bottom-sheet";
import AppContext from "../../../context/app";
import { useNavigation } from "@react-navigation/native";
import { RootStackTypes } from "../../../routes/routes";

type Props = {
    hideBottomSheet: () => void;
    visible: boolean;
};

export const ProfileSettingsComponent: React.FC<Props> = ({ visible, hideBottomSheet }) => {
    const { logout } = useContext(AppContext);
    const navigation = useNavigation<RootStackTypes>();
    const SheetRef = useRef<BottomSheet>(null);

    const handleLogout = () => {
        logout();
        navigation.replace("Auth");
    };

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
                <TouchableWithoutFeedback onPress={() => handleSheetChanges(-1)}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}

            <BottomSheet
                ref={SheetRef}
                index={-1}
                snapPoints={snapPoints}
                enableDynamicSizing={false}
                enablePanDownToClose={true}
                enableContentPanningGesture={false}
                onChange={handleSheetChanges}
                style={{ padding: 6}}
            >
                <View style={{ padding: 10, zIndex: 2 }}>
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#65558F",
                            fontWeight: "bold",
                            fontSize: 20,
                            marginBottom: 8,
                        }}
                    >
                        Configuração
                    </Text>

                    <Button textColor="black">Editar Perfil</Button>

                    <Button onPressOut={handleLogout} textColor="#B61B1B">
                        Sair
                    </Button>
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
