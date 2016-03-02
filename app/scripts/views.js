var $ = require('jquery');

function PostView(){
  $('body').append('<ul class="posts">');
}

PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title + '</h1><p>' + post.body + '</p></li>');
  });
};

window.PostView = PostView;
