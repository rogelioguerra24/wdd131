const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('');

button.addEventListener('click', function(){
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        
        list.append(li)    

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
    }
    input.focus();
});
/*
// Evento al hacer clic en el botón "Add Chapter"
button.addEventListener('click', function () {
  // Verificar si el input está vacío
  if (input.value.trim() !== '') {
    // Crear el elemento li
    const li = document.createElement('li');
    li.textContent = input.value.trim(); // Asignar el valor del input al li

    // Crear el botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; // Texto o símbolo para el botón
    li.appendChild(deleteButton); // Agregar el botón al li

    // Agregar el li a la lista
    list.appendChild(li);

    // Agregar el evento al botón de eliminar
    deleteButton.addEventListener('click', function () {
      list.removeChild(li); // Eliminar el li al hacer clic en el botón
      input.focus(); // Devolver el enfoque al campo de entrada
    });

    // Limpiar el campo de entrada
    input.value = '';
  }

  // Si el input está vacío, devolver el enfoque
  input.focus();
});

/*const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li)
*/