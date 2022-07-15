import React, { useState, useEffect } from "react";
import { CONSTANTS } from "../../store";
import axios from "axios";
import * as _ from "lodash";
const BasicCollapse = () => {
  const { apiUrl, faqsEndPoint } = CONSTANTS;
  const [CollapseData, setCollapseData] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl + faqsEndPoint)
      .then(function (response) {
        const { data } = response;
        const faqs = data.map((item) => {
          return {
            question: item.title,
            index: item.index,
            answer: item.description,
          };
        });
        setCollapseData(_.sortBy(faqs, ["index"]));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [apiUrl, faqsEndPoint]);
  return (
    <div id="accordion" className="collapse-b">
      {CollapseData.map((val, ind) => {
        return (
          <div className="card-accordian" key={ind}>
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <div
                  className="global-font-family global-text btn-link accor-text"
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
