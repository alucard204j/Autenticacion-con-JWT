import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class SessionController {
  static async login(username, password) {
    const response = await axios.post(generateBackendURL('/auth/signin'), {
      username,
      password,
    });
    TokenService.setUser(response.data);
  }

  static async getToken() {
    const refreshToken = TokenService.getLocalRefreshToken();
    const token = await axios.post(generateBackendURL('/auth/refreshtoken'), { refreshToken });
    TokenService.setUser(token);
  }

  static async autenticado() {
    const token = TokenService.getToken();
    const user = await axios.post(generateBackendURL('/test/user'), { token });
    return user;
  }

  static async register(username, password, mail) {
    await axios.post(generateBackendURL('/auth/signup'), {
      username,
      password,
      mail,
    });
  }
}

export default SessionController;
