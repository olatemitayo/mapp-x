import React from "react";
import Globalchart from "./line-chart/globalchart";
import GlobalBarChart from "./bar-chart/global-bar-chart";

export default function Graph() {
  return (
    <div className="flex justify-between mt-5">
      <div className="sm:w-[90%]  md:w-[49.5%] min-h-[345px] border-[1px] bg-white rounded-[20px] p-2">
        <div>
          <div>
            <h1>12.4k</h1>
            <p>
              Total mapped <span></span>
            </p>
          </div>
        </div>
        {/* <Globalchart /> */}
      </div>
      <div className="sm:w-[90%]  md:w-[49.5%] min-h-[345px] border-[1px] bg-white rounded-[20px] p-2">
        <GlobalBarChart />
      </div>
    </div>
  );
}
