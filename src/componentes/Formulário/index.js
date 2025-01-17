import { useState } from "react"
import Botão from "../Botão"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulário.css"

const Formulário = (props) => {


    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
    })
    setNome("")
    setImagem("")
    setTime("")
    setCargo("")
    
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto
             obrigatorio= {true}
             label="Nome" 
             placeholder="Digite seu nome"
             valor={nome}
             aoAlterado={valor => setNome(valor)}
            />

            <CampoTexto obrigatorio={true}
             label="Cargo" 
             placeholder="Digite seu cargo"
             valor={cargo}
             aoAlterado={valor => setCargo(valor)}

            />
            <CampoTexto obrigatorio={true}
            label="Imagem"
            placeholder="Informe o endereço da imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />

            <ListaSuspensa 
            obrigatorio={true}
            label = "Time" 
            itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
              />
            <Botão>
                    Criar Card
            </Botão>    

            </form>
        </section>
    )

}

export default Formulário