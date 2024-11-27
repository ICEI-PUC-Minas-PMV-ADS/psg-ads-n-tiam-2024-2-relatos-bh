import { StyleSheet, View, StyleProp, ViewStyle, Image, FlatList } from "react-native"

type Props = {
    images: [{url:string}],
    style?: StyleProp<ViewStyle>
}

export const ImageViewPager: React.FC<Props> = ({ images, style }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                horizontal={true}
                data={images}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.url,
                        }}
                    />
                }
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 80,
        borderRadius: 16,
        marginEnd: 12
    }
});