import { useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [ptoDays, setPtoDays] = useState("");
  return (
    <>
      <h1 className="text-4xl text-center my-8 ">PTO Optimizer</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
        <div className="w-1/2 flex items-center justify-center flex-col">
          <div>
            <label htmlFor="numOfPTODays" className="mr-2">
              Number of PTO Days
            </label>
            <input
              type="number"
              id="numOfPTODays"
              className="border border-gray-700"
              onChange={(e) => setPtoDays(e.target.value)}
            />
          </div>
          {ptoDays && <div className="text-center my-4">{ptoDays} days</div>}
        </div>
        <div className="w-1/2">
          <div>
            <input type="checkbox" name="newYearsDay" id="newYearsDay" />
            <label htmlFor="newYearsDay">New Years Day</label>
          </div>
          <div>
            <input type="checkbox" name="newYearsDay" id="newYearsDay" />
            <label htmlFor="newYearsDay">New Years Day</label>
          </div>
        </div>
      </div>
    </>
  );
}
