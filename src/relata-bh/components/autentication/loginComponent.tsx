import { StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { AuthApiManager } from '@/apiManager/AuthApiManager';

export interface loginProps {
    onSignUp: () => void,
}

export default function LoginComponent({onSignUp = () => {} }: loginProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        new AuthApiManager().login(email, password);
    }

    return (
        <View>
            <Text style={styles.tituloAutentication}>
                Login
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
                value={password}
                mode="outlined"
                secureTextEntry={true}
                placeholder={"Digite a senha"}
                onChangeText={senha => { setPassword(senha) }}
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
            
            <View style={styles.row3}>
                <Button mode="text" onPress={() => console.log('Pressed')}>
                    Não tem uma conta?
                </Button>
            </View>
            <Button mode="outlined" textColor='#000' onPress={() => {onSignUp()}}>
                    Registre-se
            </Button>
            
        </View>
    );
};

const styles = StyleSheet.create({
    tituloAutentication: {
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 22,
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
    },
    row3:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        paddingTop: 40,
    },
})
