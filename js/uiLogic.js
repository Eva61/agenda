/*
Configuramos la funcionalidad para el boton enviar, tomamos el id del boton con 
queryselector('#btnSaveFriend') y le añadimos un un evento e escuhar addEventListerner 
para que cuando hagan click se ejecute la funcion que va a guardar los datos del 
formulario
*/
document.querySelector('#btnSaveFriend').addEventListener('click', saveFriend);

//Esta funcion siempre debe estar al inico de nuestra archivo js
drawFriendsTable();

/*
creamos la funcion saveFriend() para capturar los datos del formulario le coloco una s 
delante para saver que pertenece a la funcion saveFriend()
El método querySelector () devuelve el primer elemento que coincide con un selector de 
CSS especificado en el documento.
*/
function saveFriend(){
	var sId = document.querySelector('#txtId').value,
		sName = document.querySelector('#txtName').value,
		sCountry = document.querySelector('#txtCountry').value,
		sBirthday = document.querySelector('#txtBirday').value,
		sEmail = document.querySelector('#txtEmail').value;
/*
Llamamos a la funcion agregar amigos al sistema y y por parametros le pasamos  
le pasamos los datos en el mismo orden como los recibimos
*/
	addfriendToSistem(sId,sName,sCountry,sBirthday,sEmail)

/*
Despues de haber creado un amigo debemos invocar la funcion drawFriendTable()
para que se actualice
*/
	drawFriendsTable();

}

/*
Esta funcion optiene la lista de amigos de mi logica de negocios y va a dibujar en una 
tabla los amigos agregados
Esta funcion la debemos invocar el comienzo de nuestro js y despues de haber salvado un 
amigo agregado como nuevo para que se actualice
*/
function drawFriendsTable(){
	//Almeceno la lista de amigos en la variable list
	var list = getFriendList(),
		//Ubico la celda donde voy a dibujar la filas de la tabla
		tbody = document.querySelector('#friendsTable tbody');

/*
Limpio la tabla para garantizar que esta limpia la tabla poder llenarla de información
*/
	tbody.innerHTML = '';

/*
creo una variable contadora que lleve la cuenta de todos  los amigos que tenga en este 
momento en la lista, mientras esa variable contador sea menor a la lista de amigos vamos 
a ir incrementando la variable
*/
	for(var i = 0; i < list.length; i++){
/*
creamos una variable fila que inserte datos en la posicion i osea el indice 0 y vaya 
bajando una fila a la vez
*/
		var row = tbody.insertRow(i),
			//a la fila le creamos cada una de las celdas.
			idCell = row.insertCell(0);
			nameCell = row.insertCell(1);
			countryCell = row.insertCell(2);
			birthdayCell = row.insertCell(3);
			emailCell = row.insertCell(4);
			selectCell = row.insertCell(5);

/*
Como estamos en la fila 0 obtenemos los campo del objeto y le digo que me muestro 
el id 
*/
		    idCell.innerHTML = list[i].id;
		    nameCell.innerHTML = list[i].name;//muestra nombre
		    countryCell.innerHTML = list[i].country;//muestra pais
		    birthdayCell.innerHTML = list[i].birthday;//muestra fecha de cumpleaños
		    emailCell.innerHTML = list[i].email;//muestra el correo

//creo una variable y le creo un input que se la vamos a asociar a esa celda
		    var inputSelect = document.createElement('input');
		    inputSelect.type = 'radio'; //dibujamos campo type buttom radio 
		    //Lo que me va a devolver cuando le de click es el id de esa fila
		    inputSelect.value = list[i].id; 
		    //esta line ahace que se seleccione un solo radio buttom
		    inputSelect.name = "rbtFriend";  
		    selectCell.appendChild(inputSelect);

		tbody.appendChild(row);
	}	
}


/*
para borrar el localStorage escribimos en la consola localStorage.clear(); 
y luego refrescamos el navegador
*/