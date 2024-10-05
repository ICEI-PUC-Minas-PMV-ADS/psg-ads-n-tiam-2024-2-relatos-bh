import { StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox, IconButton, MD3Colors, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { AuthApiManager } from '@/apiManager/AuthApiManager';

export interface signUpProps {
    onBack: () => void,
}

export default function LogupComponent({onBack = () => {} }: signUpProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmarPassword, setConfirmarPassword] = useState("")

    const register = async () => {
        new AuthApiManager().register(name,email,password,confirmarPassword)
    }

    return (
        <View>
            <View style={styles.registerHeader}>
            <IconButton
                icon="arrow-left"
                size={20}
                onPress={() => onBack()}
            />
                <Text style={styles.tituloAutentication}>
                    Registro
                </Text>
            </View>
            <TextInput
                label="Nome"
                value={name}
                mode="outlined"
                placeholder={"Digite o seu nome"}
                onChangeText={name => { setName(name) }}
            />
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
                onChangeText={password => { setPassword(password) }}
            />
            <TextInput
                label="Confirmar Senha"
                value={confirmarPassword}
                mode="outlined"
                secureTextEntry={true}
                placeholder={"Confirme a senha"}
                style = {styles.inputConfirmarPassword}
                onChangeText={confirmarPassword => { setConfirmarPassword(confirmarPassword) }}
            />

            <Button mode="outlined" textColor='#000' onPress={() => register()}>
                    Registrar
            </Button>
            
        </View>
    );
};

const styles = StyleSheet.create({
    tituloAutentication: {
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 22,
        fontSize: 24,
        flex: 1,
        paddingEnd: 24
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    inputConfirmarPassword:{
        marginBottom: 23,
    },
    registerHeader: {
        flexDirection: "row",
        alignItems: 'center'
    }
})
