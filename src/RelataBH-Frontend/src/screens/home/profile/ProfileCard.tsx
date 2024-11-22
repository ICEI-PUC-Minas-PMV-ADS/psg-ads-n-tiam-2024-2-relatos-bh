import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Avatar, Button, Card, Divider, Text } from "react-native-paper";
import { ProfileService } from "../../../services/profile/ProfileService";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

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


            <ShimmerPlaceHolder
                shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                visible={!loading}
                duration={1500}
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    position: 'absolute',
                    top: 0,
                    zIndex: 1
                }}
            >
                <Avatar.Image
                    size={150}
                    source={require('../../../../assets/avatar-4x.jpg')}
                />
            </ShimmerPlaceHolder>

            <Card style={{ marginTop: 75, paddingTop: 64, width: '100%', backgroundColor: '#FEF7FF' }}>
                <Card.Content>
                    <View style={{ alignItems: 'center' }}>
                        <ShimmerPlaceHolder
                            shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                            visible={!loading}
                            duration={1500}
                            
                        >
                            < Text variant="titleLarge" style={{ textAlign: 'center', color: '#65558F', fontWeight: 'bold' }}>{profile?.nome}</Text>
                        </ShimmerPlaceHolder>

                        <ShimmerPlaceHolder
                            shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                            visible={!loading}
                            duration={1500}
                            style={{ marginTop: 1 }}
                        >
                            <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>{profile?.email}</Text>
                        </ShimmerPlaceHolder>
                    </View>

                    <Divider style={{ marginVertical: 12 }} />

                    <View style={{ alignItems: 'center' }}>
                        <ShimmerPlaceHolder
                            shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                            visible={!loading}
                            duration={1500}
                            style={{ marginTop: 1 }}
                        >
                            <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>Membro desde {new Intl.DateTimeFormat('pt-BR', { month: 'numeric', year: 'numeric' }).format(new Date(profile?.createdAt ?? 0))}</Text>
                        </ShimmerPlaceHolder>

                        <ShimmerPlaceHolder
                            shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                            visible={!loading}
                            duration={1500}
                            style={{ marginTop: 1 }}
                        >
                            <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>{profile?.qntRelatos} relatos feitos para a comunidade</Text>
                        </ShimmerPlaceHolder>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
}