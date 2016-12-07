//values
var dia = [ 1,
    {
        img: "banner/voodoo.png",
        hText: "Voodoo",
        pText: "3D VR Horror Game",
        page: "voodoo",
    },
    {
        img: "banner/waterrun.jpg",
        hText: "",
        pText: "",
        page: "waterrun",
    },
    {
        img: "banner/treehousedefense.png",
        hText: "2D Towerdefense Game",
        pText: "Aim",
        page: "treehousedefense",
    },
    {
        img: "banner/meanracers.png",
        hText: "Meanracers",
        pText: "2D Online Javascript Game",
        page: "meanracers",
    }
]

$(document).ready(function () {
    var slideSpeed = 5000;
    
    //Functions
    var nextDia = function() {
        $("#PreviousDia").css("background-image", "url(images/" + dia[dia[0]].img + ")");
        $("#PreviousDia h1").text(dia[dia[0]].hText);
        $("#PreviousDia p").text(dia[dia[0]].pText);
       
        if (dia.length-1 == dia[0]++)
            dia[0] = 1;
       
        $("#CurrentDia").css("background-image", "url(images/" + dia[dia[0]].img + ")");
        $("#CurrentDia h1").text(dia[dia[0]].hText);
        $("#CurrentDia p").text(dia[dia[0]].pText);
        
        $("#Banner").css("margin-left", "0");
        $("#Banner").animate({"margin-left": "-100%"}, 1300);
    }

    var diaShow = window.setInterval(nextDia, slideSpeed)

    $("#Banner").css("margin-left", "0");
    loadStartValuesSlider();
    
    //Events
    $("#Banner").mouseenter(function() {clearInterval(diaShow)});
    $("#Banner").mouseleave(function() {diaShow = window.setInterval(nextDia, slideSpeed)});
    
    //click function for banner
    $('body').on('click','section',function(e){
        loadPage(dia[dia[0]].page);
    })
    
    //click function for banner
    $('body').on('click','a',function(e){
        if (this.href.search("#") >= 0)
            loadPage( this.href.substr(this.href.search("#")+1) );
    })
        
    var loadPage = function(page) {
        $(".content").load("pages/" + page + ".html");
    }
})

function loadStartValuesSlider() {
    $("#PreviousDia").css("background-image", "url(images/" + dia[dia[0]].img + ")");
    $("#PreviousDia h1").text(dia[dia[0]].hText);
    $("#PreviousDia p").text(dia[dia[0]].pText);
}



var $win = $(window);
var $lay = $('#layout');
var baseSize = {
    w: 1920,
    h: 1080    
}

function updateScale() {

    var ww = $win.width();
    var wh = $win.height();
    var newScale = 1;

    // compare ratios
    if(ww/wh < baseSize.w/baseSize.h) { // tall ratio
        newScale = ww / baseSize.w;
    } else { // wide ratio
        newScale = wh / baseSize.h;        
    }

    $lay.css('transform', 'scale(' + newScale + ',' +  newScale + ')');

    console.log(newScale);
}

$(window).resize(updateScale);