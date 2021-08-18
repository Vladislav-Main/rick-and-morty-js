import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemId, setModalOpen } from '../../../redux/sort/sortSlice';

export const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" key={item.id}>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => {
          dispatch(setModalOpen());
          dispatch(setItemId(item.id));
        }}
      >
        <div className="card-body">
          <img
            src={item.image}
            className="card-img-top"
            alt={'image' + item.id}
          />
          <h5 className="card-title mt-1">{item.name}</h5>
          <h5 className="card-title">{item.status}</h5>
        </div>
      </button>
    </div>
  );
};
