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

  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const submitMemberInfo = (event) => {
    event.preventDefault();
    props.onRegisteredMember({
      name,
      role,
      image,
      team,
    });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  const submitTeamInfo = (event) => {
    event.preventDefault();
    props.addNewTeam({
      name: teamName,
      color: teamColor,
    });
    setTeamName("");
    setTeamColor("");
  };

  return (
    <section className="Form">
      <form onSubmit={submitMemberInfo}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          label="Nome"
          value={name}
          required
          onChanged={(value) => setName(value)}
          placeholder="Digite seu nome"
        />
        <TextField
          label="Cargo"
          value={role}
          required
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
          required
          label="Time"
          itens={props.team}
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={submitTeamInfo}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <TextField
          label="Nome"
          value={teamName}
          required
          onChanged={(value) => setTeamName(value)}
          placeholder="Digite o nome do time"
        />
        <TextField
          label="Cor"
          value={teamColor}
          required
          onChanged={(value) => setTeamColor(value)}
          placeholder="Insira um valor HEX (#000000)"
        />
        <Button>Criar um time</Button>
      </form>
    </section>
  );
};

export default Form;
