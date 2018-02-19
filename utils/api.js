import SInfo from 'react-native-sensitive-info';

class Api {
  static headers = async function(contentType) {
    const options = {
      sharedPreferencesName: 'tallerRN',
      keychainService: 'tallerRN'
    };
    const jwt = await SInfo.getItem('jwt', options);
    // console.log('jwt', jwt);
    let auth_header = 'Bearer ' + jwt;
    const json_payload = '';

    return {
      'Authorization': auth_header,
      'Content-Type': contentType || 'application/json',
    };
  };

  // Todas las llamadas pasan por aquí
  static xhr = async function(route, params, verb) {
    const host = 'https://tranquil-garden-30231.herokuapp.com';
    const url = `${host}${route}`;
    const headers = await this.headers();
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

  static postImage = async function(params) {
    // const data = new FormData();
    // data.append('post', {
    //   title: params.title,
    //   photo: {
    //     uri: params.photo.uri,
    //     type: 'image/jpeg', // or photo.type
    //     name: params.photo.fileName
    //   }
    // })
    // const data = new FormData();
    // data.append('image', {
    //   uri:   this.props.navigation.state.params.data.path,
    //   type: 'image/jpg',
    //   name: 'testPhotoName'
    // });
    // const data = {
    //   post: {
    //     title: params.title,
    //     photo: {
    //       uri: 'data:image/jpeg;base64,' + params.photo.data,
    //       type: 'image/jpeg', // or photo.type
    //       name: params.photo.fileName
    //     }
    //   }
    // }
    var data = new FormData();
    data.append('post[title]', params.title); // you can append anyone.
    data.append('post[photo]', {
      uri: 'data:image/jpeg;base64,' + params.photo.data,
      type: 'image/jpeg', // or photo.type
      name: params.photo.fileName
    });
    console.log('formData', data);
    // return this.xhr('/posts', data, 'POST');
    const url = 'https://tranquil-garden-30231.herokuapp.com/posts';
    const headers = await this.headers('multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__\'');
    const options = {
      method: 'POST',
      headers: headers,
      body: data
    };
    return fetch(url, options);
  }
}

export default Api;
