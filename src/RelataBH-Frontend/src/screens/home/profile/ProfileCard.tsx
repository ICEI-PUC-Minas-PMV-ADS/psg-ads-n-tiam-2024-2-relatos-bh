import React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Divider, Text } from "react-native-paper";

export const ProfileCard: React.FC = () => {
    return (
        <View style={{ alignItems: 'center', width: '100%'}}>

            <Avatar.Image
                size={150}
                source={require('../../../../assets/avatar-4x.jpg')}
                style={{ zIndex: 1, position: 'absolute', top: 0 }} />

            <Card style={{ marginTop: 75, paddingTop: 64, width: '100%', backgroundColor: '#FEF7FF'}}>
                <Card.Content>
                    <Text variant="titleLarge" style={{textAlign: 'center', color: '#65558F', fontWeight: 'bold'}}>Barbara R. Martin</Text>
                    <Text variant="bodyMedium" style={{textAlign: 'center', color: '#65558F'}}>barbara.r.martin@gmail.com</Text>
                    <Divider style={{marginVertical: 12}}/>
                    <Text variant="bodyMedium" style={{textAlign: 'center', color: '#65558F'}}>Membro desde 10/2024</Text>
                    <Text variant="bodyMedium" style={{textAlign: 'center', color: '#65558F'}}>5 relatos feitos para a comunidade</Text>
                </Card.Content>
            </Card>
        </View>
    );
}