player1Name = localStorage.getItem("player1Name")
player2Name = localStorage.getItem("player2Name")

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").InnerHTML = Player1Score ; 
document.getElementById("player2Score").InnerHTML = player2Score ;

document.getElementById("PlayerQuestion").InnerHTML = "turno de pergunta - " + Player1Name ;
document.getElementById("PlayerQuestion").InnerHTML = "turno de pergunta - " + player2Name ;
function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase ();     
console.log("word in  lowerCase = + word);

 charAt1 = word.charAt(1);
 console.log(charAt1);

 lenght_divide_2 = math.floor(word.lenght/2);
 charAt2 = word.charAt(lenght_divine_2);
 console.log(charAt2);

 lenght_minus_1 = word.lenght - 1;      
 charAt3 = word.charAt(lenght_minus_1);
 console.log(charAt3);      
 
 removeCharAt1 = word.replace(charAt1, "_");
 removeCharAt2 = removeCharAt1.replace(charAt2,"_");
 removeCharAt3 = removeCharAt2.replace(charAt3,"_");
 console.log(removeCharAt3);

 questionWord = "<h4 id="wordDisplay">P. "+removeCharAt3+"</h4>";
imputBox = "<br>Resposta : <imput type="text" id="imputCheckBox">
checkbutton = "<br></br><button class="btn btn-info"onclick="check()">Checar<button>";
row = questionWord + inputBox + checkButton ;
document.getElementById("output").innerHTML = row; 
document.getElementById("word").value = "";
 
function check()
{
    getAnswer = document.getElementById("imputCheckBox").Value;
    getAnswer.toLowerCase();      
    console.log("resposta em caixa baixa - " + answer);
    if(answer == word)                              
    {
        if(answerTurn == "player1")                                           

 <script src="game_login.js"></script>
 </head>
 <body>
    function send()
    number1 = document.getElementById("number1).value;
    number2 = document.getElementById("number2).value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 +"</h4>

    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>checar</button>";
row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score).innerHTML = update1_score;
            }
            else
            {
                update_player2_score +1;
                document.getElementById("player2_score").innerHTML = update_player2_score;
                }
}

if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "turno de pergunta - " + player2_name ;
    }
else
{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "turno de pergunta - " + player1_name ;