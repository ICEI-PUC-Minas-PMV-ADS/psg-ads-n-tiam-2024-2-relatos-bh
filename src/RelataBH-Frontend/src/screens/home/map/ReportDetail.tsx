import { StyleProp, View, ViewStyle, StyleSheet, } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { ImageViewPager } from "./components/ImageViewPager";
import { LikeComponent } from "./components/LikeComponent";

type Props = {
    report: UserReport | null,
    style?: StyleProp<ViewStyle>
}

export const ReportDetail: React.FC<Props> = ({ report, style }) => {
    return (
        <View style={[style, styles.container]}>
            {report &&
                <Card>
                <Card.Content>

                    <ImageViewPager images={report.photos} />

                    <View style={{flexDirection: "row"}}>
                        <View style={{flex: 1}}>
                        <Text variant="titleMedium" numberOfLines={2} ellipsizeMode='tail' style={styles.bold}>{report.name}</Text>
                        <Text variant="bodyMedium" style={styles.bold} numberOfLines={2} ellipsizeMode='tail'>{report.description}</Text>
                        </View>
                        <Text>Desde{"\n"}19/01/2023</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <Text variant="bodyMedium" style={{ color: '#65558F', flex: 1}} numberOfLines={2} ellipsizeMode='tail'>
                            {report.address}
                        </Text>
                        <LikeComponent likeCount={10}/>
                    </View>
                </Card.Content>
            </Card>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
        width: '100%'
    },
    bold: {
        fontWeight: 'bold'
    }
});