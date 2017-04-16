import { Parse } from 'parse';

class ChannelService {

    getChannelList(){
        console.log("called");
        var Channel = Parse.Object.extend("Channel");
        var query = new Parse.Query(Channel);        
        query.find({
        success: function(results) {
            console.log("Successfully retrieved " + results.length + " Channels.");           
            for (var i = 0; i < results.length; i++) {
            var object = results[i];
            console.log(object.id + ' - ' + object.get('name'));
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
        });
    }

    saveNewChannel(data){
        console.log("1");
        var Channel = Parse.Object.extend("Channel");
        var Channel = new Channel();

        Channel.set("name", data.name);
        Channel.set("description", data.description);
        Channel.set("meta", data.meta);
        Channel.set("profileImg", data.profileImg);
        Channel.set("bannerImg", data.bannerImg);
      
        console.log("2");
        Channel.save(null, {
        success: function(Channel) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + Channel.id);
        },
        error: function(Channel, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
        }
        });
    }

}

export default new ChannelService()
