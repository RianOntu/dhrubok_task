import React, { useEffect, useState } from 'react';
import './List.css';

const List = () => {
  const [listClicked, setListClicked] = useState(false);
  const [data,setData]=useState([]);
let i=1;
  const handleListClick = async () => {
    setListClicked(true); // Set listClicked to true after clicking the list

    try {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const data = await response.json();

      // Extracting required fields and creating objects
      const userData = data.results.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        gender: user.gender,
        phone: user.phone,
      }));

      // Save the updated data to the JSON file
      await saveDataToJSON(userData);

      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error fetching and saving data:', error);
    }
  };

  const saveDataToJSON = async (data) => {
    try {
      for (const item of data) {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        });

        if (!response.ok) {
          console.error('Error saving data:', response.statusText);
        }
      }

      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(()=>{
    fetch('http://localhost:3000/users').then(res=>res.json()).then(data=>setData(data))
  },[])

  return (
    <div className='back'>
      <div className="d-flex">
      <button className='me-3' onClick={handleListClick}>Click me to insert API data to json server</button>
      <input className='me-3' type="text" placeholder='search by name,gender or email'/>
      <input type="text" placeholder={`See 1 to ${data.length} items`} />
      </div>
      <table class="table mb-5">
  <thead>
   
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    {data.map(d=>(
 <tr>
    <td>{i++}</td>
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
