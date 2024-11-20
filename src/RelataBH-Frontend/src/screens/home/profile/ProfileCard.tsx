import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Avatar, Button, Card, Divider, Text } from "react-native-paper";
import { ProfileService } from "../../../services/profile/ProfileService";

export const ProfileCard: React.FC = () => {
    const [profile, setProfile] = useState<Profile>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchProfile = async () => {
        const profileResponse = await ProfileService.fetchProfile()
        if (profileResponse.success) {
            setProfile(profileResponse.data);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [])

    return (
        <View style={{ alignItems: 'center', width: '100%' }}>

            {
            loading ?
                <View>
                    <ActivityIndicator/>
                </View>
                :
                <View style={{ alignItems: 'center' }}>
                    <Avatar.Image
                        size={150}
                        source={require('../../../../assets/avatar-4x.jpg')}
                        style={{ zIndex: 1, position: 'absolute', top: 0 }} />

                    <Card style={{ marginTop: 75, paddingTop: 64, width: '100%', backgroundColor: '#FEF7FF' }}>
                        <Card.Content>
                            <Text variant="titleLarge" style={{ textAlign: 'center', color: '#65558F', fontWeight: 'bold' }}>{profile?.nome}</Text>
                            <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>{profile?.email}</Text>
                            <Divider style={{ marginVertical: 12 }} />
                            <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>Membro desde {new Intl.DateTimeFormat('pt-BR', { month: 'numeric', year: 'numeric' }).format(new Date(profile?.createdAt??0))}</Text>
                            <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>{profile?.qntRelatos} relatos feitos para a comunidade</Text>
                        </Card.Content>
                    </Card>
                </View>
            }


        </View>
    );
}