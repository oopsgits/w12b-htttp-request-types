function sendPost() {
    let postTitle = document.getElementById("post-title").value;
    let postContent = document.getElementById("post-content").value;

    let postData = {
        title: 'postTitle',
        body: 'postContent',
        userId: 1,
    }


    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            document.getElementById("post-status").innerHTML = "Post Success!";
        } else if (this.readyState != 4) {
            document.getElementById("post-status").innerHTML = "Posting";
        } else {
            document.getElementById("post-status").innerHTML = "Post Failure";
        }

    }
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(postData));


}



document.getElementById("post-submit").addEventListener("click", sendPost)

function updatePost() {
    let postData = {
        title: "foo",
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else if (this.readyState != 4) {
            console.log("Patch Loading");
        } else {
            console.log("Patch Error :" + this.status);
        }

    }
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(postData));
}

updatePost();

function deletePost() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else if (this.readyState != 4) {
            console.log("Delete Loading");
        } else {
            console.log("Delete Error :" + this.status);
        }

    }
    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.send();


}

deletePost();

function getPosts() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText);
            document.getElementById("posts-container").innerHTML = "";
            for (let i=0; i<posts.length; i++) {
                document.getElementById("posts-container").innerHTML += "<h4>" + posts[i].title + "</h4>";
                document.getElementById("posts-container").innerHTML += "<p>" + posts[i].body + "</p><br><br>";

            }
        } else if (this.readyState != 4) {
            document.getElementById("posts-container").innerHTML = "<h3>Lodaing Posts</h3>";
        } else {
            document.getElementById("posts-container").innerHTML = "<h3>Error Lodaing Posts</h3>";
        }

    }
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.send();

}

getPosts();