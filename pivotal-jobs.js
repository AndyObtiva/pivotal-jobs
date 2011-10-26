var inspect = require('eyes').inspector({styles: {all: 'magenta'}});
var fs = require('fs');
var pivotal = require('./pivotal.js').pivotal;

pivotal.load_story_comments(function (story_comments) {
  inspect(story_comments);
});
// var lines = '1,2,3,4\n6,5,4,3\n';
// 
// fs.writeFile("/tmp/pivotal-jobs-data.csv", lines, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("The file was saved!");
//     }
// });
