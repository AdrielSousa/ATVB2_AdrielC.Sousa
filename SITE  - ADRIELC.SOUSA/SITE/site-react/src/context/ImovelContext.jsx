import { useEffect } from "react";
import { createContext, useState } from "react";

const dados = [
    {
        foto: './assets/img/casa1.jpg',
        titulo: 'CASA DE ALVENARIA COM 230M² NO BAIRRO LA SALLE.',
        descricao: 'Dois quartos, Sala Grande ',
        preco: 80000.00,
        operacao: 'venda',
        tipo: 'casa',
        cidade: 'pato',
        bairro: 'centro'
    },
    {
        foto: './assets/img/casa2.jpg',
        titulo: 'CASA ALTO PADRÃO NO BAIRRO VILA NOVA',
        descricao: 'Casa com Pscina, Closet e Banheiro Grande',
        preco: 125000.00,
        operacao: 'venda',
        tipo: 'apto',
        cidade: 'beltrao',
        bairro: 'centro'
    },
    {
        foto: './assets/img/casa3.jpg',
        titulo: 'SOBRADO DE ALVENARIA NOVO COM 1 SUÍTE + 2 QUARTOS',
        descricao: '1 suíte + 2 quartos, cozinha e sala conjugadas, banheiro social, lavanderia, lavabo e garagem para 2 carros',
        preco: 3500.00,
        operacao: 'locação',
        tipo: 'casa',
        cidade: 'beltrao',
        bairro: 'centro'
    },
    {
        foto: './assets/img/casa4.jpg',
        titulo: 'Casa Alto Padrão - Em fase de acabamento – Alto do bairro São Luiz. 250 m² Próx. Shopping PB',
        descricao: 'Pé direito alto, bem estar, Funcionalidades para viver bem, Vista do nascer do sol',
        preco: 115000.00,
        operacao: 'venda',
        tipo: 'sobrado',
        cidade: 'coronel',
        bairro: 'centro'
    },
    {
        foto: './assets/img/casa5.jpg',
        titulo: 'ALTÍSSIMO PADRÃO. 331,50 M² DE CONFORTO E BEM ESTAR. TERRENO PLANO 900 M2.',
        descricao: 'Nobre residência, no Parque do Som. 331,50 m² Uma casa totalmente plana. Faz divisa com a exuberante mata nativa, uma Reserva Legal do Parque do Som',
        preco: 1500000.00,
        operacao: 'venda',
        tipo: 'sobrado',
        cidade: 'pato',
        bairro: 'lasalle'
    },
    {
        foto: './assets/img/casa6.jpg',
        titulo: 'CASA DE ALVENARIA COM 3 QUARTOS',
        descricao: 'Casa com 3 quartos, banheiro social, sala, cozinha, despensa, 1 peça para escritório, churrasqueira e garagem para 2 carros.',
        preco: 2500.00,
        operacao: 'locação',
        tipo: 'apto',
        cidade: 'pato',
        bairro: 'centro'
    },
    {
        foto: './assets/img/casa7.jpg',
        titulo: 'CASA ALTO PADRÃO – CONCEITO ABERTO AMERICANO *VISITAS SOMENTE COM HORÁRIO MARCADO*',
        descricao: 'Metragem de 349,78 m² construída e terreno de 684 m²',
        preco: 33000.00,
        operacao: 'locacao',
        tipo: 'casa',
        cidade: 'coronel',
        bairro: 'centro'
    },
    {
        foto: './assets/img/casa8.jpg',
        titulo: 'CASA AMPLA DE ALVENARIA COM EDÍCULA E GARAGEM PARA ATÉ 4 CARROS',
        descricao: 'Parte superior: 1 sala ampla de 2 ambientes, 1 sala de estar, 1 suíte + 3 quartos, banheiro social. Parte inferior: Cozinha ampla com pia e fogão cook top, 1 quarto, banheiro social.',
        preco: 4100.00,
        operacao: 'locacao',
        tipo: 'casa',
        cidade: 'coronel',
        bairro: 'centro'
    },
    {
        foto: './assets/img/casa9.jpg',
        titulo: 'CASA ALTO PADRÃO SEMI-MOBILIADA NO CENTRO APROX. 300 M². PRÓXIMO POLICLÍNICA',
        descricao: 'Casa localizada distante 450 metros da praça Getúlio Vargas,Cozinha ampla, sala de jantar, sala de estar/tv, e sala com sacada.',
        preco: 160000.00,
        operacao: 'Venda',
        tipo: 'casa',
        cidade: 'coronel',
        bairro: 'centro'
    }
]

export const ImovelContext = createContext();

export function ImovelContextProvider(props) {

    const [imoveis, setImoveis] = useState(dados);
    const [paramFilter, setParamFilter] = useState({});    

    useEffect(() => {

        let dadosFiltrados = dados;

        //Operação
        if (paramFilter.operacao) {
            dadosFiltrados = dadosFiltrados.filter(item => item.operacao === paramFilter.operacao)
        }

        //Tipo
        if (paramFilter.tipo) {
            dadosFiltrados = dadosFiltrados.filter(item => item.tipo === paramFilter.tipo)
        }

        //Cidade
        if (paramFilter.cidade) {
            dadosFiltrados = dadosFiltrados.filter(item => item.cidade === paramFilter.cidade)
        }

        //Bairro
        if (paramFilter.bairro) {
            dadosFiltrados = dadosFiltrados.filter(item => item.bairro === paramFilter.bairro)
        }

        setImoveis(dadosFiltrados)

    }, [ paramFilter ]);



    return (
        <ImovelContext.Provider value={{imoveis, setParamFilter}}>
            {props.children}
        </ImovelContext.Provider>
    )
}