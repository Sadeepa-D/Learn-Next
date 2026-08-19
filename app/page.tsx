import welcome from "../lib/welcome";
import user from "../lib/user";
import AddUserForm from "@/components/AddUserForm";
import { deleteUser } from "./actions/UserActions";

export default function Home() {
  const users = user.getAllUsers();

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {welcome("Sadeepa")}
          </h1>
          <p className="text-gray-500 mt-1">Manage your users</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Users Table */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Users</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">
                      ID
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left">
                      Name
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left">
                      Email
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-4 py-3">
                        {user.id}
                      </td>

                      <td className="border border-gray-300 px-4 py-3">
                        {user.name}
                      </td>

                      <td className="border border-gray-300 px-4 py-3">
                        {user.email}
                      </td>
                      <td>
                        <form action={deleteUser}>
                          <input type="hidden" name="id" value={user.id} />

                          <button
                            type="submit"
                            className="text-red-600 hover:text-red-800 ml-2"
                          >
                            Delete
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md">
            <AddUserForm />
          </div>
        </div>
      </div>
    </main>
  );
}
