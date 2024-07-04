import "./TeamMember.css";
import { IoCloseCircleSharp } from "react-icons/io5";

const TeamMember = (props) => {
  return (
    <div className="teamMember">
      <IoCloseCircleSharp
        size={25}
        className="deleteMember"
        onClick={() => props.deleteMember(props.id)}
      />
      <div
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
