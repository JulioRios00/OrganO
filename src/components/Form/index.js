import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const submitInfo = (event) => {
    event.preventDefault();
    props.onRegisteredMember({
      name,
      role,
      image,
      team,
    })
    setName("")
    setRole("")
    setImage("")
    setTeam("")
  };

  return (
    <section className="Form">
      <form onSubmit={submitInfo} >
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          label="Nome"
          value={name}
          required={true}
          onChanged={(value) => setName(value)}
          placeholder="Digite seu nome"
        />
        <TextField
          label="Cargo"
          value={role}
          required={true}
          onChanged={(value) => setRole(value)}
          placeholder="Qual seu cargo"
        />
        <TextField
          label="Imagem"
          value={image}
          placeholder="Digite o endereço da imagem"
          onChanged={(value) => setImage(value)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={props.team}
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
