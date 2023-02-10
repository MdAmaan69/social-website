function addUser (){
    user_name = document.getElementById("user_name").Value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebaseConfig.databaseURL().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";

}

// function redirectToRoomName
// {
//     console.log(name);
//     localStorage.setItem("room_name" , name);
//     window.location = "kwitter_room.html";
// }