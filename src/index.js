
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArray =[];
    if(typeof matrix =='undefined' ){ return [];}
    else{
      if(matrix.length==0 ){
        return [];
      }else{
        let count=0;
        
       matrix.forEach(function(element){
          count++;
          if(count%2==0){
            element = element.reverse() ;
          }
          element.forEach(function(el){
                  resultArray.push(el);
          })
       })      
        return resultArray;
      }
  }
}
