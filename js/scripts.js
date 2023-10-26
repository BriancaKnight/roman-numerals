//Business

window.addEventListener("load", function() {
  document.getElementById("number").addEventListener("submit", arabicNumberStored);
  
})

function arabicNumberStored(e) {
  e.preventDefault();
  let userArabic = document.getElementById("arabicNumber").value;
  const stringUserArabic = userArabic.toString();
  console.log(stringUserArabic)
}
