import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar, Card, Divider, IconButton, Text } from "react-native-paper";
import { ProfileService } from "../../../services/profile/ProfileService";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from "react-native-gesture-handler";


interface ProfileCardProps {
    showBottomSheet: () => void; 
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ showBottomSheet }) => {
    const [profile, setProfile] = useState<Profile>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchProfile = async () => {
        const profileResponse = await ProfileService.fetchProfile();
        if (profileResponse.success) {
            setProfile(profileResponse.data);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <ShimmerPlaceHolder
                    shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                    LinearGradient={LinearGradient}
                    visible={!loading}
                    duration={1500}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 75,
                        position: 'absolute',
                        top: 0,
                        zIndex: 1,
                    }}
                >
                    <Avatar.Image
                        size={150}
                        source={require('../../../../assets/avatar-4x.jpg')}
                    />
                </ShimmerPlaceHolder>

                <Card style={{ width: '100%', backgroundColor: '#FEF7FF', marginTop: 75 }}>
                    <Card.Content style={{paddingTop: 64}}>
                        <View style={{ alignItems: 'center', marginTop: 12 }}>
                            <ShimmerPlaceHolder
                                shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                                LinearGradient={LinearGradient}
                                visible={!loading}
                                duration={1500}
                                shimmerStyle={{ height: '20', marginTop: 13 }}
                            >
                                <Text variant="titleLarge" style={{ textAlign: 'center', color: '#65558F', fontWeight: 'bold' }}>
                                    {profile?.nome}
                                </Text>
                            </ShimmerPlaceHolder>

                            <ShimmerPlaceHolder
                                shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                                LinearGradient={LinearGradient}
                                visible={!loading}
                                duration={1500}
                                shimmerStyle={{ marginTop: 4 }}
                            >
                                <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>
                                    {profile?.email}
                                </Text>
                            </ShimmerPlaceHolder>
                        </View>

                        <Divider style={{ marginVertical: 12 }} />

                        <View style={{ alignItems: 'center', marginBottom: 14 }}>
                            <ShimmerPlaceHolder
                                shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                                LinearGradient={LinearGradient}
                                visible={!loading}
                                duration={1500}
                                shimmerStyle={{ marginTop: 8, width: '50%' }}
                            >
                                <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>
                                    Membro desde {new Intl.DateTimeFormat('pt-BR', { month: 'numeric', year: 'numeric' }).format(new Date(profile?.createdAt ?? 0))}
                                </Text>
                            </ShimmerPlaceHolder>

                            <ShimmerPlaceHolder
                                shimmerColors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
                                LinearGradient={LinearGradient}
                                visible={!loading}
                                duration={1500}
                                shimmerStyle={{ height: '15', marginTop: 7, width: '65%' }}
                            >
                                <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#65558F' }}>
                                    {profile?.qntRelatos} relatos feitos para a comunidade
                                </Text>
                            </ShimmerPlaceHolder>
                        </View>
                    </Card.Content>

                    <IconButton
                                icon="cog"
                                size={30}
                                onPress={showBottomSheet}
                                style={{position: 'absolute', top: 0, right: 0}}
                            />
                </Card>
            </View>
        </GestureHandlerRootView>
    );
};
