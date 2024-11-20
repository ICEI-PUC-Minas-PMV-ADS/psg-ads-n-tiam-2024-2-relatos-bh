import { View, Image } from "react-native";
import { Card, Text } from "react-native-paper";

export const HistoryCard: React.FC = () => {
    return (
        <View style={{marginBottom: 12}}>
            <Card mode="contained" style={{paddingHorizontal: 0}}>
            <Card.Content style={{paddingHorizontal: 0, paddingVertical: 0 }}>
                <View style={{flexDirection: 'row'}}>
                <Image
                        style={{width: '40%', height: 102, borderRadius: 6 }}
                        source={{
                            uri: "https://picsum.photos/700",
                        }}
                    />

                    <View style={{flexDirection: 'column', paddingHorizontal: 4, flex: 1, marginTop: 8}}>
                        <Text>10/10/2021</Text>
                        <Text>Buraco na Rua Sergipe</Text>
                        <Text style={{flexGrow: 1 ,flex: 1, flexWrap: 'wrap', flexShrink: 1, width: 'auto'}} numberOfLines={2} ellipsizeMode="tail">Buraco incomodando tooda a vizinhança! Não aguento mais :/</Text>
                    </View>
                </View>
            </Card.Content>
            </Card>
        </View>
    );
}
