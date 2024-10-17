
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


function numberConsole(a){
    if ( a < -5 ) {
        console.log( a + ' es negativo')
    }
    else if ( a > 10 ){
        console.log ( a + ' es positivo')

    }

    else{
        console.log ( ' es cero')
    }
    
}

numberConsole(-6)
numberConsole(15)
numberConsole(1)