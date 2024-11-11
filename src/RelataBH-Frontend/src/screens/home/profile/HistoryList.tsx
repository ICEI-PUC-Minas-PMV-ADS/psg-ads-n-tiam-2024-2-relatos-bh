import { FlatList, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { HistoryCard } from "./HistoryCard";
import { useState } from "react";

export const HistoryList: React.FC = () => {

    return (
        <View style={{ alignItems: 'center', width: '100%', padding: 16 }}>
            <Card style={{ width: '100%', backgroundColor: '#FEF7FF' }}>
                <Card.Content>
                    <Text variant="titleMedium" style={{color: '#65558F'}}>
                        Meus relatos
                    </Text>

                </Card.Content>
            </Card>
        </View>
    );
}

