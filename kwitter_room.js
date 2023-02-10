//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCYWkN8wxbJWRKXtM1KRHUs1yh6iy2D6H4",
      authDomain: "social-website-cf4e0.firebaseapp.com",
      databaseURL: "https://social-website-cf4e0-default-rtdb.firebaseio.com",
      projectId: "social-website-cf4e0",
      storageBucket: "social-website-cf4e0.appspot.com",
      messagingSenderId: "497647399347",
      appId: "1:497647399347:web:a52d990a2c6770717ddbc6"
    };

    const app = initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = " <div class = 'room_name' id="+Room_names+" oncllick='redirectToRoomName(this.id)' >#"+ Room_names + "<div><hr>"; 
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


