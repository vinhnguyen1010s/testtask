import React from 'react';
import { LoadingSpinner } from '../Loading/LoadingSpinner';

export const ClientItems = (props) => {
  const { clients, isLoading } = props;
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row">
          {clients.length > 0 ? (
            <div className="item-todos">
              <ul className="list-group list-item-clients">
                {clients.map((client, index) => (
                  <li className="client-item" key={index}>
                    {client.name} - {client.age}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="my-3 p-0 d-flex justify-content-center">
              <h4>No data</h4>
            </div>
          )}
        </div>
      )}
    </>
  );
};
