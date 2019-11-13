export default class twitapiService {
    _basicUrl = 'http://localhost:3001/';
    async getDatas(url) {
      const responce = await fetch(url);
  
      if (!responce.ok) {
        throw new Error(`${url} is not avaliable now, 
          responce status: ${responce.status};
          }`)
      }
      return await responce.json();
    }
  
    getPosts () {
      return this.getDatas(`${this._basicUrl}posts`);
    }
  
    getComments () {
      return this.getDatas(`${this._basicUrl}comments`);
    }
  
    getProfile () {
      return this.getDatas(`${this._basicUrl}profile`)
    }
  
  }
  
 
  