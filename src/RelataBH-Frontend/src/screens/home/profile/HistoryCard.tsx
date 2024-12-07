import { View, Image, Button, ActivityIndicator } from "react-native";
import { Card, Icon, IconButton, Text } from "react-native-paper";
import { ProfileService } from "../../../services/profile/ProfileService";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeStackTypes } from "../../../routes/app.routes";
import { TouchableOpacity } from "react-native-gesture-handler";


interface HistoryCardProps {
    showBottomSheet: (history: UserReport) => void;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ showBottomSheet }) => {
    const navigation = useNavigation<HomeStackTypes>();
    const [history, setHistory] = useState<UserReport[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [qtdRelatos, setQtdRelatos] = useState<Number>();

    const fetchQtdRelatosProfile = async () => {
        const profileResponse = await ProfileService.fetchQtdReportsProfile2();
        if (profileResponse.success) {
            setQtdRelatos(profileResponse.data);
        }
    };

    const fetchHistoryProfile = async () => {
        const historyResponse = await ProfileService.fetchProfileHistoryReports();
        if (historyResponse.success) {
            const data = Array.isArray(historyResponse.data) ? historyResponse.data : [historyResponse.data];
            setHistory(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchQtdRelatosProfile();
        fetchHistoryProfile();
    }, []);

    if (qtdRelatos === 0) {
        return <Text style={{ flex: 1, marginTop: '25%', marginBottom: '25%', fontSize: 15, marginLeft: '20%' }}>Você registrou nenhum relato.</Text>;
    }

    return (
        <View>
            { loading ? (
                <View>
                    <ActivityIndicator/>
                </View>
            ) : (
                history.map((item, index) => (
                    <Card mode="contained" style={{ paddingHorizontal: 0, marginBottom: 12 }} key={index} >
                        <TouchableOpacity onPress={() => { navigation.navigate("ReportDetailScreen", {relato: item, isEdit: false}) }} >
                        <Card.Content style={{ paddingHorizontal: 0, paddingVertical: 0 }} >
                            <View style={{ flexDirection: "row", height: 108 }}>
                                <Image
                                    source={{
                                        uri: item.images?.[0]?.url ?? "https://picsum.photos/700"
                                    }}
                                    style={{ width: "40%", height: "100%", borderRadius: 6 }}
                                />

                                <View style={{ flexDirection: "column", paddingHorizontal: 4, flex: 1, marginTop: 8 }}>
                                    <Text>{item?.createdAt ?? 0}</Text>
                                    <Text>{item?.titulo}</Text>
                                    <Text>{item?.dsc.length > 100 ? item.dsc.slice(0, 104) + '...' : item.dsc}</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', right: 0, paddingHorizontal: 10, paddingVertical: 10 }}>
                                <TouchableOpacity onPress={() => showBottomSheet(item)}>
                                <Icon
                                    source="dots-vertical"
                                    size={20}
                                />
                                </TouchableOpacity>
                            </View>
                        </Card.Content>
                        </TouchableOpacity>
                    </Card>
                ))
            )}
        </View>
    );
};
