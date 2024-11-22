import { FC } from "react";
import { View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

export const ReportSearchLoading: FC = () => {
    return (
        <View
                    style={{
                        zIndex: 1, 
                        position: 'absolute',
                        top: 0,
                        left: 162,
                        right: 162,
                        marginTop: 12,
                        }}>
                            <ActivityIndicator style={{
                                backgroundColor: 'white',
                                borderRadius: 50,
                                padding: 6
                            }}/>
                    </View>
    );
}