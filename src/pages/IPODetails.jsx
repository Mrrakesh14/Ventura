import { useParams } from "react-router-dom";
import { ipoData } from "../data";
import Timeline from "../components/Timeline";

const IPODetails = () => {
  const { id } = useParams();
  const ipo = ipoData.find((i) => i.id === Number(id));

  return (
    <div className="container">
      <button onClick={() => window.history.back()}>← Back</button>

      <h2>{ipo.name}</h2>
      <p>{ipo.company}</p>

      <div className="details">
        <p>
          <b>Issue Size:</b> {ipo.issueSize}
        </p>
        <p>
          <b>Price Range:</b> {ipo.priceRange}
        </p>
        <p>
          <b>Min Amount:</b> {ipo.minAmount}
        </p>
        <p>
          <b>Lot Size:</b> {ipo.lots}
        </p>
      </div>

      <Timeline />

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default IPODetails;
