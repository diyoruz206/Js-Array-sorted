// First HomeWork
function App(homePage){
    let arr = homePage.split('')
    let newWork = arr.sort().join('')

  if (newWork.includes('oo')== true && newWork.includes('xx') == true ){
  console.log('True');
  }else{
    console.log('False');
  }
    console.log(newWork);

}
App('ohghjo')



//Second Homework
// let names = ['G', 'V', 'A', 'B', 'E', 'H', 'F','D']
// function working (){
//     let sortedNames = names.sort().join('')
//     console.log(sortedNames);
// }
// working();
