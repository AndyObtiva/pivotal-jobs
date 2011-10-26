    // story_comments = 
    //   [
    //       {
    //           id: '19783703',
    //           description: 'in Safari, at least.<a>tag is there but cannot click on link (leads to grouponicus/lore)',
    //           comments: [ "I couldn't recreate this. I haven't rebased in a while but I don't think much should've changed for that link.", 'confirmed this when no deals are present in the gallery' ]
    //       },
    //       {
    //           id: '19854775',
    //           description: 'When I click on the Gift Card asset on the Grouponicus pageI should see the GC landing pageAnd it should fire a page view with appropriate t param',
    //           comments: [ "Do we own the gift card page?  We didn't develop the initial", 'Originally requested by Isaac for the sake of completeness. This is a nice to have, not a must have...' ]
    //       }
    //   ]      
    // 

var story_comment_parser = require('../story-comment-parser.js');

describe('story-comment-parser', function(){
  it('parses story id', function(){
    story_comments = [
          {
              id: '19783703',
          }
    ]
    expected_csv = '"19783703","","",""'
    output_csv = story_comment_parser.parse(story_comments);
    expect(output_csv).toEqual(expected_csv)
  });
  it('parses story id and description', function(){
    story_comments = [
          {
              id: '19783703',
              description: 'story description',
          }
    ]
    expected_csv = '"19783703","story description","",""'
    output_csv = story_comment_parser.parse(story_comments);
    expect(output_csv).toEqual(expected_csv)
    
  });
  it('parses story id, description, and new indicator when it exists in the first comment', function(){
    story_comments = [
          {
              id: '19783703',
              description: 'story description',
              comments: ["Release Notes: New 100%"]
          }
    ]
    expected_csv = '"19783703","story description","100%",""'
    output_csv = story_comment_parser.parse(story_comments);
    expect(output_csv).toEqual(expected_csv)    
  });
  it('parses story id, description, and new/maintenance indicators when they exist in the first comment', function(){
    story_comments = [
          {
              id: '19783703',
              description: 'story description',
              comments: ["Release Notes: New 80 0% Maintenance 20%"]
          }
    ]
    expected_csv = '"19783703","story description","80%","20%"'
    output_csv = story_comment_parser.parse(story_comments);
    expect(output_csv).toEqual(expected_csv)    
  });
  it('parses story id, description, and new vs maintenance indicators when they exist in the last comment of multiple', function(){
  });
  it('parses story id, description, and new vs maintenance indicators when they do not exist ', function(){});
  it('parses multiple stories', function(){});
});