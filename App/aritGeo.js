aritGeo: function(n) {

  var firstTerm = n[0];
  var secondTerm = n[1];
  var lastTerm = n[n.length-1];
  var commonDifference = secondTerm - firstTerm;
  var apNthTerm = firstTerm + (n.length-1) * commonDifference;
  var commonRatio = secondTerm/firstTerm;
  var gpNthTerm = firstTerm * pow(commonRatio,(n.length-1));
  if (n.length === 0){
    return 0;
  }
	if ( apNthTerm === lastTerm){
		return "Arithmetic";
	}
	else if(lastTerm === gpNthTerm){
	  return "Geometric"
	}
	else {
	  return -1;
	}
}
}
