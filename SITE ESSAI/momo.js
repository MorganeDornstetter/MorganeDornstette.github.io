//changement d'image au survol de la souris sur un élément

$(document).ready(function () {
    $(".grille>div").mouseover(function () {
        if ($(this).hasClass('case1')) {
            $(".bleu").css('background', 'url(img/photo1.jpeg) no-repeat');
            $(".bleu").css('background-size', 'cover');
        } else if ($(this).hasClass('case2')) {
            $(".bleu").css('background', 'url(img/photo2.jpeg) no-repeat');
            $(".bleu").css('background-size', 'cover');
        } else if ($(this).hasClass('case3')) {
            $(".bleu").css('background', 'url(img/photo3.jpeg) no-repeat');
            $(".bleu").css('background-size', 'cover');
        }

    });

    $(".grille>div").mouseover(function () {
        if ($(this).hasClass('case1')) {
            $(".case1").removeClass('case1').addClass('gris');
        } else if ($(this).hasClass('case2')) {
            $(".case2").removeClass('case2').addClass('gris2');
        } else if ($(this).hasClass('case3')) {
            $(".case3").removeClass('case3').addClass('gris3');
        }
    });

    $(".grille>div").mouseleave(function () {
        if ($(this).hasClass('gris')) {
            $(".gris").removeClass('gris').addClass('case1');
        } else if ($(this).hasClass('gris2')) {
            $(".gris2").removeClass('gris2').addClass('case2');
        } else if ($(this).hasClass('gris3')) {
            $(".gris3").removeClass('gris3').addClass('case3');
        }
    });
});



/*
$( document ).ready(function() 
{
    $(".case1").mouseover(function(){
    
        $(".bleu").css('background', 'url(img/photo1.jpeg) no-repeat');
        $(".bleu").css('background-size','cover');
    });
});

$( document ).ready(function() 
{
    $(".case2").mouseover(function(){
        $(".bleu").css('background', 'url(img/photo2.jpeg) no-repeat');
        $(".bleu").css('background-size','cover');
    })
});

$( document ).ready(function() 
{
    $(".case3").mouseover(function(){
        $(".bleu").css('background', 'url(img/photo3.jpeg) no-repeat');
        $(".bleu").css('background-size','cover');
    });
});

// changement de couleur des boîtes à leur survol

$( document ).ready(function() 
{
    $(".case1").mouseover(function(){
    
       $(".case1").removeClass('case1').addClass('gris');
    }).mouseleave(function()
    {
    $(".gris").removeClass('gris').addClass('case1');
    });

});

$( document ).ready(function() 
{
    $(".case2").mouseover(function(){
    
       $(".case2").removeClass('case2').addClass('gris2');
    }).mouseleave(function()
    {
    $(".gris2").removeClass('gris2').addClass('case2');
    });
});
$( document ).ready(function() 
{
    $(".case3").mouseover(function(){
    
       $(".case3").removeClass('case3').addClass('gris3');
    }).mouseleave(function()
    {
    $(".gris3").removeClass('gris3').addClass('case3');
    });
});
*/
//box qui affichent texte
$(document).ready(function () {

    $("#deroulement>div").click(function () {
        $(this).children(".deroule").toggleClass("visible");;
    });

});


//loader
$(document).ready(function () {

    $('.loader').addClass('gauche');

});


//menu
/* $(document).ready( function () 
 {
     $(".menu ul.sousmenu").hide();    
 } ) ;

 $(document).ready( function () 
 {
 $(".boutonmenu").click(function()
 {
     $(".menu ul.sousmenu").show();
 });
 });
 */

$(document).ready(function () {
    $(".boutonmenu").click(function () {
        $(".menu ul.sousmenu").toggleClass("visi");
        $("body").toggleClass("overflow");
        $(window).scrollTop(0);
    });
});



//$('.loader).fadeOut(2000);//

/*
function space()
{

    var p = document.querySelector(".space");

    if (p.style.display === 'block')
    {
        p.style.display = 'none';
        
    }
    else 
    {
        p.style.display = 'block';
    }

    p.innerHTML= "Parcourez l'espace et découvrez de nouvelles contrées équipés de nos casques de réalité virtuelle améliorés.";
    p.style.color = "#76BBFF";
    p.style.fontFamily= "Orbitron";
    
    
    }


function futurist()
{
    var c = document.querySelector(".station");

    if (c.style.display === 'block')
    {
        c.style.display = 'none';
    }
    else
    {
        c.style.display = 'block';
    }

    c.innerHTML= "Une petite randonnée nocturne et magique pour mieux connaître le ciel et les planètes...";
    c.style.color = "#76BBFF";
    c.style.fontFamily= "Orbitron";
}

function era()
{
    var e =  document.querySelector(".newera");

    if (e.style.display === 'block')
    {
        e.style.display = 'none';
    }
    else
    {
        e.style.display = 'block';
    }
    e.innerHTML= "Découvrez le monde du futur et les technologies à venir dans le salon futuriste de la Nouvelle Ere";
    e.style.color = "#76BBFF";
    e.style.fontFamily= "Orbitron";
}
*/
/* switch (this) {
    case $(".case1").mouseover():
        $(".bleu").css('background', 'url(img/photo1.jpeg) no-repeat');
        $(".bleu").css('background-size','cover');
      break;
    case $(".case2").mouseover():
        $(".bleu").css('background', 'url(img/photo2.jpeg) no-repeat');
        $(".bleu").css('background-size','cover');
      break;
    case $(".case3").mouseover():
        $(".bleu").css('background', 'url(img/photo3.jpeg) no-repeat');
        $(".bleu").css('background-size','cover');
      break;
  }   
  */