import React from "react";

const UserProfileCard = ({
  avatar_url,
  login,
  name,
  public_repos,
  public_gists,
  created_at,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden slide-in ">
      <div className="flex items-center space-x-4 p-6">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={avatar_url}
          alt={`${name}'s avatar`}
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600">@{login}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">{public_repos}</p>
            <p className="text-sm text-gray-600">Public Repos</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">{public_gists}</p>
            <p className="text-sm text-gray-600">Public Gists</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <p className="text-sm text-gray-600">
          Profile Created At: {created_at}
        </p>
      </div>
    </div>
  );
};

export default UserProfileCard;
