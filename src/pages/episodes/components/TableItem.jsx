import React from 'react';

export const TableItem = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.air_date}</td>
        <td>{item.episode}</td>
      </tr>
    </>
  );
};
