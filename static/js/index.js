function showSection(id) {
    // Seleccionar secciones por ID
    var networks_section = document.getElementById("Networks_");
    var myresearches_section = document.getElementById("My_Research"); // Corregido
    var myworks_section = document.getElementById("My_Work");
    var selected_section = document.getElementById(id);
    
    // Ocultar todas las secciones
    networks_section.style.display = "none";
    myresearches_section.style.display = "none";
    myworks_section.style.display = "none";
    
    // Mostrar la sección seleccionada
    if (selected_section.style.display === "none" || selected_section.style.display === "") {
        selected_section.style.display = "inline-block";
    }
}
