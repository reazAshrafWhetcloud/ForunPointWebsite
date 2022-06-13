const BasicCollapse = () => {
  const CollapseData = [
    {
      question: "How can I register?",
      answer: "Download forunpoint app",
      id: "",
    },
    {
      question: "Are there registration fees?",
      answer: "Yes, driver and user both can register free",
      id: "",
    },
    {
      question: "How quickly driver can get the service request?",
      answer:
        "Once driver uploaded all documentation admin will notify you and your status becomes active from pending",
      id: "",
    },
    {
      question: "What platforms are supported?",
      answer: "We support both iOS and Android platform",
      id: "",
    },
    {
      question: "How do I change my password (client and driver apps)?",
      answer: "Yes in your profile of the app",
      id: "",
    },
    {
      question: "How do drivers get paid?",
      answer: "Once account setup they can receive amount automatically",
      id: "",
    },
    {
      question: "How does the client know the delivery status?",
      answer: "User will notified status via app",
      id: "",
    },
    {
      question: "How can I get help?",
      answer:
        "It’s simple just select driver and update in description what to pick. User will update merchant address to pick the item",
      id: "",
    },
    {
      question: "What if I have an issue with my delivery?",
      answer: "Please send us email info@forunpoint.com",
      id: "",
    },
    {
      question: "Can I send flowers to someone in a different state?",
      answer: "Contact your merchant directly",
      id: "",
    },
    {
      question: "Can I send flowers to my mother who is in different state?",
      answer:
        "Absolutely Forunpoint deliver all over USA. However, it may possible that delivery person not available in that location.",
      id: "",
    },
  ];
  return (
    <div id="accordion" className="collapse-b">
      {CollapseData.map((val, ind) => {
        return (
          <div className="card" key={ind}>
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <div
                  className="global-font-family global-text btn-link "
                  data-toggle="collapse"
                  data-target={`#${ind}`}
                  aria-expanded="false"
                  aria-controls={`${ind}`}
                >
                  Q{ind + 1}. {val.question}
                </div>
              </h5>
            </div>
            <div
              id={`${ind}`}
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body global-font-family global-text">
                {val.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasicCollapse;
