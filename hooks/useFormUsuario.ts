import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useFormUsuario() {
    // Declara um estado para armazenar os dados do usuário, inicializado como um objeto vazio
    const [Usuario, setUsuario] = useState<any>({}); 

    // Declara um estado para armazenar os erros de validação, inicializado como um objeto vazio
    const [erros, setErros] = useState<any>({});

    // Função para salvar os dados do usuário no AsyncStorage
    function Salvar() {
        // Verifica se os dados são válidos antes de salvar
        if (Validar()) {
            // Salva os dados do usuário no AsyncStorage como uma string JSON
            AsyncStorage.setItem('usuario', JSON.stringify(Usuario));
        }
    }

    // Hook useEffect para carregar os dados do usuário do AsyncStorage quando o componente é montado
    useEffect(() => {
        // Obtém os dados do usuário do AsyncStorage
        AsyncStorage.getItem('usuario').then((usuario) => {
            // Se houver dados, atualiza o estado do usuário com os dados obtidos
            if (usuario) {
                setUsuario(JSON.parse(usuario));
            }
        });
    }, []); // O array vazio como segundo argumento faz com que este effect seja executado apenas uma vez

    // Função para validar os dados do usuário
    function Validar() {
        // Declara um objeto para armazenar os erros de validação
        let erros = {};
        
        // Verifica se o campo nome está vazio
        if (!Usuario.nome) {
            // Adiciona uma mensagem de erro ao objeto erros
            erros = { ...erros, nome: 'Nome é Obrigatório!' };
        } else if (Usuario.nome.length < 3) {
            // Verifica se o nome tem menos de 3 caracteres e adiciona uma mensagem de erro
            erros = { ...erros, nome: 'Nome deve ter no mínimo 3 caracteres!' };
        }

        // Atualiza o estado dos erros com os erros encontrados
        setErros(erros);

        // Retorna verdadeiro se não houver erros, caso contrário, retorna falso
        return Object.keys(erros).length === 0;
    }

    // Retorna os dados do usuário, erros, função para atualizar o usuário e função para salvar
    return {
        Usuario,
        erros,
        setUsuario,
        Salvar,
    };
}
