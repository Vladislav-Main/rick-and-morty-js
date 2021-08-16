import React from 'react';

export const WatchList = ({ item, toggleTask, removeTask }) => {
  return (
    <div key={item.id} className="card">
      <div className="card-body">
        <div
          onClick={() => toggleTask(item.id)}
          className={
            item.complete
              ? 'card text-white bg-success mb-3 mr-3'
              : 'card text-dark bg-light mb-3 mr-3'
          }
        >
          <h5 className="card-title">{item.task}</h5>
          
        </div>
        <button
          className="btn btn-outline-danger"
          onClick={() => removeTask(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
