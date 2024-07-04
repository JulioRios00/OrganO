import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);

  const handleNewMemberAdded = (member) => {
    const newMember = { ...member, id: uuidv4() };
    setMembers([...members, newMember]);
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleTeamColor = (color, id) => {
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
    setMembers(members =>
      members.map(member => {
        if (member.setFavorite === undefined) {
          member.setFavorite = false;
        }
        if (member.id === id) {
          return {
            ...member,
            setFavorite: !member.setFavorite
          };
        }
        return member;
      })
    );
  };

  const addNewTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  };
  
  return (
    <div className="App">
      <Banner />
      <Form
        addNewTeam={addNewTeam}
        onRegisteredMember={(member) => handleNewMemberAdded(member)}
        team={teams.map((team) => team.name)}
      />  
      {teams.map((team) => (
        <Team
          setFavorite={handleFavorite}
          changeTeamColor={handleTeamColor}
          key={team.id}
          id={team.id}
          name={team.name}
          color={team.color}
          members={members.filter((member) => member.team === team.name)}
          deleteMember={handleDeleteMember}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
