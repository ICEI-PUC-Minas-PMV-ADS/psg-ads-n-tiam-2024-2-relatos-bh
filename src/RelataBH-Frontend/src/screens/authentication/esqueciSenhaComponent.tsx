import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { ActivityIndicator, Button, IconButton, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { AuthService } from '../../services/auth/AuthService';
import { isAnimationTerminatingCalculation } from 'react-native-reanimated/lib/typescript/animation/springUtils';

export interface esqueciSenhaProps {
    onEsqueciSenha: () => void,
    onBack: () => void,
}

export default function EsqueciSenhaComponent({ onEsqueciSenha = () => { }, onBack = () => { } }: esqueciSenhaProps) {
    const [email, setEmail] = useState("");

    const esqueciSenha = async () => {
        const emailEnviado = await AuthService.recoverPassword(email);
        if (emailEnviado.success === true) {
            ToastAndroid.show("Verifique seu email!", ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.titulo}>
            { }
            <Text style={styles.titulo}>Recuperar Senha</Text>
            <TextInput
                label="E-mail"
                value={email}
                mode="outlined"
                placeholder="Digite o e-mail"
                style={styles.input}
                onChangeText={setEmail}
            />
            <Text style={styles.info}>
                Caso seu e-mail esteja correto, enviaremos as instruções para recuperar a senha no e-mail informado.
            </Text>
            <Button mode="contained" onPress={() => esqueciSenha()}>
                Recuperar Senha
            </Button>

            { }
            <View style={styles.backButtonContainer}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    onPress={onBack}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    isAnimationTerminatingCalculation: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    titulo: {
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 22,
        fontSize: 24
    },
    input: {
        width: "100%",
        marginBottom: 15,
    },
    info: {
        textAlign: "center",
        fontSize: 14,
        color: "#6c757d",
        marginBottom: 20,
    },
    backButtonContainer: {
        position: "absolute",
        top: 5,
        left: 5,
        zIndex: 1,
    },
    button: {
        width: "100%",
        backgroundColor: "#6c5ce7",
    },
});
