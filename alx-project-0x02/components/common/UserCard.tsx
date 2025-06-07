import { UserProps } from '@/interfaces';

const UserCard = ({ name, email, address,id }: UserProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-blue-500">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{email}</p>
      <p className="text-sm text-gray-500">User address {address}</p>
      <p>{id}</p>
    </div>
  );
};

export default UserCard;