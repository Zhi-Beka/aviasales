import axios from 'axios';

export const getAllTickets = async () => {
  const ApiBase = 'https://aviasales-test-api.kata.academy/';

  try {
    const response = await axios.get(`${ApiBase}search`);
    const searchId = await response.data.searchId;

    const responseTickets = await axios.get(`${ApiBase}tickets?searchId=${searchId}`);
    return responseTickets.data.tickets;
  } catch (e) {
    throw new Error('Error!');
  }
};
