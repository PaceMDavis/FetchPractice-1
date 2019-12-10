let arrayOfPosts;
let first5Posts;
let arrayOfComments;
let arrayOfUsers;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()
  get5Posts()
  getComments()
  getUsers()
  createPost()
  editPost()
}
const createPost = () => {
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

const editPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}
const get5Posts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((fivePosts) => {
      //in order to only get 5, use slice
      first5Posts = fivePosts.slice(0, 5)
    })
}
const getComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => arrayOfComments = comments)
}
const getUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => arrayOfUsers = users)
}

// data = data.filter(entry => entry.created > someValue) // Created after X
//                    .slice(0, 1000);                            // Limit to 1000

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfComments)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!
const display5Post = () => {
  const fivePosts = document.getElementById('five-posts')
  first5Posts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    fivePosts.append(li)
  })
}

const displayComments = () => {
  const allComments = document.getElementById('all-comments')
  arrayOfComments.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Name: ${post.name}:  ${post.body},  by user: ${post.email}`)
    li.appendChild(text)
    allComments.append(li)
  })
}

const displayUsers = () => {
  const userPosts = document.getElementById('user-posts')
  arrayOfUsers.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Name: ${post.name}  Username:  ${post.username}  Email: ${post.email}  City:${post.address.city}`)
    li.appendChild(text)
    userPosts.append(li)
  })
}



function sockMerchant(n, ar) {
  const colors = {};
  let matches = 0;
  for (let i = 0; i < n; i++) {
      if (colors[ar[i]]) {
          matches++;
          colors[ar[i]] = 0;
      } else {
          colors[ar[i]] = 1;
      }
  }
  return matches;
}

var ones = {}, pairs = 0;
for (var i = 0; i < n; i++) {
    if (ones.hasOwnProperty(ar[i])) {
        pairs++;
        delete ones[ar[i]];
    } else {
        ones[ar[i]] = 0;
    }
}
return pairs