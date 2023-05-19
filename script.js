var div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "15px";
document.body.style.backgroundImage = "url('bgimg.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

var h1 = document.createElement("h1");
h1.innerHTML = "Guess the Card";
h1.style.textAlign="center";
h1.style.marginTop = "30px";


h1.setAttribute("class","text-bg-primary p-3");


var p=document.createElement("p");
p.innerHTML="Both Suit and Value matches 5 pts, Only Value matches 2pts, Only Suit matches 1pts";


p.style.textAlign="center";

p.setAttribute("class","text-bg-dark");


var label = document.createElement("label");
label.setAttribute("for", "suits");
label.setAttribute("class","text-bg-info p-2");
label.innerHTML = "Choose suits :";

var selectvalue = document.createElement("select");
selectvalue.setAttribute("id", "suits");
selectvalue.setAttribute("name", "suits");
selectvalue.setAttribute("class","btn btn-secondary dropdown-toggle");
selectvalue.style.margin = "5px";

function createoptionvalue(value1) {
    var opt = document.createElement("option");
    opt.value = value1;
    opt.text = value1;
    opt.backgroundColor="aqua";
    return opt;
}

var option1 = createoptionvalue("HEARTS");
var option2 = createoptionvalue("SPADES");
var option3 = createoptionvalue("CLUBS");
var option4 = createoptionvalue("DIAMONDS");

selectvalue.append(option1, option2, option3, option4);

label.append(selectvalue);
/////////////////
var label1 = document.createElement("label");
label1.setAttribute("for", "cardvalue");
label1.setAttribute("class","text-bg-info p-2");
label1.innerHTML = "Choose cardvalue :";

var selectvalue1 = document.createElement("select");
selectvalue1.setAttribute("id", "cardvalue");
selectvalue1.setAttribute("name", "cardvalue");
selectvalue1.setAttribute("class","btn btn-secondary dropdown-toggle");
selectvalue1.style.margin = "5px";

var optionv1 = createoptionvalue("1");
var optionv2 = createoptionvalue("2");
var optionv3 = createoptionvalue("3");
var optionv4 = createoptionvalue("4");
var optionv5 = createoptionvalue("5");
var optionv6 = createoptionvalue("6");
var optionv7 = createoptionvalue("7");
var optionv8 = createoptionvalue("8");
var optionv9 = createoptionvalue("9");
var optionv10 = createoptionvalue("10");
var optionvJ = createoptionvalue("JACK");
var optionvQ = createoptionvalue("QUEEN");
var optionvK = createoptionvalue("KING");
var optionvA = createoptionvalue("ACE");
selectvalue1.append(optionvA,optionv1, optionv2, optionv3, optionv4, optionv5, optionv6, optionv7, optionv8, optionv9, optionv10, optionvJ, optionvQ, optionvK);

label1.append(selectvalue1);



var subbutton = document.createElement("button");
subbutton.setAttribute("type", "submit");
subbutton.setAttribute("class", "btn btn-dark");
subbutton.style.marginTop = "5px";
subbutton.innerHTML = "Guess it";

subbutton.addEventListener("click", foo);
var disp = document.createElement("div");
disp.setAttribute("type", "text");
disp.style.marginTop = "20px";

var points1=document.createElement("span");
points1.style.color="red";
points1.style.textAlign="center";
points1.style.fontSize="30px";
points1.innerHTML=0;

var count1=document.createElement("span");
count1.style.color="black";
count1.style.textAlign="center";
count1.style.fontSize="30px";
count1.innerHTML=0;

var count2=document.createElement("span");
count2.style.color="black";
count2.style.textAlign="center";
count2.style.fontSize="20px";
count2.innerHTML="-----Total Count--:";

var span=document.createElement("div");
span.style.color="red";
span.style.textAlign="center";
span.style.fontSize="20px";
span.style.backgroundColor="aqua";
span.innerHTML="Your Total Point is :"
async function foo() {
    let suits = document.getElementById("suits").value;
    let cardvalue = document.getElementById("cardvalue").value;
   
    
    try {
        let res = await fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
        let res1 = await res.json();
      
        
        if(suits==res1.cards[0].suit && cardvalue==res1.cards[0].value){

            points1.innerHTML=parseInt(points1.innerHTML)+5;
            count1.innerHTML=parseInt(count1.innerHTML)+1;
            span.append(points1,count2,count1);
            document.body.append(span);
        }else if(suits==res1.cards[0].suit ){
            points1.innerHTML=parseInt(points1.innerHTML)+1;
            count1.innerHTML=parseInt(count1.innerHTML)+1;
            span.append(points1,count2,count1);
            document.body.append(span);
        }else if(cardvalue==res1.cards[0].value){
            points1.innerHTML=parseInt(points1.innerHTML)+2;
            count1.innerHTML=parseInt(count1.innerHTML)+1;
            span.append(points1,count2,count1);
            document.body.append(span);
        }else{
            count1.innerHTML=parseInt(count1.innerHTML)+1;
            span.append(points1,count2,count1);
            document.body.append(span);
        }
       
        

if(suits==res1.cards[0].suit && cardvalue==res1.cards[0].value){
        disp.innerHTML = `<span class="fw-bold fs-5 text-bg-success">Perfect Match -- Random pick card : Suit -- ${res1.cards[0].suit} and Value  -- ${res1.cards[0].value}  </span><br>
        <img src=${res1.cards[0].image}></img>;
        <img src="wow.jpg"></img>`;
}else if(suits==res1.cards[0].suit || cardvalue==res1.cards[0].value){
    disp.innerHTML = `<span class="fw-bold fs-5 text-bg-warning">One got Matched -- Random pick card : Suit -- ${res1.cards[0].suit} and Value  -- ${res1.cards[0].value}  </span><br>
    <img src=${res1.cards[0].image}></img>;
    <img style="border-radius:60%" src="soclose.png"></img>`;
}
else{
    disp.innerHTML = `<span class="fw-bold fs-5 text-bg-danger">Not Matched -- Random pick card : Suit -- ${res1.cards[0].suit} and Value  -- ${res1.cards[0].value}  </span><br>
    <img src=${res1.cards[0].image}></img>
    <img style="border-radius:50%" src="gameover.jpg"></img>`;
}
    } catch {
        disp.innerHTML = ` <img src=${res1.cards[0].image}></img>`;

    }
    
    
}

document.body.append(disp);

var br = document.createElement("br");
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");

div.append(label, br, label1, br2, subbutton, br3, disp);
document.body.append(h1,p, div);

