import React, {useState} from "react";

export const AddCandidates = ({ name, email, number, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value, evt.target.number.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <div class="w-full"></div>
          <input class="text-blue-800 outline-none w-60 placeholder-blue-800 text-blue-800" placeholder="Name" name="name" defaultValue={name} />
          <input class="text-blue-800 outline-none w-60 placeholder-blue-800 text-blue-800" placeholder="Email" name="email" defaultValue={email}/>
          <input class="text-blue-800 outline-none w-60 placeholder-blue-800 text-blue-800" placeholder="Number" name="number" defaultValue={number} />
          <button onSubmit={handleOnEditSubmit}><i class="bi bi-check-square-fill text-blue-800 text-3xl cursor-pointer"></i></button>
        </form>
      ) : (
        <div className="d-flex">
        <div className="text-blue-800 w-full text-left p-3 text-lg">
          <span className="user-name text-blue-800">{name}</span>
          <span className="user-email ml-5 text-blue-800">{email}</span>
          <span className="user-number ml-5 text-blue-800">{number}</span>
          </div>
          <div className="text-blue-800 w-full">
            <button onClick={handleEdit}><i class="bi bi-pencil-square text-3xl"></i></button>
            <button onClick={handleDelete}><i class="bi bi-person-x-fill text-red-800 text-3xl ml-5"></i></button>
          </div>

        </div>
      )}
    </div>
  );
};
export default AddCandidates;