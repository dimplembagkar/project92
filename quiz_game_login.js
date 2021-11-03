function addUser()
{
    Player1_name=document.getElementById("Player_1_input").value;
    Player2_name=document.getElementById("Player_2_input").value;

    localStorage.setItem("Player1_name", Player1_name);
    localStorage.setItem("Player2_name", Player2_name);

    window.location="quiz_game_page.html";

}