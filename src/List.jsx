import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function List() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const addCategory = (index) => {
    searchParams.append('category', index);
    setSearchParams(searchParams);
  };

  const deleteQuery = () => {
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const sort = searchParams.get('sort');

  return (
    <div className="App">
      <h1>This is List Page</h1>
      <p>sort : {sort}</p>
      <p>category : {searchParams.getAll('category')}</p>
      {arr.map((item, index) => (
        <div key={index}>
          <button onClick={() => addCategory(item)}>{item}</button>
        </div>
      ))}
      <div>
        <button onClick={deleteQuery}>delete query</button>
        <button onClick={() => navigate('/')}>Main</button>
      </div>
    </div>
  );
}

export default List;

const arr = [1, 2, 3, 4];
