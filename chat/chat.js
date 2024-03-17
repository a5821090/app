

setup();





function setup() {
    $('.menu__item').first().addClass('menu__item--current');

};




function showTime() {
    var now = new Date();
    var nowhour = now.getHours();
    var nowminutes = now.getMinutes();
    var nowseconds = now.getSeconds();
  
    var text = "<span class='mydate'>" +  nowhour + "：" + nowminutes + "：" + nowseconds + "</span>" ; 
    
    return text;
  }
  function showDay() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var date = "<span class='mydate'>" + year + "/" + month + "/" + day +  "</span>" ; 
    
    return date;
  }
let messages = [
    { title: "Hello!", isDone: false },
]
function drawMessList(messages) {
    messages.forEach(drawMess)
}

function drawMess(message, position) {
    const messListContainer = document.getElementById("mess-list-container");


    

    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = message.title + "　" + showTime() + " " + showDay();
    

    const messContainer = document.createElement("div");
    messContainer.classList.add("mess")


  
    messContainer.appendChild(titleDiv)

    messListContainer.appendChild(messContainer);
}

window.onload = () => {
    drawMessList(messages)

    document.getElementById("mess-list-form").onsubmit = (e) => {
        e.preventDefault();

        const titleInput = document.getElementById("mess-title-filed");
        const title = titleInput.value;
        if (title === "") return;
        titleInput.value = "";

        addMess(title)
    }
}

function addMess(title) {
    const message = { isDone: false }
    message.title = title
    messages.push(message);
    drawMess(message, messages.length - 1);
}
 




$(document).ready(function(){





$("#menu").css("transform","translate3d("+getItemX(0)+"px,0,0)");
$("#menu li").removeClass("show");
$("#menu li").eq(0).addClass("show");
});


var getItemX = function(index){
var $item = $("#menu li").eq(index);
var item_offset = $item.offset().left;
var item_width = $item.outerWidth();
var menu_offset = $("#menu").offset().left;
var screen_width = $("#screen").width();
return (menu_offset-item_offset)+(screen_width-item_width)/2;
}
