import React from 'react';
import { TableItem } from './TableItem';

export const Table = ({ data }) => {
  return (
    <>
      <div className="card table-body">
        <div className="card-body"></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Air Date</th>
              <th scope="col">Episode</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <TableItem item={item} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
