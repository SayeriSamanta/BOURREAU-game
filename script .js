var rand = 0;
var word = " ";
var wordlength = 0;
var spaces = 0;
var numRight = 0;
var mistake = 7;
var nextImg = 1;
var divWidth = 55;
var sound = new Audio();
var phrases = ["Aibak", "Huzaifa", "Rohma", "Roha", "Robeqa", "Shahzad", "Ali", "Shani", "Shabi", "Mehroz", "Mehdiya", "Husnain", "Momna", "Rahat", "Rani", "Maryam", "Mamoona", "Areeba", "Anoushy", "Musa", "Arib", "Ayza", "Izzah", "Suhaam", "Komal", "Ahsan", "Anam", "Imaan", "Esha", "Zaffa", "Shumail", "Maheen", "Noreen", "Samreen", "Waqas", "Yousaf", "Taneer", "Zarnab", "Qasim", "Kabeer", "Khalid", "Amjad"];
var movies = ["Airlift","Bajrangi Bhaijaan","Bajirao Mastani","Dilwale","Baahibhali","Gabbar is back","Welcome Back","Humari Adhuri Kahani","Dolly ki Doli","Hate Story","Brothers","PK","Kick","Main Tera Hero","Singham","Singham Returns","Shaadi ke side effects","Holiday","Chennai Express","Krrish","Koi mil gya","Yeh Jawani Hai Deewani","Ram Leela","ABCD","Talaash","Khiladi","Ek Tha Tiger","Jab Tak Hai Jaan","Evil Returns","Bol Bachan","Ek Deewana Tha","Barfi","Dhamaal","Double Dhamaal","Don","Patiala House","Bodyguard","Rockstar","Tanu Weds Menu","Golmaal","Raaz","Three Idiots","Ajab Prem Ki Ghazab Kahani","Ghajni","Love Story","Welcome","Bhool Bhulaiya","Naqaab","Om Shanti Om","Munna Bhai MBBS","Fanaa","Chup Chup ke","No Entry","Dilwaly Dulhaniya Ley Jayen Ge","Hum Tum","Kabhi Khushi Kabhi Gham"];
var animals = ["Cat", "Dog", "Snakes", "Tiger", "Bear", "Lion", "Monkey", "Elephants", "Pig", "Deer", "Rhinoceros", "Gray Wolf", "Leopard", "Rabbit", "Frog", "Turtle", "Otter", "Horse", "Squirrel", "Fish", "Shark", "Bat", "Dolphin", "Goat", "Kangroo", "Eagle", "Cattle", "Zebra", "Giraffe", "Camel", "Owl", "Lizard", "Crocodile", "Gorilla", "Penguin", "Sheep", "Duck", "Mouse", "Rat", "Butterfly", "Cheetah", "Sherr", "Parrot", "Pigeon", "Owl", "Eagle", "Sparrow", "Crow"];
var fruits = ["Apple", "Apricot", "Banana", "Blackberry", "Cherry", "Coconut", "Cucumber", "Date", "Grape", "Guava", "Lemon", "Lime", "Mango", "Kiwi", "Melon", "Orange", "Papaya", "Peach", "Pear", "Plum", "Pineapple", "Olive", "Tomato", "Pumpkin", "Watermelon", "Grapes", "Carrot", "Corn", "Eggplant", "Pepper", "Red Pepper", "Grenn Pepper", "Mushrooms", "Onion", "Potato", "peas", "raddish", "Cabbage", "Rosemary", "Bean"];
function sp()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}
function mp()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    document.getElementById('introPage').style.display = "none";
    document.getElementById('multiPage').style.display = "block";
}
function phrase()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    rand = Math.floor(Math.random()*phrases.length);
    word = phrases[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Names of Boys/Girls";
    hangman();
}
function movie()
{
    rand = Math.floor(Math.random() * movies.length);
    word = movies[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Movies Name";
    hangman();
}
function animal()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    rand = Math.floor(Math.random() * animals.length);
    word = animals[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Animal and Birds";
    hangman();
}
function fruit() {
    sound.src = "Sounds/click.mp3";
    sound.play();
    rand = Math.floor(Math.random() * animals.length);
    word = fruits[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Fruits and Vegetables";
    hangman();
}
function hangman()
{
    var x = word.length;
    var y = x - 1;
    divWidth = divWidth * word.length + 10 ;
    document.getElementById('wordWrap').style.width = divWidth + "px";
    while(x>0)
    {
        var letter = word.substring(y, x);
        if(letter  === " ")
        {
            document.getElementById('letter' + x).innerHTML = "&nbsp;";
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        }
        else
        {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('underline' + x).style.display = "block";
            document.getElementById('underline' + x).style.borderBottom = "3px solid black";
          
        }

        x--;
        y--;

    }
    wordlength = word.length - spaces;

    
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('gamePage').style.display = "block";
    document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
}

function guessLetter()
{
    sound.src = "Sounds/laser.mp3";
    sound.play();

    var target = event.target;
    var correct=false;
    target.style.visibility = "hidden";

    var lower = target.id;
    var upper = document.getElementById(lower).getAttribute('value');

    for(var a=1;a<=100;a++)
    {
        if(document.getElementById('letter'+a).innerHTML===lower || document.getElementById('letter'+a).innerHTML===upper)
        {
            document.getElementById('letter' + a).style.visibility = "visible";
            correct = true;
            numRight++;
        }

    }

    if (correct == false)
    {
        mistake--;
        ++nextImg;
        document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
        document.getElementById('hangImg').src = 'hang'+ nextImg +'.png';
    }
    if (mistake <= 0)
    {
        mistake = 0;
        document.getElementById('winStatus').innerHTML = 'You lose!!!';
        lose();
    }
    if(numRight==wordlength)
    {
        document.getElementById('winStatus').innerHTML = "You Win";
        win();
    }
}
function countChars(countFrom,displayTo)
{
    var len = document.getElementById(countFrom).value.length;
    document.getElementById(displayTo).innerHTML = len;
}


function readText()
{
    word = document.getElementById('input').value;
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('categoryName').innerHTML = 'Guess the word';
    hangman();
}
function win()
{
    sound.src = "Sounds/win.mp3";
    sound.play();
    document.getElementById('gamePage').style.display = "none";
    document.getElementById('endPage').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;
    
}
function lose() {
    sound.src = "Sounds/lose.mp3";
    sound.play();
    document.getElementById('gamePage').style.display = "none";
    document.getElementById('endPage').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;

}

function playAgain()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    document.location.reload(true);
    document.getElementById('endPage').style.display = "none";
    hangman();
}
function mainMenu()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    document.location.reload(true);
    document.getElementById('endPage').style.display = "none";
    document.getElementById('introPage').style.display = "block";
}