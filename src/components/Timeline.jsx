const Timeline = () => {
  const steps = [
    "Bidding Starts",
    "Bidding Ends",
    "Allotment Finalisation",
    "Refund Initiation",
    "Demat Transfer",
    "Listing Date",
  ];

  return (
    <div className="timeline">
      <h3>IPO Timeline</h3>
      {steps.map((step, index) => (
        <div key={index} className="timeline-item">
          ✔ {step}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
