

import { useState } from "react";


const AdvancedFilters = ({ filters, onApply, onReset }) => {
  const [selectedOption1, setSelectedOption1] = useState("");
const [selectedOption2, setSelectedOption2] = useState("");
const options1 = ["Option 1", "Option 2", "Option 3"];
const options2 = ["Option A", "Option B", "Option C"];
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden  sm:inline-block sm:align-middle sm:h-screen "></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-blue-800 px-4 py-3">
            <h3 className="text-lg leading-6 font-medium text-blue-300">
              Advanced filters
            </h3>
          </div>
          <div class="h-64 overflow-y-auto scrollbar-track-blue-800">
  

          <div className="px-4 py-5 sm:p-6">
              <div className="mb-4" >
                <label
                  className="block text-gray-700 font-bold mb-2"
                >
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div><h1 className="text-3xl font-bold text-left">Status</h1>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Connected</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Pending</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Unknown</span>
                  </label>
                </div>
              </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-left">Tags</h1>
                <div className="flex justify-center items-center">
      <div className="mx-4">
        <label htmlFor="select1" className="block font-medium mb-2">
          Select Option 1
        </label>
        <div className="relative">
          <select
            id="select1"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
          >
            <option value="">Select an option</option>
            {options1.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.18l7.59-7.59L18 7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mx-4">
        <label htmlFor="select2" className="block font-medium mb-2">
          Select Option 2
        </label>
        <div className="relative">
          <select
            id="select2"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
          >
            <option value="">Select an option</option>
            {options2.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.18l7.59-7.59L18 7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div><h1 className="text-3xl font-bold text-left mt-2">Status</h1>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Connected</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Pending</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Unknown</span>
                  </label>
                </div>
              </div>
              </div>

              <div><h1 className="text-3xl font-bold text-left">Status</h1>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Connected</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Pending</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Unknown</span>
                  </label>
                </div>
              </div>
              </div>
</div>
              </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-800 text-xl w-40 h-10 font-medium text-blue-300 hover:bg-blue-00 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Apply
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xl w-40 h-10 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Reset all filters 
</button>
</div>
</div>
</div>
</div>
);
}

export default AdvancedFilters;

