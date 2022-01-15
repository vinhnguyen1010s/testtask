import { createContext, useReducer } from 'react';
import { ADD_CLIENT, GET_CLIENTS } from '../reducers/action-types';
import { clientReducer } from '../reducers/clientReducer';
import ClientService from '../services/Client.service';

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clients, dispatch] = useReducer(clientReducer, []);

  const getClients = () => {
    return ClientService.fetchClients().then((res) => {
      dispatch({
        type: GET_CLIENTS,
        payload: res.data,
      });
      return res.data;
    });
  };

  const createClient = (client) => {
    return ClientService.addClient(client).then((res) => {
      dispatch({
        type: ADD_CLIENT,
        payload: res.data,
      });
      return res;
    });
  };

  const dataClients = {
    clients,
    getClients,
    createClient,
    dispatch,
  };

  return <ClientContext.Provider value={dataClients}>{children}</ClientContext.Provider>;
};
