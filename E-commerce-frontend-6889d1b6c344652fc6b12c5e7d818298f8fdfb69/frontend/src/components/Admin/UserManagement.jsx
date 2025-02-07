import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: "12345",
      name: "John Doe",
      email: "FtDZK@example.com",
      role: "Admin"
    },
    {
      _id: "13325",
      name: "Jane Doe",
      email: "M9K8X@example.com",
      role: "User"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer" //default
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered: ", formData);
    //Reset the form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer"
    });
  };

  const handleRoleChange = (userId, newRole) => {
    console.log("User role updated: ", userId, newRole);
  };
    
    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
         console.log("User deleted: ", userId);
        }
    };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 ">User Management</h2>
      {/* Add new user */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              className=" p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="name"
              value={formData.email}
              required
              onChange={handleChange}
              className=" p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="name"
              value={formData.password}
              required
              onChange={handleChange}
              className=" p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              required
              onChange={handleChange}
              className=" p-2 w-full border rounded-md"
            >
              <option value="customer" className="">
                Customer
              </option>
              <option value="admin" className="">
                Admin
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 py-2 px-4 text-white rounded hover:bg-green-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User list */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-2-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr className="">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 border-b">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select
                    name=""
                    className="P-2 border rounded"
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    value={user.role}
                  >
                    <option value="customer" className="">
                      Customer
                    </option>
                    <option value="admin" className="">
                      Admin
                    </option>
                  </select>
                </td>
                    <td className="p-4 ">
                        <button onClick={() => handleDeleteUser(user._id)} className="bg-red-500 py-2 px-4 text-white rounded hover:bg-red-600">
                            Delete
                        </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
