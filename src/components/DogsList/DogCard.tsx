import React from "react";

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  description: string;
  location: {
    coordinates: [number, number];
  };
  images: string[];
}

interface DogCardProps {
  dog: Dog;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  return (
    <div className="relative w-80 h-96 bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={dog.images[0]}
        alt={dog.name}
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{dog.name}, {dog.age} lat</h2>
        <p className="text-sm text-gray-600">{dog.breed}</p>
        <p className="text-gray-700 mt-2">{dog.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          Lokalizacja: {dog.location.coordinates.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default DogCard;
