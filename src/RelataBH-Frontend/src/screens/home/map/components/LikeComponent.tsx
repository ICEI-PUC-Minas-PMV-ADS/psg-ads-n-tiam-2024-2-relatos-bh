import { StyleProp, View, ViewStyle, StyleSheet } from "react-native"
import { Divider, Icon, Text, TouchableRipple } from "react-native-paper";

type Props = {
    likeCount: number,
    style?: StyleProp<ViewStyle>
}

export const LikeComponent: React.FC<Props> = ({ likeCount, style }) => {
    return (
        <View style={styles.container}>
            <TouchableRipple
                style={{ borderRadius: 50, paddingEnd: 8, }}
                onPress={() => { console.log("like button") }}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Icon color="#E8DEF8" source="arrow-up" size={20} />
                    <Text style={styles.primaryColor}>{likeCount}</Text>
                </View>
            </TouchableRipple>

            <Divider style={styles.horizontalDivider} />

            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Icon color="#E8DEF8" source="arrow-down" size={20} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#49454F",
        borderRadius: 10,
        flexWrap: 'wrap',
    },
    primaryColor: {
        color: "#E8DEF8"
    },
    horizontalDivider: {
        width: 1,
        height: '100%',
    }
});