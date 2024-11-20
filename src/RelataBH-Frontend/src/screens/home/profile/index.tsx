import { FlatList, ScrollView, View } from "react-native";
import { Appbar, Avatar, Card, Text, Button, ActivityIndicator } from "react-native-paper";
import { ProfileCard } from "./ProfileCard";
import { HistoryList } from "./HistoryList";
import { useState } from "react";
import { HistoryCard } from "./HistoryCard";

export const ProfileScreen: React.FC = () => {
    const [reports, setReports] = useState<ReportHistory[] | null>(createHistoryMock())

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <FlatList
                style={{ width: '100%' }}
                data={reports}
                ListHeaderComponent={() => (
                    <View >
                        <Text variant="titleLarge" style={{ marginVertical: 32, textAlign: 'center', fontWeight: 'bold', color: '#65558F' }}>Perfil</Text>
                        <ProfileCard />
                        <Text variant="titleMedium" style={{color: '#65558F', fontWeight: 'bold', marginTop: 12}}>Meus relatos</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ marginBottom: 12 }}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={(report) => (
                    <HistoryCard />
                )}
                ListFooterComponent={() => (
                    <ActivityIndicator size={'large'}/>
                )}
            />
        </View>
    );
}

const createHistoryMock = () => {
    return [
        {
            id: 1,
            name: 'Buraco na rua 1',
            description: 'Buraco incomodando todos os vizinhos.',
            date: Date.now(),
            image: 'https://picsum.photos/700'
        } as ReportHistory,
        {
            id: 2,
            name: 'Buraco na rua 2',
            description: 'Buraco incomodando todos os vizinhos.',
            date: Date.now(),
            image: 'https://picsum.photos/700'
        } as ReportHistory,
        {
            id: 3,
            name: 'Buraco na rua 3',
            description: 'Buraco incomodando todos os vizinhos.',
            date: Date.now(),
            image: 'https://picsum.photos/700'
        } as ReportHistory,
        {
            id: 4,
            name: 'Buraco na rua 4',
            description: 'Buraco incomodando todos os vizinhos.',
            date: Date.now(),
            image: 'https://picsum.photos/700'
        } as ReportHistory
    ]
}