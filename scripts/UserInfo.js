class UserInfo {
  constructor({
    usernameSelector,
    userJobSelector
  }) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      name: this._usernameElement.textContent,
      job: this._userJobElement.textContent,
    };
  }

  setUserInfo({
    name,
    job
  }) {
    this._usernameElement.textContent = name;
    this._userJobElement.textContent = job;
  }
}