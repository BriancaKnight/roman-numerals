//Business

window.addEventListener("load", function() {
  document.getElementById("number").addEventListener("submit", arabicNumberStored);
  
})

function arabicNumberStored(e) {
  e.preventDefault();
  let userArabic = document.getElementById("arabicNumber").value;
  const stringUserArabic = userArabic.toString();
  let numberLengthen = numberLength(userArabic);
  console.log(numberLengthen);
  }

function numberLength(userArabic) {
  if (userArabic < 3999) {
    return "good number"
  } else {
    return "pick a number less than 3999"
  }
}