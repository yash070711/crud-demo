import React, { useState ,useEffect } from 'react';
import DataTable from './DataTable';




function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://reqres.in/api/users?page=1&per_page=10', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data.data)
        // Handle the data here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });
    
  },[])
  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
    fetch(`https://reqres.in/api/users/${id}`, {
  method: 'DELETE',
  headers: {
    'accept': '*/*'
  }
})
  .then(response => {
      console.log('User deleted successfully');
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors here
  });
  };
  return (
    <div className="App">
    <DataTable data={data} onDelete= {handleDelete}/>
    </div>
  );
}

export default App;
