//import AuthActions from '../actions/AuthActions.jsx';
import { Parse } from 'parse';
// Parse.initialize('holartv', 'hermandeveloper');
// Parse.serverURL = 'http://35.162.205.164:1338'

class AuthService {

  login(user) {
    //AuthActions.login();
    Parse.User.logIn(user.email, user.password).then(function() {
      //AuthActions.loginSucceeded();
      var currentUser = Parse.User.current();
        if (currentUser) {
            return 1;
            //console.log("OKOKOK");
        } else {
            // show the signup or login page
            return 0;
        }
    }, function(err) {
      console.log(err);
      return 0;
      //AuthActions.loginFailed();

    });
  }

  logout() {
    //AuthActions.logout();
    Parse.User.logOut().then(function() {
     //AuthActions.logoutSucceeded();
    }, function(err) {
      console.log(err);
      //AuthActions.logoutFailed();
    });
  }

  signup(user) {
    console.log("called");
    //AuthActions.signup();
    //for login with email/password, the email is set as the username.
    var u = new Parse.User({
        username: user.email,
        email: user.email,
        password: user.password,
        isadmin: true,
        //nickname: user.nickname
      });

    u.signUp().then(function() {
      console.log("successcully created");
      //AuthActions.signupSucceeded();
    }, function(err) {
      console.log(err);
      //AuthActions.signupFailed();
    });
  }

}

export default new AuthService()
