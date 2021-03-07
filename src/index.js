module.exports = function toReadable(number) {

  let dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine',
            'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  let tw = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

 /*  if(y<2) return dg[number];
  else if(y>=2) return tw[Number(number.toString()[0])];
  if(number > 20 && number < 100){
    //if(number%10 === 0) [Number(number.toString()[0])];
     return `${tw[Number(number.toString()[0])]} ${dg[Number(number.toString()[0])]}`
  } */
  if(number < 20 ) return dg[number];
  if (number%10 !==0) return `${tw[number.toString()[0]]} ${dg[number.toString()[1]]}`;
  else if(number%10===0 && number.toString().length===2) return tw[number.toString()[0]];
  if(number.toString().length === 3){
    if(number.toString()[1]==='0' && number.toString()[2]==='0'){
      return `${dg[number.toString()[0]]} hundred`;
    } 
    
  }

}
