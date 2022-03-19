function dayofweek(d,m,y)
{
    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    y -= (m < 3) ? 1 : 0;
    return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
}
let d=parseInt(prompt("Enter day"));
let m=parseInt(prompt("enter month"));
let y=parseInt(prompt("enter year"));
let day = Math.round(dayofweek(d,m,y));
let nameOfDay;
switch(day){
    case 0: 
        nameOfDay = 'Sunday';  
        break;
    case 1:
        nameOfDay = 'Monday';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        break;
    case 4:
        nameOfDay = 'Thursday';
        break;
    case 5:
        nameOfDay = 'Friday';
        break;
    case 6:
        nameOfDay = 'Saturday';
        break;
}
alert(nameOfDay);