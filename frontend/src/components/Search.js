import React, { useState } from 'react';

const Search = ({ hospitals, setHospitals }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredHospitals = hospitals.filter((hospital) => 
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setHospitals(filteredHospitals);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search hospitals by name or specialty"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
