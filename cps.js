function firstChar(string,ret) {
    ret(string[0]);
}  



firstChar("Babak", function write(str){console.log(str);});



function lastChar(string,ret) {
   
    ret(string[string.length-1]);
    
}  
lastChar("Babak", function write(str){console.log(str);});

function getFirstAndLast(string,ret){
    
    firstChar(string, function write(str1){
        lastChar(string, function write(str2){
            ret(str1+str2);
    
        
    });
    
        
    });
        
    
  
   
}


 getFirstAndLast("hello", function(newStr) { console.log(newStr); });