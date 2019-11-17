import React, {useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import AvatarImg from '../../assets/canguruBolado.png';
import {Ionicons} from "@expo/vector-icons";

export default function Home({ navigation }){
    function handleSubmit() {
        navigation.navigate('Dashboard');
    }

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return(
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Hi !!</Text>
                
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={AvatarImg} />

                    <View style={styles.avatarTextContainer}>
                        <Text style={styles.avatarInfo}>Text</Text>
                        <Text style={styles.avatarInfo}>Text</Text>
                    </View>
                </View>

                <View>
                    <TextInput
                        placeholder="Login"
                        placeholderTextColor="#999"
                        value={user}
                        onChange={setUser}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#999"
                        value={password}
                        onChange={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity onPress={handleSubmit}>
                    <Ionicons name='md-arrow-forward' size={58} color='#FFF'/>
                </TouchableOpacity>

                <View style={styles.rodapeContainer}>
                    <Text style={styles.rodapeText}>Texto do rodapé</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'#01755D',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0,
    },  
    mainTitle:{
        fontSize:34,
        color: '#FFF',
        letterSpacing: 2
    },
    avatarContainer:{
        width: '100%',
        alignItems: 'center',
    },
    avatarInfo:{
        color: '#FFF',
        letterSpacing: 2,
        fontSize: 18,
    },
    avatar:{
        width:150,
        height:150, 
        borderRadius: 100,
    },
    avatarTextContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    rodapeContainer:{
        backgroundColor: '#c5fcf0',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
    },
    rodapeText:{
        fontSize: 22,
    }
  });