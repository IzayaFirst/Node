function say(){
  console.log('this is say');
}

function said(thing){
  thing();
}
said(say);
