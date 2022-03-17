document.querySelectorAll(".panel").forEach(el=>{
    el.addEventListener("click",e=>{
    	e.currentTarget.parentNode.parentNode.nextElementSibling.classList.toggle("accordion-print-active");
      if(e.currentTarget.parentNode.parentNode.nextElementSibling.classList.contains("accordion-print-active")){
        el.classList.add('changing-icon');
      } else {
        el.classList.remove('changing-icon');
      }
    });
});
