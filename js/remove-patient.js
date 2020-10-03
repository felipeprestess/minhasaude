var table = document.querySelector('#table-patients');
table.addEventListener("dblclick",function(event){
    
    if (event.target.parentNode.tagName == "TR") {
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }

});