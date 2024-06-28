import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#D9F7E9",
      secondaryColor: "#57C278",
    },
    {
      name: "Front-end",
      primaryColor: "#E8F8FF",
      secondaryColor: "#82CFFA",
    },
    {
      name: "Data Science",
      primaryColor: "#F0F8E2",
      secondaryColor: "#A6D157",
    },
    {
      name: "Devops",
      primaryColor: "#FDE7E8",
      secondaryColor: "#E06B69",
    },
    {
      name: "Ux e Design",
      primaryColor: "#FAE9F5",
      secondaryColor: "#DB6EBF",
    },
    {
      name: "Mobile",
      primaryColor: "#FFF5D9",
      secondaryColor: "#FFBA05",
    },
    {
      name: " Inovação e Gestão",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
  ];

  const [members, setMembers] = useState([]);

  const onNewMemberAdded = (member) => {
    setMembers([...members, member]);
  };

  const deleteMember = () => {
    console.log("Member deleted");
  };

  return (
    <div className="App">
      <Banner />
      <Form
        onRegisteredMember={(member) => onNewMemberAdded(member)}
        team={teams.map((team) => team.name)}
      />
      {teams.map((team) => {
        return (
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            members={members.filter((member) => member.team === team.name)}
            deleteMember={deleteMember}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
