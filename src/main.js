import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch (error) {
      console.warn('Usuário não encontrado');
    }
  }
}

Api.getUserInfo('jorginhodev');
Api.getUserInfo('jorginhodevi');