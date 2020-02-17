/*!
 * Start Alert
 */

$(function(){
   //alert(alertStart);
});

/*!
 * Скрипт таймера
 */

    var h = 0; // задать часы
    var m = 5; // задать минуты
    var s = 0; // задать секунды
    var counter=setInterval(timer, 1000);
    function timer()
    {   var timer = document.getElementById("timer");
        var time = timer.innerHTML;
        var arr = time.split(":");

        if (s == 0) {
            if (m == 0) {
                if (h == 0) 
                    {clearInterval(counter);
                    alert(alertTimer);
                    return;                    
                    }
                h--;
                m = 60;
                if (h < 10) h = "0" + h;
            }
            m--;
            if (m < 10) m = "0" + m;
            s = 59;
        }
        else s--;
        if (s < 10) s = "0" + s;
        document.getElementById("timer").innerHTML = +m+" : "+s+" ";
   }

/*!
 * Backfix + Wait! alert
 */

!function () {
        var count = 1;
        var t;
        try {
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
            onpopstate = function (t) {
                if(count%2 == 1) {
                    alert(alertBackfix)

                }
                count++;
                t.state && location.replace("#")
            }
        } catch (o) {
        }
    }();

   
	

/*!
 * Vibration
 */

(function() {
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	navigator.vibrate([1000, 500]);
})();
