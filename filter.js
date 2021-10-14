//Search Filter
function findProject(){
  let search = document.querySelector('#search-project');
  let pages = document.querySelector('ul');
  let filter = search.value.toUpperCase();
  let li = pages.getElementsByTagName('li');
  let a, txtValue, h3;
  
  for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("h3")[0];
     txtValue = a.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
     } else{
        li[i].style.display = "none";
     }
  }
}

