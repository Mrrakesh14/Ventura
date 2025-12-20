import { FaCheck } from "react-icons/fa";

const steps = [
  { title: "Bidding starts", date: "12 Dec 2023", done: true },
  { title: "Bidding ends", date: "15 Dec 2023", done: true },
  { title: "Allotment finalisation", date: "18 Dec 2023", done: true },
  { title: "Refund initiation", date: "18 Dec 2023", done: true },
  { title: "Demat transfer", date: "18 Dec 2023", done: true },
  { title: "Listing date", date: "21 Dec 2023", done: true },
];

export default function IpoTimeline() {
  return (
    <div className="bg-white  p-6  ">
      <h2 className="text-lg font-semibold mb-6">IPO timeline</h2>

      {/* ================= MOBILE (Vertical) ================= */}
      <div className="relative md:hidden">
        <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gray-200" />

        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 mb-6 relative">
            <div
              className={`z-10 w-7 h-7 flex items-center justify-center rounded-full
              ${step.done ? "bg-green-600 text-white" : "bg-gray-300"}`}
            >
              {step.done && <FaCheck size={12} />}
            </div>

            <div>
              <p className="font-medium text-gray-900">{step.title}</p>
              <p className="text-sm text-gray-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= WEB (Horizontal) ================= */}
      <div className="hidden md:block">
        <div className="relative flex items-center justify-between">
          {/* Horizontal line */}
          <div className="absolute top-[14px] left-0 w-full h-[2px] bg-green-600" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center z-10"
            >
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full
                ${step.done ? "bg-green-600 text-white" : "bg-gray-300"}`}
              >
                {step.done && <FaCheck size={12} />}
              </div>

              <p className="mt-3 text-sm font-medium text-gray-900">
                {step.title}
              </p>
              <p className="text-xs text-gray-500">{step.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
