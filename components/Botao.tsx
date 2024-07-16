import React from "react"
import { Pressable, StyleSheet } from "react-native"

export interface BotaoProps{
    onPress: () => void
    children: React.ReactNode
}

export default function Botão(props:BotaoProps){
    return(
        <Pressable
            style={({pressed})=> [
                {opacity: pressed ? 0.8 : 1},
                style.botao]} 
            onPress={props.onPress}
            >
                {props.children}
            
        </Pressable>
    )
}


const style = StyleSheet.create({
    botao:{
        backgroundColor: "#3A7EFF",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
    }
})