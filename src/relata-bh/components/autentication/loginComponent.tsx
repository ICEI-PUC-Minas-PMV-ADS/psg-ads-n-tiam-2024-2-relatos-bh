import { StyleSheet, Text, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { AuthApiManager } from '@/apiManager/AuthApiManager';

export default function LoginComponent() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    const login = async () => {
        new AuthApiManager().login(email, senha);
    }

    return (
        <View>
            <Text style={styles.tituloAutentication}>
                login
            </Text>
            <TextInput
                label="Email"
                value={email}
                mode="outlined"
                placeholder={"Digite o E-mail"}
                onChangeText={email => { setEmail(email) }}
            />
            <TextInput
                label="Senha"
                value={senha}
                mode="outlined"
                secureTextEntry={true}
                placeholder={"Digite a senha"}
                onChangeText={senha => { setSenha(senha) }}
            />
            <View style={styles.row}>
                <View style={styles.row2}>
                    <Checkbox
                        status={'checked'}
                        onPress={() => { }}
                    />
                    <Text>Lembrar senha</Text>
                </View>
                <Button mode="text" onPress={() => console.log('Pressed')}>
                    Esqueci minha senha
                </Button>
            </View>
            <Button mode="contained" onPress={() => login()}>
                Login
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    tituloAutentication: {
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 24,
        fontSize: 24
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    row2: {
        flexDirection: "row",
        alignItems: "center",

    }
})