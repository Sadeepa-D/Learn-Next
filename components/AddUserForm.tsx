import React from "react";
import { addUser } from "@/app/actions/UserActions";
const AddUserForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add User
      </h2>

      <form className="space-y-4" action={addUser}>
        <div>
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ID
          </label>

          <input
            type="number"
            id="id"
            name="id"
            placeholder="Enter user ID"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter user name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-200"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
