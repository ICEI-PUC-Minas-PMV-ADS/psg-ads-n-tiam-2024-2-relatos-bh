import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

type Props = {
    onSeachClicked: () => void
}
export const ReportSearchButton: FC<Props> = ({onSeachClicked}) => {
    return (
        <View style={{
            zIndex: 1, 
            position: 'absolute',
            top: 0,
            left: 50,
            right: 50,
            marginTop: 12
            }}>
            <Button 
                mode="contained" 
                onPress={() => { onSeachClicked(); } }>
                Buscar nesta área
            </Button>
        </View>
    );
}