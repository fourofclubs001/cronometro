$(function() {
    var state = 0;
    var timer;

    $(".buttom").on("click", function(){

        if(state == 0){
            $("#redled").css({"background-color" : "rgb(105, 6, 6)"});
            $("#greenled").css({"background-color" : "green"});
            state = 1;
            timer = setInterval(plusTime, 1);
        }
        else if(state == 1){
            clearInterval(timer);
            $("#redled").css({"background-color" : "red"});
            $("#greenled").css({"background-color" : "rgb(6, 66, 6)"});
            state = 2;
        }
        else if(state == 2){
            $("#milisegundos").text("00");
            $("#segundos").text("00");
            $("#minutos").text("00");
            state = 0;
        }

    });

});

function plusTime(){

    var milisegundos = Number($("#milisegundos").text());
    var segundos = Number($("#segundos").text());
    var minutos = Number($("#minutos").text()); 

    milisegundos++;

    if(milisegundos < 10){
        $("#milisegundos").text("0" + String(milisegundos));
    }
    else if(milisegundos < 100){
        $("#milisegundos").text(String(milisegundos));
    }
    else if(milisegundos == 100){
        $("#milisegundos").text("00");
        
        segundos++;

        if(segundos < 10){
            $("#segundos").text("0" + String(segundos));
        }
        else if(segundos < 60){
            $("#segundos").text(String(segundos));
        }
        else if(segundos == 60){
            $("#segundos").text("00");
            
            minutos++;

            if(minutos < 10){
                $("#minutos").text("0" + String(minutos));
            }
            else if(minutos < 60){
                $("#minutos").text(String(minutos));
            }
            else if(minutos == 60){
                $("#minutos").text("00");
                
            }
            
        }
    }
 
}