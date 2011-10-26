var inspect = require('eyes').inspector({styles: {all: 'magenta'}});
var _ = require("underscore");

exports.parse = function(story_comments) {
  var columns = [
    story_comments[0].id, 
    story_comments[0].description, 
    parse_indicator_from_story_comments('New', story_comments), 
    parse_indicator_from_story_comments('Maintenance', story_comments)
  ];
  var filtered_columns = _.map(columns, function(text) {return text ? text : ""});
  return _.map(filtered_columns, function(text) {return '"' + text + '"';}).join(",");
};

function parse_indicator_from_story_comments(indicator, story_comments){
  if(story_comments[0].comments) {
    return parse_indicator_from_comments(indicator, story_comments[0].comments[0]);
  } else {
    return '';
  }
}

function parse_indicator_from_comments(indicator, comment){
  var re = RegExp(indicator+" (\\d{1,3}%)");
  var match = re.exec(comment);
  if(match)
    return match[1];
  return '';
}
