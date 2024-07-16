import Botao from "@/components/Botao";
import styles from "@/constants/style";
import { View, Text, TextInput } from "react-native";
import CPF from "./utils/CPF";
import useFormUsuario from "@/hooks/useFormUsuario";

export default function TelaFormulario() {

    // Usa o hook useFormUsuario para obter o estado e funções necessários
    const { Usuario, erros, setUsuario, Salvar } = useFormUsuario();

    // Função para lidar com mudanças no campo de CPF
    function handleCpfChange(cpf: string) {
        const formattedCpf = CPF.formatar(cpf); // Formata o CPF usando a função importada
        setUsuario({ ...Usuario, cpf: formattedCpf }); // Atualiza o estado do usuário com o CPF formatado
    }

    // Renderiza a interface do formulário
    return (
        <View style={styles.centralizado}>
            <Text>Formulario</Text>

            <TextInput
                placeholder="Nome" // Placeholder do campo de entrada
                value={Usuario.nome ?? ''} // Valor do campo, com fallback para string vazia
                style={[styles.input, erros.nome && styles.inputError]} // Aplica estilos, incluindo erro se houver
                onChangeText={(nome) => setUsuario({ ...Usuario, nome })} // Atualiza o estado do usuário ao mudar o texto
            />

            {/* Exibe mensagem de erro para o nome, se houver */}
            {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}

            <TextInput
                placeholder="CPF" // Placeholder do campo de entrada
                value={Usuario.cpf ?? ''} // Valor do campo, com fallback para string vazia
                style={styles.input} // Aplica estilo de entrada
                keyboardType="phone-pad" // Define o teclado para entrada de telefone
                onChangeText={handleCpfChange} // Utiliza a função handleCpfChange ao mudar o texto
            />

            <Botao onPress={Salvar}>
                <Text style={{ color: '#fff' }}>
                    Salvar
                </Text>
            </Botao>
        </View>
    );
}
