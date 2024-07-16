import Botao from "@/components/Botao";
import styles from "@/constants/style";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TelaInicial(props: any) {
  return (
    <View style={[styles.centralizado,{gap:10}]}>
      <Text>Tela Inicial</Text>
        <Botao onPress={() => {}}>
            <Link href={'/stack/nova'} style={{color: '#fff'}}>
                Ir para tela nova
            </Link>
        </Botao>
    
        <Botao onPress={() => {}}>
            <Link href={'/'} style={{color: '#fff'}}>
                Ir para Início
            </Link>
        </Botao>
    </View>
  );
}
