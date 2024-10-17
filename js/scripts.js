
function hello( name, age) 
{
        
 if( age < 18) 
    {
    console.log ('Hola ' + name + ', eres menor de edad');
    }

 else 
    {
    console.log ('Hola ' + name + ', eres mayor');
    }
  
}
  
hello('xavier',8)
hello('xavier',32)



function number(a,b)
{
  if(a !== b)
    {
    if(a > b)
        {
        console.log(a)   
        }
    else    // a < b ("a" es menor que "b")
        {
        console.log (b)
        }
   
    }  

}

number(33,30)



function numberConsole(a)
{
    if(a<0)
    {
        console.log ( ' es un número negativo');
    }

    else if (a>0)
    {
        console.log ( ' es un número positivo');
        
    }
    else
    {
        console.log (' es cero')
    }

}

numberConsole(-5)
numberConsole(5)
numberConsole(0)



