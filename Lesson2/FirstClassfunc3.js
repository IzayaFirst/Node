function say(){
  return function said(){
    console.log('this is said');
  }
}

var action = say();
action();
