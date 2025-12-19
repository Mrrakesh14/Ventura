import { useNavigate } from "react-router-dom";

const IPOCard = ({ ipo }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/ipo/${ipo.id}`)}>
      <h3>{ipo.name}</h3>
      <p>Date: {ipo.date}</p>
      <p>Lots: {ipo.lots}</p>
    </div>
  );
};

export default IPOCard;
