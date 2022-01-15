import axiosClient from '../helps/http-common';

const URI = `clients`;
class ClientService {
  fetchClients = () => {
    return axiosClient.get(URI);
  };

  addClient = (body) => {
    return axiosClient.post(URI, body);
  };
}
export default new ClientService();
