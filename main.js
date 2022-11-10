// 1. Crea una variable llamada mouseEvent, su valor debe ser "empty"

var mouseEvent = "empty"; 



var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
    
// 3. Agrega color a la variable color
color = "#1e5878 ";

// 4. Agrega el ancho para el pincel
width_of_line =  8  ;

// 5. Crea el evento addEventListener para el canvas al presionar el mouse
canvas.addEventListener( "mousedown", my_mousedown);

function my_mousedown(e)
    {
        //6. A la variable color, cambia el valor para que sea el mismo que el usuario coloque en el text input de html

        color = document.getElementById("color").value;

        //7. A la variable width_of_line, cambia el valor para que sea el mismo que el usuario coloque en el text input de html
        width_of_line = document.getElementById("width_of_line").value;
        
        mouseEvent = "mouseDown";
    }

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //8. Completa el comando if para verificar si el evento es verdadero con "mouseDown"

        if (  mouseEvent        ==  "mouseDown"     ) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        //9. Mueve a ctx a la ÚLTIMA coordenada en x y y del mouse
        ctx.moveTo(last_position_of_x, last_position_of_y);

        //10. Mueve a ctx a la coordenada ACTUAL en x y y del mouse
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

// 11. Crea el evento addEventListener para el canvas al SOLTAR el mouse
canvas.addEventListener( "mouseUP",my_mouseup);

    function my_mouseup(e){
        mouseEvent = "mouseUP";
    }

 // 12. Crea el evento addEventListener para el canvas al posicionar el mouse fuera del canvas
canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


//Función para limpiar el canvas
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
