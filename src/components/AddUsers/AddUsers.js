import React from "react";
import candidatesRepository from "../../storage/CandidatesRepository";
import Header from "../Header/Header";
export const AddUsers = () => {
  const handleOnSubmit = (evt) => {
      evt.preventDefault();
      candidatesRepository.save({
          name: evt.target.name.value,
          email: evt.target.email.value,
          number: evt.target.number.value,
          country: evt.target.country.value,
          city: evt.target.city.value,
      }).then(() => {})
  };

  return (
    <div className="flex justify-between">
       <div class="">
    
   </div>
    <div class="w-full mx-10">
    <h3 class="text-blue-800 text-3xl">Create Candidate <i class="bi bi-person-fill"></i></h3>
    <form onSubmit={handleOnSubmit}>
       
      
      <div className="w-80 mx-auto border-2 border-blue-800 rounded-xl py-5">
      <input class="w-60 h-10 p-2 placeholder-blue-800 outline-none border-2 border-blue-800 rounded-lg mt-2 text-blue-800" placeholder="Name" name="name" />
      <br/>
      <input class="w-60 h-10 p-2 placeholder-blue-800 outline-none border-2 border-blue-800 rounded-lg mt-2 text-blue-800" placeholder="Email" name="email" />
      <br/>
      <input class="w-60 h-10 p-2 placeholder-blue-800 outline-none border-2 border-blue-800 rounded-lg mt-2 text-blue-800" placeholder="Number" name="number" />
      <br/>
      <select id="country" name="country" className="w-60 h-10 text-blue-800 bg-white border-blue-800 border-2 mt-2 outline-none rounded-xl">
    <option>Country</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">U.S. Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Vietnam</option>
    <option value="VG">British Virgin Islands</option>
    <option value="VI">U.S. Virgin Islands</option>
    <option value="Wallis & Futuna">Wallis & Futuna</option>
    <option value="Western Sahara">Western Sahara</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
</select>
<br/>
<input class="w-60 h-10 p-2 placeholder-blue-800 outline-none border-2 border-blue-800 rounded-lg mt-2 text-blue-800" placeholder="City" name="city" />
      <br/>
      </div>
      <button class="mt-3" onSubmit={handleOnSubmit}><i class="bi bi-plus-circle-fill text-blue-800 text-3xl"></i></button>
      
    </form>
    </div>
    </div>
  );
};

export default AddUsers;