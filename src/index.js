module.exports = function check(str, bracketsConfig) {
                                //console.log(str);
                                //console.log(bracketsConfig);
                                //console.log('length ' + str.length);
  let compareSource = [];
  if (str.length % 2 !== 0) {
    return false;
  }
                            // console.log(bracketsConfig.length, 'brLength')
  for (let key in bracketsConfig){
    for (let item in bracketsConfig[key]){
                           //console.log((bracketsConfig[key])[item], 'item')
      compareSource.push((bracketsConfig[key])[item])
    }
  }
  let csl = compareSource.length
                                    // console.log(compareSource, 'compareSource', compareSource.length, typeof(compareSource.length))
  str = str.split('')
  //console.log('length ' + str.length);
  let counter = 0;
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < compareSource.length; j = j + 2){  
      if ((str[0] == compareSource[j] ) && str[2] == compareSource[j+1]){
        return false;
        }
    }
  }

    for (let i = 0; i < str.length; i++){
      for (let j = 0; j < compareSource.length; j = j + 2){
        if (str[i] == compareSource[j]){
          counter++
        } else if (str[i] == compareSource[j+1]) {
          counter--
        } 

      }
      if (counter < 0) {
        return false;
      }
    }
    

  return true;


}
/* внизу код частично рабочий до пометки конец кода
  while (str.length > 0) {
    for (let i = 0; i < str.length; i++){
      //console.log(str.length, 'let start')
      for (let j = 0; j < compareSource.length; j = j + 2){
        if ( (csl > 2) && (str[i] == compareSource[j+1] && str[i+1] == compareSource[j])){
          return false;
        }
        if ((str[0] == compareSource[j] && str[i+2] == compareSource[j+1])){
          return false;
        }
        if ( (csl > 2) &&(str[i] == compareSource[j] && str[i+2] == compareSource[j+1])){
          return false;
        }
        
        if (str[i] == compareSource[j] && str[i+1] == compareSource[j+1]){
          if (str.length == 2){
            return true;
          }
          str.splice(i, 2);
        }
        
      }
    }
    
    
  }
  //return true;
  console.log(str.length, str, 'str after while')
}
конец кода */