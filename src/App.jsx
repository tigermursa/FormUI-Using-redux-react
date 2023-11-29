// App.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormData } from "./redux/features/Actions/fromDataAction";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fromData.formData);

  useEffect(() => {
    dispatch(fetchFormData());
  }, [dispatch]);

  const handleUpdate = (userId) => {
    // Implement update logic here
    console.log(`Update user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    // Implement delete logic here
    console.log(`Delete user with ID: ${userId}`);
  };

  return (
    <div className="container mx-auto mt-10">
      <table className="min-w-full bg-white ">
        <thead className="border ">
          <tr className="">
            <th className="py-2 px-4 border-e ">Name</th>
            <th className="py-2 px-4  border-e">Email</th>
            <th className="py-2 px-4 border-e ">Gender</th>
            <th className="py-2 px-4 border-e ">Father Name</th>
            <th className="py-2 px-4 border-e ">Mother Name</th>
            <th className="py-2 px-4 border-e ">Other Guardian</th>
            <th className="py-2 px-4  border-e">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, email, fullName, gender, guardian }) => (
            <React.Fragment key={id}>
              <tr className=" border-s border-e border-t">
                <td className="py-2 px-4 text-sm border-e">{fullName}</td>
                <td className="py-2 px-4 text-sm border-e ">{email}</td>
                <td className="py-2 px-4 text-sm border-e">{gender}</td>
                <td className="py-2 px-4 text-sm border-e">{guardian.fatherName}</td>
                <td className="py-2 px-4 text-sm border-e">{guardian.motherName}</td>
                <td className="py-2 px-4 text-sm border-e">{guardian.others}</td>
                <td className="py-2 px-4 ">
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                    onClick={() => handleUpdate(id)}
                  >
                    <BsPencilSquare />
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => handleDelete(id)}
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <hr className="-t my-1" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
