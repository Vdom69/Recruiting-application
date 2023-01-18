import React from "react";

export const AddUsers = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value, evt.target.number.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
    evt.target.number.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3 class="text-blue-800 text-3xl">Create Candidat <i class="bi bi-person-fill"></i></h3>
      <div className="w-80 mx-auto border-2 border-blue-800 rounded-xl py-5">
      <input class="w-60 h-10 p-2 placeholder-blue-800 outline-none border-2 border-blue-800 rounded-xl mt-2 text-blue-800"placeholder="Name" name="name" />
      <br/>
      <input class="w-60 h-10 p-2 placeholder-blue-800 outline-none border-2 border-blue-800 rounded-xl mt-2 text-blue-800"placeholder="Email" name="email" />
      <br/>
      <input class="w-60 h-10 p-2 placeholder-blue-800 outline-none border-2 border-blue-800 rounded-xl mt-2 text-blue-800"placeholder="Number" name="number" />
      <br/>
      <button class="mt-3"onSubmit={handleOnSubmit}><i class="bi bi-plus-circle-fill text-blue-800 text-3xl"></i></button>
      </div>
      <div class="border-blue-800 border-b-2 py-3"></div>
    </form>
  );
};

export default AddUsers;