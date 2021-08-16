import React from 'react';

export const Spinner = () => {
  return (
    <div class="text-center text-success">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
