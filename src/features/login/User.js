class User {
    getDataKey = key => {
      return localStorage.getItem(key);
    };
    setDataKey = (key, value) => {
      return localStorage.setItem(key, value);
    };    
    setUserLogin = isLogin => {
      localStorage.setItem("isLogin", isLogin);
    };
    setUserProfile = userProfile => {
      localStorage.setItem("userProfile", userProfile);
    };    
    isLogin() {
      return (localStorage.getItem("isLogin") === 'true') ? true : false;
    }
  }
  export default new User();