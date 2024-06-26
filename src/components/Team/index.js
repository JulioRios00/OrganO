import TeamMember from "../TeamMember";
import "./index.css";

const Team = (props) => {
  const colors = {
    backgroundColor: props.primaryColor,
    borderColor: props.secondaryColor,
  };

  return (
    (props.members.length > 0) ?
    <section className="team" style={colors}>
      <h3 style={colors}>{props.name}</h3>
      <div className="members">
        {props.members.map((member) => (
          <TeamMember
            backgroundColor={props.secondaryColor}
            name={member.name}
            role={member.role}
            image={member.image}
            key={member.name}
          />
        ))}
      </div>
    </section> : ""
  );
};

export default Team;
