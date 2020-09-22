import {post} from 'controllers/ClientServer/baseApi';

export default class ClientServer {
  static login = ({username, password}) => {
    const url =
      'https://dfljauq3a1.execute-api.ap-southeast-1.amazonaws.com/default/DeveloperTest_Login';
    const headers = {};
    const data = {username, password};

    return post({url, data, headers});
  };

  static createBooking = (data) => {
    const url =
      'https://d0irjg216a.execute-api.ap-southeast-1.amazonaws.com/default/DeveloperTest_CreateBooking';
    const headers = {};

    return post({url, data, headers});
  };

  static getBookings = ({username}) => {
    const url =
      'https://u7b754tqv4.execute-api.ap-southeast-1.amazonaws.com/default/DeveloperTest_GetBookings';
    const headers = {};
    const data = {user: username};

    return post({url, data, headers});
  };
}
