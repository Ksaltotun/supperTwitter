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

  async pushData(path, data = {}) {
    await fetch(`${this._basicUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }

  async deleteData(postId) {
    await fetch(`${this._basicUrl}posts/${postId}`, {
      method: 'DELETE',
    });
    const responceWithComments = await fetch(`${this._basicUrl}comments?postId=${postId}`);
    const arrOfComments = await responceWithComments.json();
    arrOfComments.forEach((item) => {
      fetch(`${this._basicUrl}comments/${item.id}`, {
        method: 'DELETE',
      });
    });
    Promise.all(arrOfComments);
  }

  getPosts() {
    return this.getDatas(`${this._basicUrl}posts`);
  }

  getComments() {
    return this.getDatas(`${this._basicUrl}comments`);
  }

  getProfile() {
    return this.getDatas(`${this._basicUrl}profile`)
  }
}


