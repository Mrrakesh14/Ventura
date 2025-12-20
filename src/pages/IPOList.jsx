import { ipos } from "./ipo";
import { Link } from "react-router-dom";
const IPOList = () => {
  return (
    <section className=" h-100vh w-full max-w-5xl mx-auto my-10  border border-gray-400 rounded-md  font-sora">
      <div className=" ">
        <div className="  text-neutral-500  text-[12px] border-b border-neutral-400 bg-gray-100 h-full">
          <div className="flex justify-between mx-12 p-4">
            <span>Company / Issue date</span>
            <span>Issue size</span>
            <span>Price range</span>
            <span>Min invest/qty</span>
          </div>
        </div>
        <div className=" w-full max-w-5xl ">
          {ipos.map((ipo) => (
            <Link to={`/ipo/${ipo.id}`} key={ipo.id}>
              <div className=" w-full border-b border-neutral-200 ">
                <div className="mx-1 my-3 flex  text-[14px] ">
                  <div className="w-full flex align-middle  ">
                    <div className="m-1">
                      <img
                        src={ipo.logo}
                        alt={ipo.name}
                        className=" h-10 w-10 border border-neutral-500 rounded-full"
                      />
                    </div>
                    <div className="m-1">
                      <p className=" text-neutral-700 text-base font-semibold">
                        {ipo.name}
                      </p>
                      <p className=" text-neutral-500 text-[11px]">
                        {ipo.issueDate}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex align-middle my-auto justify-center font-semibold ">
                    <span>{ipo.issueSize}</span>
                  </div>
                  <div className="w-full flex my-auto align-middle justify-center font-semibold ">
                    <span>{ipo.priceRange}</span>
                  </div>
                  <div className="w-full flex flex-col my-auto  ">
                    <span className=" flex justify-center font-semibold">
                      {ipo.minInvest}
                    </span>
                    <span className=" text-[10px] text-gray-500 flex justify-center">
                      {" "}
                      {ipo.lotSize}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IPOList;
