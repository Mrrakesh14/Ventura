import { Link, useParams } from "react-router-dom";
import { ipos } from "./ipo";
import { FaLessThan } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import IpoTimeline from "../components/Timeline";

const IPODetails = () => {
  const { id } = useParams();
  const ipo = ipos.find((i) => i.id === id);

  if (!ipo) return <p>IPO not found</p>;
  return (
    <div className="w-full max-w-4xl mx-auto my-10  font-sora">
      <div className="">
        <div className=" flex justify-between w-full p-4  ">
          <div className=" hidden sm:flex justify-center size-10 p-3 border border-gray-400 rounded-xl">
            <Link to="/" className="back">
              <FaLessThan />
            </Link>
          </div>
          <div className=" w-full max-w-2xl flex justify-between  align-middle">
            <div className=" flex  ">
              <div className=" mx-2">
                <img
                  src={ipo.logo}
                  alt={ipo.name}
                  className="size-14 sm:size-12 object-cover  rounded-full"
                />
              </div>
              <div className=" flex flex-col my-auto">
                <div className=" font-semibold">{ipo.name}</div>
                <div className=" text-[12px] text-neutral-500">{ipo.desc}</div>
              </div>
            </div>
            <div className="hidden sm:flex justify-center my-auto">
              <CiFileOn className=" size-8" />
            </div>
          </div>
          <div className=" hidden sm:flex ">
            <button className=" px-8 border border-neutral-400 bg-neutral-950 text-white rounded-xl text-[12px]">
              Apply now
            </button>
          </div>
        </div>

        <div className=" w-full border border-gray-400 rounded-xl  p-5">
          <div className="m-2">
            <h2 className=" font-semibold">IPO details</h2>
          </div>
          <div className=" top-2 w-full max-w-300 mx-auto border border-gray-400 rounded-xl  ">
            {/*  1ST ROW  */}
            <div className=" sm:flex justify-between mx-4 py-2 hidden">
              <div>
                <label className=" text-[12px] text-gray-500">Issue Size</label>
                <p className=" text-[13px] font-semibold">{ipo.issueSize}</p>
              </div>
              <div>
                <label className=" text-[12px] text-gray-500">
                  Price Range
                </label>
                <p className=" text-[13px] font-semibold">{ipo.priceRange}</p>
              </div>
              <div>
                <label className=" text-[12px] text-gray-500">
                  Minimum Amount
                </label>
                <p className=" text-[13px] font-semibold">{ipo.minInvest}</p>
              </div>
              <div>
                <label className=" text-[12px] text-gray-500">Lot Size</label>
                <p className=" text-[13px] font-semibold">{ipo.lotSize}</p>
              </div>
            </div>
            {/*  1ST ROW  */}
            <div className=" sm:flex justify-between mx-4 py-2 hidden">
              <div className="">
                <label className=" text-neutral-500 text-[12px]">
                  Issue dates
                </label>
                <p className=" text-[13px] font-semibold ">{ipo.issueDt}</p>
              </div>
              <div className="">
                <label className=" text-neutral-500 text-[12px]">
                  Listed On
                </label>
                <p className=" text-[13px] font-semibold">{ipo.listedOn}</p>
              </div>
              <div>
                <label className=" text-neutral-500 text-[12px]">
                  Listed Price{" "}
                </label>
                <p className=" text-[13px] font-semibold">{ipo.listedPrice}</p>
              </div>
              <div>
                <label className=" text-neutral-500 text-[12px]">
                  Listing Gains
                </label>
                <p className=" text-[13px] font-semibold">
                  {ipo.listingGain}{" "}
                  <span className=" text-rose-500">(10%)</span>{" "}
                </p>
              </div>
            </div>
            {/* Mobile View */}
            <div className=" flex justify-between mx-4 p-2 sm:hidden">
              <div>
                <label className=" text-[12px] text-gray-500">Issue Size</label>
                <p className=" text-[13px] font-semibold">{ipo.issueSize}</p>
              </div>
              <div>
                <label className=" text-[12px] text-gray-500">
                  Price Range
                </label>
                <p className=" text-[13px] font-semibold">{ipo.priceRange}</p>
              </div>
            </div>
            <div className=" flex justify-between mx-4 py-2 sm:hidden">
              <div>
                <label className=" text-[12px] text-gray-500">
                  Minimum Amount
                </label>
                <p className=" text-[13px] font-semibold">{ipo.minInvest}</p>
              </div>
              <div>
                <label className=" text-[12px] text-gray-500">
                  Minimum Quantity
                </label>
                <p className=" text-[13px] font-semibold">150 Shares</p>
              </div>
            </div>
            <div className=" flex justify-start mx-4 py-2 sm:hidden">
              <div>
                <label className=" text-[12px] text-gray-500">
                  Issue Dates
                </label>
                <p className=" text-[13px] font-semibold">{ipo.issueDt}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full border border-gray-400 rounded-xl   p-5 my-6">
          <IpoTimeline />
        </div>
        <div className=" w-full border border-gray-400 rounded-xl   p-5 my-6">
          <div className="m-2">
            <h2 className=" font-semibold">About the Company</h2>
          </div>

          <div>
            <p className=" text-[12px] text-neutral-500 my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              culpa ratione vero quasi recusandae dicta natus fugiat maiores
              cumque unde quidem assumenda excepturi nulla in eligendi, illum
              aliquam deserunt delectus placeat molestias doloremque laborum!
              Praesentium, laudantium. Quisquam aperiam voluptates aut tenetur?
              Ex voluptas dolorum voluptatum omnis fugiat. Cumque illum
              recusandae sed alias, nostrum atque soluta dolorem ea qui minima
              iste, debitis libero quas, rem at praesentium commodi. Qui,
              ratione maxime.
            </p>
            <p className=" text-[12px] text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis quos nulla nisi, aperiam totam eaque dolore
              accusantium amet fuga ipsam labore, cupiditate modi tempora omnis,
              delectus vero aliquam quae doloremque veritatis id ab ipsa!
              Architecto dolorem corporis quaerat fuga distinctio vitae,
              mollitia est nemo id itaque ullam optio rem laboriosam. Ratione
              odit vitae laudantium tenetur numquam ipsam recusandae tempora
              aliquid, sunt quo nesciunt nostrum sequi vel quas a? Atque aut hic
              mollitia dolor et corrupti nobis consequatur, vitae eos
              reprehenderit ullam a minima magnam aliquid quae? Obcaecati est,
              mollitia nulla facilis, suscipit deserunt porro, voluptatibus
              dignissimos officia deleniti totam blanditiis commodi assumenda
              voluptatum consequuntur natus vero aliquam nostrum? Ratione, quia.
              Velit consequuntur error iure nemo illum deleniti fuga. Sunt,
              nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPODetails;
