var compHolder = [];

$(document).ready(function(){
  $('input').val(compHolder);
  
  $('button').click(function(){
     var value = $(this).val()
    
    switch (value){
      case '%':
        compHolder.push('/');
        compHolder.push(100);
        break;
      case 'AC':
        compHolder = [];
        break;
      case 'CE':
        compHolder.pop();
        break;
      case '=':
        compHolder = Compute(compHolder).filter(function(val){return val != undefined});
        break;
      case '+/-':
        compHolder[compHolder.length-1] = (-1)* compHolder[compHolder.length-1];
        break;
      case '+':
        compHolder.push(value);
        break;
      case '-':
        compHolder.push(value);
        break;
      case '/':
        compHolder.push(value);
        break;
      case '*':
        compHolder.push(value);
        break;
      case '.':
        compHolder[compHolder.length-1] = /\d/.test(parseInt(compHolder[compHolder.length-1])) == true ? compHolder[compHolder.length-1] + value : compHolder.push(value);
        break;
      default:
        if(compHolder.length == 0){
          compHolder.push(value);
        }
        else{ 
        if(/\d/.test(parseInt(value)) && /\d/.test(parseInt(compHolder[compHolder.length-1])) ||  compHolder[compHolder.length-1] == '.'){
          compHolder[compHolder.length-1] = compHolder[compHolder.length-1] + value;
        }
        else {compHolder.push(value);
        }  
      }
    }
    
     displayComp = Array.isArray(compHolder) == true ? compHolder.join('') : compHolder;
     $('input').val(displayComp);
  });
  
  function Compute(arr){
    console.log(arr);
    if(!(/\d/.test(parseInt(arr[arr.length-1]))) || !(/\d/.test(parseInt(arr[0]))) ){
      return 'Can Not Be Computed';
    }
    else{
      arr = arr.map(function(val){
        if(/\d/.test(val)){
          val = parseFloat(val);
          return val;
        }
        return val;
      });

      calHold = [];
      for(var i = 0; i <= arr.length; i++){
        calHold.push(arr[i]);
        if(calHold.length == 3){
          switch(calHold[1]){
            case '-':
              calHold = [calHold[0] - calHold[2]];
              break;
            case '+':
              calHold = [calHold[0] + calHold[2]];
              break;
            case '*':
              calHold = [calHold[0] * calHold[2]];
              break;
            case '/':
              calHold = [calHold[0] / calHold[2]];
              break
          }
        }
      }
      return calHold;
    }
  }
  
});
