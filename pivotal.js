var inspect = require('eyes').inspector({styles: {all: 'magenta'}});
require('pivotal-tracker');
var _ = require("underscore");
var pivotal = exports.pivotal = {};

var grab_comments = function(story) {
  return {
    id: story.id.$t,
    description: story.description,
    comments: _.map(story.notes.note, function(note) {return note.text}),
  }  
};

pivotal.load_story_comments = function (pivotal_callback) {
  Pivotal.getProject(
    '323057', 
    'b25a25dd36c9421c51d2aad240299dcc', 
    function(tracker) {
      Pivotal.getCurrentIteration(
        '323057', 
        'b25a25dd36c9421c51d2aad240299dcc',
        function(results) {
          var stories = results.iterations.iteration[0].stories.story;
          var story_comments = _.compact(_.map(stories, function(story) {
            return story.notes ? grab_comments(story) : null;
          }));
          pivotal_callback(story_comments);
        }
      );
    }
  );
};






