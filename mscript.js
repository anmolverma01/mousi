var ball;
var vali;
var sc;
var flag=50,remove,show,highscore;
var arr=document.cookie;
var cookie_array=arr.split('; ')
var obj={};
for(let i=0;i<cookie_array.length;i++)
    {
        key=cookie_array[i].split('=')[0];
        value=cookie_array[i].split('=')[1];
        obj[key]=value;
    }
if(highscore==undefined)
    {
        document.cookie="highscore="+0;
    }
console.log(obj.highscore);
function values()
{
for (var i=0; i<9;i++)
    {
        cards=document.getElementsByClassName('card')[i].innerHTML;
    }
        ball=document.getElementById('mousehere').innerHTML;
        score=document.getElementById('score').innerHTML;
        show=Math.floor(Math.random()*9);
}
function display()
{
    values();
    play=document.getElementsByClassName('card')[show].innerHTML=ball;
    document.getElementById('timer').innerHTML=flag;
    flag--;
if (flag==-1)
    {
            clearInterval(remove);
            clearInterval(vali);
 for (var i=0; i<9;i++)
    {
        cards=document.getElementsByClassName('card')[i].innerHTML="";
        document.getElementById('timer').innerHTML="Over";
        flag=0; document.getElementById('start').style.display="none";
    }
    }
}
function startGame()
{
        values();
i=0;
var j=0;
    do
    {
        remove = setInterval(display,500);
        j++;
    }while(j<1);
      
        vali=setInterval(non,200);
        document.getElementById('start').style.display="none";
}
function non()
{
        values();
        document.getElementsByClassName('card')[show].innerHTML="";

}
var i=0;
var initial_score;
function bill()
{
        i++;

        
        sc=document.getElementById('score').innerHTML=i;
        if(sc>obj.highscore)
            {
                document.cookie="highscore="+sc;
                
            }
        console.log(sc);
    
}
function replay()
{
        clearInterval(remove);
        clearInterval(vali);
    for (var i=0; i<9;i++)
    {
        cards=document.getElementsByClassName('card')[i].innerHTML="";
        document.getElementById('score').innerHTML="Score";
    }
        document.getElementById('timer').innerHTML="000";
        flag=99; document.getElementById('start').style.display="block";
}