import { ipoData } from "../data";
import IPOCard from "../components/IPOCard";

const IPOList = () => {
  return (
    <div className="container">
      <h2>IPO List</h2>
      {ipoData.map((ipo) => (
        <IPOCard key={ipo.id} ipo={ipo} />
      ))}
    </div>
  );
};

export default IPOList;
