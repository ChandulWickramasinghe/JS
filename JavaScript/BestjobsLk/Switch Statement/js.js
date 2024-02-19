
var dateofweek = 1;
switch(dateofweek){
    case 1:
    console.log("Monday");
    break;
	case 2:
	  console.log("Tuesday");
	  break;
	case 3:
	  console.log("Wendsday");
	  break;
	case 4:
	  console.log("Thursday");
	  break;
	case 5:
	  console.log("Friday");
	  break;
	case 6:
	  console.log("saturday");
	  break;
	case 7:
	  console.log("sunday");
	  break;
	default:
	  console.log("Invaid number");
	  break;
}
function weeknumber(){
var weekday = 7;
switch(weekday){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    	console.log("WeekDay");
    	break;
    case 6:
    case 7:
    	console.log("WeekEnd");
    	break;
	default:
	  console.log("Invaid number");
	  break;
}

}
weeknumber();