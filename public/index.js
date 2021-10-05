
let output='';
let outputClone='';
let arr=[];
let finalResult=0;
   function addEventValue(event) {
     let value
  if(typeof(event)=='string') {
      value=event
  } else {
    value=event.target.innerHTML;
  }
   
      if(!(typeof(event)=='string')) {
        if(event.target.className=='divide') {
          output+='/'
        } else if(event.target.className=='times') {
          output+='*'
        } else {
          output+=value
        }
      } else {
        output+=value
      }
      
      
      outputClone+=value;
      document.getElementById('screen').innerHTML=outputClone;  
         for (let i=0; i<output.length; i++) {
            if(output[i]=='-' &&  output[i+1]=='-') {
              output=output.slice(0,i)+'+'+output.slice(i+2)
              outputClone=outputClone.slice(0,i)+'+'+outputClone.slice(i+2)
              document.getElementById('screen').innerHTML=outputClone;  
            }

            if(output[i]=='+' &&  output[i+1]=='+') {
              output=output.slice(0,i)+output.slice(i+1)
              outputClone=outputClone.slice(0,i)+outputClone.slice(i+1)
              document.getElementById('screen').innerHTML=outputClone;  
            }

            if(output[i]=='-' &&  output[i+1]=='+' || output[i]=='+' &&  output[i+1]=='-') {
              output=output.slice(0,i)+'-'+output.slice(i+2)
              outputClone=outputClone.slice(0,i)+'-'+outputClone.slice(i+2)
              document.getElementById('screen').innerHTML=outputClone;   
            }

            if(output[i]=='+' &&  output[i+1]=='*' || output[i]=='+' &&  output[i+1]=='/') {
              output=output.slice(0,i+1)+output.slice(i+2)
              outputClone=outputClone.slice(0,i+1)+outputClone.slice(i+2)
              document.getElementById('screen').innerHTML=outputClone;
            }

            if(output[i]=='-' &&  output[i+1]=='*' || output[i]=='-' &&  output[i+1]=='/') {
              output=output.slice(0,i+1)+output.slice(i+2)
              outputClone=outputClone.slice(0,i+1)+outputClone.slice(i+2)
              document.getElementById('screen').innerHTML=outputClone;   
            }

            if(output[i]=='*' &&  output[i+1]=='*' || output[i]=='*' &&  output[i+1]=='/' ||
              output[i]=='*' &&  output[i+1]=='+' || output[i]=='*' &&  output[i+1]=='-') {
              output=output.slice(0,i+1)+output.slice(i+2)
              outputClone=outputClone.slice(0,i+1)+outputClone.slice(i+2)
              document.getElementById('screen').innerHTML=outputClone; 
            }

            if(output[i]=='/' &&  output[i+1]=='*' || output[i]=='/' &&  output[i+1]=='/' ||
              output[i]=='/' &&  output[i+1]=='+' || output[i]=='/' &&  output[i+1]=='-') {
              output=output.slice(0,i+1)+output.slice(i+2)
              outputClone=outputClone.slice(0,i+1)+outputClone.slice(i+2)
              document.getElementById('screen').innerHTML=outputClone; 
            }
          

         }
        
    }
         

  function clearResult() {
          document.getElementById('screen').innerHTML='0';
          finalResult=0;
          output='';
          outputClone=''
        }

        
        
  function  result() {
      // console.log('output',output)
      // console.log('outputclone',outputClone)  
      arr=[];
      let i;

      outer:for (i=0; i<output.length; i++) {
                if (isNaN(output[i])) {
                   arr.push(output[i])
                } else {
                    if(i==output.length-1) {
                    arr.push(output[i])
                }

           inner:for (let j=i+1; j<output.length; j++) {
               if (isNaN(output[j] )) {
                 if( output[j]==".") {
                   let res=output.slice(j)
                   if(Number(res)) {
                   let a=output.slice(i)
                   arr.push(a)
                   i=j+1
                     break inner;
                   }

                   for(let z=j+1; z<output.length; z++) {
                       if(isNaN(output[z])) {
                         let a=output.slice(i,z)
                         arr.push(a)
                         i=j+1
                         break inner;     
                       }
                   }
                 } else {
                    let a=output.slice(i,j)
                    arr.push(a)
                    i=j-1
                    break inner;
                 }
             }   
         }
     }
}
// console.log('arr',arr)

if(arr[0]=="+" || arr[0]=='-') {
  arr.splice(0,2,arr[0]+arr[1])
}

  
let newArr;

addEventValue(arr)
            
    
   function addEventValue(arr) {
      if(!arr.includes('*') && !arr.includes('/') ) {
          return newArr=arr
      }
       if(arr.includes('*')) {
          arr.splice(arr.indexOf('*')-1,3,`${arr[arr.indexOf('*')-1]*arr[arr.indexOf('*')+1]}`)
       }

       if(arr.includes('/')) {
          arr.splice(arr.indexOf('/')-1,3,`${arr[arr.indexOf('/')-1]/arr[arr.indexOf('/')+1]}`)
       }
          return addEventValue(arr)
             
    }
          
        

  
     if (newArr.includes("/") || newArr.includes("*")) {
              addEventValue(newArr)
      }

      finalResult=Number(newArr[0]);
        for (let i=1; i<newArr.length;i++) {
              if(newArr[i]=='-') {
                   finalResult-=+newArr[i+1]
              } else if(newArr[i]=='+') {
                   finalResult+=+newArr[i+1]
              } 
        }

         document.getElementById('screen').innerHTML=finalResult 
         output=finalResult;
         outputClone=finalResult
         finalResult=0;
         arr=[]
} 
        
       
        
function changeSign() {
    if (Number(output)) {
      if(Number(output)<0) {
        outputClone=`${output}`
        document.getElementById('screen').innerHTML=`${output}`;
      } else {
        output=`${-Number(output)}`
        outputClone=output
        document.getElementById('screen').innerHTML=output;
        return
      } 
    }

    if((output[output.length-1])=="+") {
      output=output.slice(0,output.length-1)+'-';
      document.getElementById('screen').innerHTML=output;
      return
     } 

    if((output[output.length-1])=="-") {
      output=output.slice(0,output.length-1)+'+'
      document.getElementById('screen').innerHTML=output;
      return
     } 

    if(!isNaN(output[output.length-1])) {
      for (let i=output.length-1; i>=0; i--) {
          if (isNaN(output[i])) {
             if(output[i]=='.') continue
                
            if(output[i]=='+') {
                output=output.slice(0,i)+'-'+output.slice(i+1)
                document.getElementById('screen').innerHTML=output;
                return
            }
                 
            if (output[i]=='-') {
                output=output.slice(0,i)+'+'+output.slice(i+1)
                document.getElementById('screen').innerHTML=output;
                return
             
             } 

             if (output[i]=='/' || output[i]=='*' || output[i]=='%') {
              document.getElementById('screen').innerHTML=output;
              return
             }  
             
          }
      }
    } 
  }   
    

function calcPercent() {
  if (Number(output)) {
    output=+output/100+''
    outputClone=+outputClone/100+''
    document.getElementById('screen').innerHTML=outputClone;
    return
    }
}
  

  // adding keyboard events

   document.onkeyup=e=>{
     if(e.key=='0' || e.key=='1' || e.key=='2' || e.key=='3' || e.key=='4' || e.key=='5' || e.key=='6'
     || e.key=='7' || e.key=='8' || e.key=='9' || e.key=='.' || e.key=='-' || e.key=='+' || e.key=='/' || e.key=='*'
     ) {
       addEventValue(e.key)
     } else if (e.key=='=' || e.key=='Enter') {
       result()
     } else if (e.key=='*' || e.key=='Num*') {
      addEventValue(e.key)
     } else if (e.key=='c' || e.key=='C') {
       clearResult ()
     } else if (e.key=='%') {
       calcPercent()
     }

   }