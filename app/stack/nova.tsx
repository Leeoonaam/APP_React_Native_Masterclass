import Botao from "@/components/Botao";
import styles from "@/constants/style";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TelaNova(props: any){
    return(

        <View style={[styles.centralizado,{gap:10}]}>
            <Text>Tela Nova</Text>
            <Botao onPress={()=>{}}>
                <Link href={'/stack'} style={{color: '#fff'}}>
                    Ir para tela Inicial
                </Link>
            </Botao>
        </View>

    )
}