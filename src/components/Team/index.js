import TeamMember from "../TeamMember";
import "./index.css";
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';

const Team = (props) => {

   const handleDeleteMember = (memberId) => {
      props.deleteMember(memberId)
   }

  return props.members.length > 0 ? (
    <section className="team" style={{backgroundImage:'url(/imgs/fundo.png)', backgroundColor:hexToRgba(props.color, "0.6")}}>
      <input
        type="color"
        onChange={e => props.changeTeamColor(e.target.value, props.id)}
        className="input-color"
        value={props.color}
        changeColor={props.changeColor}
      />
      <h3 styles={{BorderColor:props.color}}>{props.name}</h3>
      <div className="members">
        {props.members.map((member) => {
          
          return (
            <TeamMember
              id={uuidv4()}
              backgroundColor={props.color}
              name={member.name}
              role={member.role}
              image={member.image}
              label={member.label}
              key={member.name}
              deleteMember={() => handleDeleteMember(member.id)}
              member={member}
              setFavorite={props.setFavorite}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
