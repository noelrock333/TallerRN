import SInfo from 'react-native-sensitive-info';

class Api {
  static headers = async function(request_path, http_method) {
    const options = {
      sharedPreferencesName: 'tallerRN',
      keychainService: 'tallerRN'
    };
    const jwt = await SInfo.getItem('jwt', options);
    console.log('jwt', jwt);
    let auth_header = 'Bearer ' + jwt;
    const json_payload = '';

    return {
      'Authorization': auth_header,
      'Content-Type': 'application/json'
    };
  };

  // Todas las llamadas pasan por aquí
  static xhr = async function(route, params, verb) {
    const host = 'https://tranquil-garden-30231.herokuapp.com';
    const url = `${host}${route}`;
    const headers = await this.headers(route, verb);
    const options = {
      method: verb,
      headers: headers,
      body: params ? JSON.stringify(params) : null
    };
    return fetch(url, options);
  };

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }
}

export default Api;
