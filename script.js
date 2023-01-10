const userTab = document.getElementById('cambia-viola')
const header = document.getElementsByTagName('header')[0] 

userTab.addEventListener('click', () => {
	if (header.classList.contains('darker')) {
		header.classList.remove('darker')
	} else {
		header.classList.add('darker')
	}
})
function toggleText(id) {
    var text = document.getElementById(id);
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }