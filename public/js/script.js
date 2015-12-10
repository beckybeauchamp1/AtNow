$(document).ready(function(){

  userView.showLogin();
  userView.showSignup();
  userView.submitForm();
  userView.logOut();
  userView.clickAccountInfo();

//TODO: put in function so can call again (dont include location call
//TODO: make so can choose location
  session.getLocation.then(function(res){
    session.currentLat = res.lat;
    session.currentLong = res.long;
    session.setState('restaurant|bar');
    session.loadLocations().then(function(data){
      session.createLocationViews();
    session.loadLocations('store');
    });
  }, function(err) {
    console.log(err);
  });

  $('.restaurants').on('click', function(){
    session.setState('restaurant|bar');
    session.changeType();
  });

  $('.stores').on('click', function(){
    session.setState('store');
    session.changeType();
  });
});
