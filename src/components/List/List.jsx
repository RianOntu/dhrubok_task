import React, { useEffect, useState } from 'react';
import './List.css';

const List = () => {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' });

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setDatas(d);
      });
  }, []);

  useEffect(() => {
    sortData();
  }, [datas, sortConfig]);

  const handleListClick = async () => {
    // Rest of the existing code for handling list click
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortData = () => {
    if (sortConfig.key !== null) {
      const sortedData = [...datas].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
      setDatas(sortedData);
    }
  };

  const filterData = (search) => {
    const filteredData = data.filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.email.toLowerCase().includes(search.toLowerCase()) ||
        d.gender.toLowerCase() === search.toLowerCase()
    );
    setDatas(filteredData);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  return (
    <div className="back">
      <div className="d-flex">
        <button className="me-3" onClick={handleListClick}>
          Click me to insert API data to json server
        </button>
        <input
          className="me-3"
          type="text"
          placeholder="Search by name, gender or email"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table mb-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => handleSort('name')}>
              Name
              {sortConfig.key === 'name' && sortConfig.direction === 'ascending' && <span> ▲</span>}
              {sortConfig.key === 'name' && sortConfig.direction === 'descending' && <span> ▼</span>}
            </th>
            <th scope="col" onClick={() => handleSort('email')}>
              Email
              {sortConfig.key === 'email' && sortConfig.direction === 'ascending' && <span> ▲</span>}
              {sortConfig.key === 'email' && sortConfig.direction === 'descending' && <span> ▼</span>}
            </th>
            <th scope="col" onClick={() => handleSort('phone')}>
              Phone
              {sortConfig.key === 'phone' && sortConfig.direction === 'ascending' && <span> ▲</span>}
              {sortConfig.key === 'phone' && sortConfig.direction === 'descending' && <span> ▼</span>}
            </th>
            <th scope="col" onClick={() => handleSort('gender')}>
              Gender
              {sortConfig.key === 'gender' && sortConfig.direction === 'ascending' && <span> ▲</span>}
              {sortConfig.key === 'gender' && sortConfig.direction === 'descending' && <span> ▼</span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((d, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
