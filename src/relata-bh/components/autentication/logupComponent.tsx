import { StyleSheet, Text, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { AuthApiManager } from '@/apiManager/AuthApiManager';

export default function LogupComponent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmarPassword, setConfirmarPassword] = useState("")

    const register = async () => {
        new AuthApiManager().register(name,email,password,confirmarPassword)
    }

    return (
        <View>
            <Text style={styles.tituloAutentication}>
                Registro
            </Text>
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
        fontSize: 24
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    inputConfirmarPassword:{
        marginBottom: 23,
    },
})
