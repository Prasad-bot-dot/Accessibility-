
function highlightLink(link) {
  link.style.backgroundColor = "#ffa500"; 
  link.style.color = "#ffffff"; 
}
function removeHighlight(link) {
  link.style.backgroundColor = ""; 
  link.style.color = "";          
}

function handleSubmit(event) {
  event.preventDefault(); 

  const form = event.target;
  const email = form.Email.value;
  const emailPattern = /\S+@\S+\.\S+/; 
  
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return; 
  }

  alert("Thank you! Your Donation has been Successfull");
  form.reset(); 
}