module.exports = function main(email, suffixes) {
  // Write your code here
  var emailArray = email.split("@");
  if (emailArray[1]==suffixes[0]) {
  	return true;
  }else{
  	return false;
  }
};
