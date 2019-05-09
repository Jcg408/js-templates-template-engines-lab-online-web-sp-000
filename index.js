function createPost() {
        let postTitle = document.getElementById('postTitle').value;
        let postBody = document.getElementById('postBody').value;
        let postAuthor = document.getElementById('postAuthor').value;
      
        let pageTemplate = document.getElementById('page-template').innerHTML
        let postTemplate = document.getElementById('post-template').innerHTML
        let commentsTemplate = document.getElementById('comments-template').innerHTML
      
        let pageFn = _.template(pageTemplate)
        let postFn = _.template(postTemplate)
        let commentsFn = _.template(commentsTemplate)
        
        //append with +=
        document.getElementsByTagName("main")[0].innerHTML += pageFn();
      
        let post = postFn({title: postTitle, body: postBody, author: postAuthor} )
        let comments = commentsFn()
        let postElement = document.getElementById("post")
      
        postElement.innerHTML = post
        postElement.getElementsByTagName("footer")[0].innerHTML = comments;
      
      }

      function postComment(){
        let commenter = document.getElementById('commenterName').value;
        let comment = document.getElementById('commentText').value;

        let commentTemplate = document.getElementById('comment-template').innerHTML;
        let templateFn = _.template(commentTemplate);

        let commentsDiv = document.getElementById('comments');

        let templateHTML = templateFn({ comment: comment, commenter: commenter });
        
        commentsDiv.innerHTML += templateHTML;

      }
  
  












