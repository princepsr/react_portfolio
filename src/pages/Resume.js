import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-la mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_lg">B.Tech CSE</code>
            <br />
            <code className="italic text-la text-lightblue_vs">
              Lovely Professional University
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • July 2020 - June 2024
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-la">
              <br />• Well versed with the concepts of OOPs.
              <br />• Knowledge of C/C++ programming language and data
              structures.
              <br />• Knowledgeof HTML, CSS, JavaScript and frameworks like Bootstrap, Tailwind.
              <br />• Experince in working PostgreSQL Database.
              <br />• Major in Full Stack Web Development.
              <br />• Diploma in Data Science.
              <br />• Experince in MERN Stack Web development.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
