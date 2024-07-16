import style from "@/constants/style"
import { Ionicons } from "@expo/vector-icons"
import React, { useState } from "react"
import { View, Text } from "react-native"
import Botao from "./Botao"

export interface ContadorProps {
    valorInicial?: number
}

export default function Contador(props: ContadorProps) {
    // HOOKS
    const [numero, setNumero] = useState(props.valorInicial ?? 0) // caso não tenha passado nenhum valor, passa a ser 0 por padrão

    return (
        <View style={style.centralizado}>
            <Text style={{ fontSize: 50 }}>{numero}</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Botao onPress={() => setNumero(numero + 1)}>
                    <Ionicons name="add" size={24} color="white" />
                </Botao>
                <Botao onPress={() => setNumero(numero - 1)}>
                    <Ionicons name="remove" size={24} color="white" />
                </Botao>
            </View>
        </View>
    )
}
