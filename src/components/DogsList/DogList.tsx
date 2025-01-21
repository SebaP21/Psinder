import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Dog {
  _id: string;
  name: string;
  imageUrl: string;
}

const DogList: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('/api/dogs/');
        setDogs(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania psów', error);
      }
    };
    fetchDogs();
  }, []);

  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog._id}>
          <h3>{dog.name}</h3>
          <img src={dog.imageUrl} alt={dog.name} />
        </div>
      ))}
    </div>
  );
};

export default DogList;
