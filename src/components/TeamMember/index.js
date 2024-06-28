import "./TeamMember.css";

const TeamMember = (props) => {
  return (
    <div className="teamMember">
      <div className="deleteMember" onClick={props.deleteMember}>
        delete
      </div>
      <div
        children="header"
        style={{
          backgroundColor: props.backgroundColor,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
      >
        <img src={props.image} alt={props.name} />
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
      </div>
    </div>
  );
};

export default TeamMember;
