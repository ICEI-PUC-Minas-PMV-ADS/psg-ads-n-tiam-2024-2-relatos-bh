import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { ProfileCard } from "./ProfileCard";
import { useState } from "react";
import { HistoryCard } from "./HistoryCard";
import { WhoAreWeCard } from "./WhoAreWe";
import { ProfileSettingsComponent } from "./ProfileSettingsComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HistoriesUpdateDelete } from "./HistoriesUpdateDeleteComponent";

export const ProfileScreen: React.FC = () => {
    const [visibleSettings, setVisibleSettings] = useState(false);
    const [visible, setVisible] = useState(false);

    const [selectedHistory, setSelectedHistory] = useState<UserReport|null>(null);

    const showBottomSheet = (history: UserReport) => {
        setSelectedHistory(history); 
        setVisible(true);
    };

    const hideBottomSheet = () => {
        setSelectedHistory(null); 
        setVisible(false);
    };

    const showBottomSheetSettings = () => {
        setVisibleSettings(true);
    };

    const hideBottomSheetSettings = () => {
        setVisibleSettings(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={{ flex: 1, paddingHorizontal: 16 }}
                contentContainerStyle={{ paddingBottom: 24 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    variant="titleLarge"
                    style={{
                        marginVertical: 32,
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#65558F",
                    }}
                >
                    Perfil
                </Text>

                {/* Passando as funções para o ProfileCard */}
                <ProfileCard
                    showBottomSheet={showBottomSheetSettings} 
                />

                <Text
                    variant="titleMedium"
                    style={{
                        color: "#65558F",
                        fontWeight: "bold",
                        marginTop: 12,
                    }}
                >
                    Meus relatos
                </Text>

                <HistoryCard 
                    showBottomSheet={showBottomSheet}
                />

                <Text
                    variant="titleMedium"
                    style={{
                        color: "#65558F",
                        fontWeight: "bold",
                        marginTop: 12,
                    }}
                >
                    Quem somos?
                </Text>

                <WhoAreWeCard />
            </ScrollView>
                    {/* Componente de Configurações do Perfil */}
            <ProfileSettingsComponent
                visible={visibleSettings}
                hideBottomSheet={hideBottomSheetSettings}
            />
            {/* Componente de editar/excluir de histórico de relados */}
            <HistoriesUpdateDelete
                visible={visible}
                hideBottomSheet={hideBottomSheet}
                relato={selectedHistory}
                
            />
        </View>
    );
};

export default ProfileScreen;