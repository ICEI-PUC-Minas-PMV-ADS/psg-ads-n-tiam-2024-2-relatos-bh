import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { ActivityIndicator, Button, Checkbox, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackTypes } from '../../routes/routes';
import { AuthService } from '../../services/auth/AuthService';

export interface loginProps {
    onSignUp: () => void,
    onRecoverPassword: () => void,
}

export default function LoginComponent({onSignUp = () => {},onRecoverPassword = () => {} }: loginProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const rootNavigation = useNavigation<RootStackTypes>();
    const [isLoading, setLoading] = useState<Boolean>(false);

    const login = async () => {
        setLoading(true);
        const response = await AuthService.login(email, password);
        setLoading(false);
    
        if(response.success){
                rootNavigation.replace("Home");
        } else {
            ToastAndroid.show("Tente novamente mais tarde!", ToastAndroid.SHORT);
        }
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
                <Button mode="text" onPress={() =>onRecoverPassword()}>
                    Esqueci minha senha
                </Button>
            </View>
            <Button mode="contained" onPress={() => login()}>
                {isLoading ? <ActivityIndicator animating={true} color='#FFF' /> : <>Login</> }
            </Button>
            
            <View style={styles.row3}>
                <Button mode="text" onPress={() => {onSignUp()}}>
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
