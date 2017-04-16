import { Parse } from 'parse';

class UserService {

    getUserList(){
        
        var User = Parse.Object.extend("User");
        var query = new Parse.Query(User);       
        
        query.find({
        success: function(results) {
            console.log("Successfully retrieved " + results.length + " Users.");   
            return 1;        
           
            
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
        });
    }
}

export default new UserService()
