import React from 'react';

export const TableItem = ({ item }) => {
  
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.air_date}</td>
        <td>{item.episode}</td>
      </tr>
    </>
  );
};
