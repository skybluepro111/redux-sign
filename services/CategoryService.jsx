import { Parse } from 'parse';

class CategoryService {

    getCategoryList(){
        console.log("called");
        var categories = Parse.Object.extend("categories");
        var query = new Parse.Query(categories);        
        query.find({
        success: function(results) {
            console.log("Successfully retrieved " + results.length + " categories.");           
            for (var i = 0; i < results.length; i++) {
            var object = results[i];
            console.log(object.id + ' - ' + object.get('shit'));
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
        });
    }

    saveNewCategory(data){
        var Category = Parse.Object.extend("Category");
        var Category = new Category();

        Category.set("name", data.name);
        Category.set("description", data.description);
        Category.set("meta", data.meta);
       // Channel.set("profileImg", data.profileImg);
        //Channel.set("bannerImg", data.bannerImg);
      

        Category.save(null, {
        success: function(Category) {
            // Execute any logic that should take place after the object is saved.
            alert('New Category Saved: ' + Category.id);
        },
        error: function(Category, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to save New Category: ' + error.message);
        }
        });
    }
}

export default new CategoryService()
