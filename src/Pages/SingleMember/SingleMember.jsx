import { useLoaderData } from "react-router-dom";
import "./SingleMember.css";

export default function SingleMember() {
  const memberData = useLoaderData();
  console.log(memberData);
  return (
    <div className="member-wrap">
      <div className="member">
        <div className="img">
          <img src={`../../../public/img/${memberData.id}.jpg`} alt="" />
        </div>
        <div className="details">
          <h3>{memberData.name}</h3>
          <p>@{memberData.username}</p>
          <p>Email: {memberData.email}</p>
          <p>Phone: {memberData.phone}</p>
          <p>Company: {memberData.company.name}</p>
        </div>
      </div>
    </div>
  );
}
