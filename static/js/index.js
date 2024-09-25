sections = ["Networks_", "My_Research", "My_Work"]


function showSection(id) {
    for (var i =0; i < sections.length; i++){
        if (id == sections[i]){
            var selected_section = document.getElementById(id)
        }else{
            document.getElementById(sections[i]).style.display = "none";
        }
    }
   
    // Mostrar la sección seleccionada
    if (selected_section.style.display === "none" || selected_section.style.display === "") {
        selected_section.style.display = "inline-block";
    }
    else {
        selected_section.style.display = "none";
    }

}
