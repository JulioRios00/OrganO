import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([]);

  const [members, setMembers] = useState([]);

  const onNewMemberAdded = (member) => {
    const newMember = { ...member, id: uuidv4() };
    setMembers([...members, newMember]);
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const changeTeamColor = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  };

  const handleFavorite = (id) => {
    setMembers(member => {
      if(member.id === id) {
        member.favorite = !member.favorite
      }
    })
  }

  const addNewTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        addNewTeam={addNewTeam}
        onRegisteredMember={(member) => onNewMemberAdded(member)}
        team={teams.map((team) => team.name)}
      />  
      {teams.map((team) => {
        return (
          <Team
            toFavorite={handleFavorite}
            changeTeamColor={changeTeamColor}
            key={team.name}
            id={team.id}
            name={team.name}
            color={team.color}
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
