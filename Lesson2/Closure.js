function circle(){
  var radius = 7;

    function getRadius(){
      console.log(radius);
    }
    return getRadius;
}

var oo = circle();
oo();
