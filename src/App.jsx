import { useState } from "react";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const [warning, setWarning] = useState(false);

  const fetchDetails = async () => {
    if (user.trim() === "") {
      setWarning(true);
      return;
    }
    try {
      setWarning(false);
      const response = await fetch(`https://api.github.com/users/${user}`);
      const res = await response.json();
      if (res.status == "404") {
        setWarning(true);
        return;
      }
      setUserData(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setUser(e.target.value);
    setUserData({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
      <h1 className="text-xl text-gray-400 font-bold m-8">
        GET USER GITHUB DETAILS
      </h1>
      <div className="mb-7 flex flex-col items-center">
        <input
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Enter User Name"
          onChange={handleChange}
          value={user}
          required
        />
        {warning && <span className="text-red-500">Enter a Valid Name</span>}
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 m-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={fetchDetails}
        >
          Get Details
        </button>
      </div>
      {Object.values(userData).length > 0 && <UserProfileCard {...userData} />}
    </div>
  );
}

export default App;
