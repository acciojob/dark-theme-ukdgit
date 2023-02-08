let flag = true;
function myFunction() {
        var appElement = document.getElementById('app');
	    var classElement = document.getElementById('swap');
	    flag = !flag;
	    appElement.className = flag ? 'day' : 'night';
	    classElement.className  = flag ? 'button_day' : 'button_night';
	     
       // element.classList.toggle("night");
	
        }