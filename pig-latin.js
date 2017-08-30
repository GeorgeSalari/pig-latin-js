function getPigLatin() {

  //get the word input by the user
  var str = document.getElementById("word").value;
  var array =[];
  var before_match = "";
  var after_match = "";
  str.split(" ").map(function(word){
    if (word.match(/[aeiouy]/) == word[0]) {
      array.push(word + "way");
    } else {
      var match = word.match(/[aeiouy]/);
      var position = word.indexOf(match[0]);
      for (var i = 0; i < position; i++){
        before_match += word[i];
      }
      for (var i = (position + 1); i < word.length; i++ ){
        after_match +=word[i];
      }
      array.push(match + after_match + before_match + "ay")
      before_match = "";
      after_match = "";
    }
  })


  //your code goes here

  //change the HTML content of a <p> element with id="pig-latin-word":
  document.getElementById("pig-latin-word").innerHTML = array.join(" ");

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});
