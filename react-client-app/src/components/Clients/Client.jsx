import React, { useContext, useEffect, useState } from 'react';
import { Button, Divider } from '@material-ui/core';
import { ClientContext } from '../../contexts/ClientContext';
import { LoadingSpinner } from '../Loading/LoadingSpinner';
import './Client.scss';
import { ToastifyContext } from '../../contexts/ToastifyContext';

import { ClientItems } from './ClientItems';
import { ClientForm } from './ClientForm';

const Client = () => {
  const initialInputState = {
    name: '',
    age: 1,
  };

  const [inputClient, setInputClient] = useState(initialInputState);

  const { clients, getClients, createClient } = useContext(ClientContext);

  const [isLoading, setIsLoading] = useState(false);
  const { messageNotify } = useContext(ToastifyContext);

  // handle input todo form add
  const handleChangeInput = (e) => {
    e.persist();
    const { name, value } = e.target;

    setInputClient({
      ...inputClient,
      [name]: value,
    });
  };

  // hanlde submit data form
  const handleSubmitClient = (e) => {
    // e.preventDefault();
    if (!initialInputState) return;

    setIsLoading(true);
    createClient(inputClient)
      .then((res) => {
        setInputClient(initialInputState);
        messageNotify('created success', res.statusText);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  };

  const fetchClientsData = () => {
    setIsLoading(true);

    getClients()
      .then((res) => {
        if (res && res.length > 0) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    fetchClientsData();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <div className="row mx-5">
        <h5 className="my-2">App Client</h5>
        <Divider />
        <ClientForm
          inputClient={inputClient}
          onChangeInput={handleChangeInput}
          onSubmitSave={handleSubmitClient}
        />

        <div className="my-4">
          <h6>List Clients</h6>
          <Divider />
          <ClientItems clients={clients} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default Client;
