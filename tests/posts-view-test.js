var expect = chai.expect;

describe("PostView", function(){
  var view, posts;

  beforeEach(function(){
    posts = [{title: "Title", body: "Body"}];
    view = new PostView();
  });

  describe("showPosts", function(){
    it("should take a post array and list them", function(){
      view.showPosts(posts);
      expect($('.posts li').length).to.equal(1);
      expect($('.posts li h1').text()).to.equal("Title");
      expect($('.posts li p').text()).to.equal("Body");
    });
  });
});
