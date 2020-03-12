/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const cards = document.querySelector('.cards');
const followersArray = [];


function cardCreator(data) {
    //variables
    const card = document.createElement('div'),
        img = document.createElement('img'),
        cinfo = document.createElement('div'),
        name = document.createElement('h2'),
        userName = document.createElement('h3'),
        profileUrl = document.createElement('button');



    function appendToCard(name) {
        card.append(name);
    };

    function appendToCinfo(name) {
        cinfo.append(name);
    }


    // Appends

    profileUrl.addEventListener('click', e => {
        window.open(data.data.html_url);
    });

    name.textContent = 'Isaac Rutledge';
    profileUrl.textContent = 'GitHub';
    img.setAttribute('src', data.data.avatar_url);
    userName.textContent = data.data.login;
    appendToCinfo(name);
    appendToCard(img);
    appendToCinfo(profileUrl);
    appendToCard(cinfo);
    appendToCinfo(userName);
    return card
}

axios.get('https://api.github.com/users/rutrut6969')
    .then(response => {
        console.log(response.data.avatar_url);
        cards.append(cardCreator(response));

    })
    .catch(err => console.log('Error1'));