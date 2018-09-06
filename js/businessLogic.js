//Creamos la funcionalidad para crear un amigo
//Creamos una variable que tanda toda la lista de amigos, este arreglo va a tener los diferentes objetos amigos
var friendList = [];

	/*
	creo una funcion agragar amigos al sistema que va a recibir toda la informacion del 
	rmulario que nos envia la interfaz de usuario y le pondremos por delante de la variable
	*/

function addfriendToSistem(pid, pname, pcountry, pbirthday, pemail){

	/*
	recibimos todos los campos y creamos un nuevo objeto amigo, y lo colocamos como si 
	fuera notacion de JSON (JavaScript Object Notation) es una sintaxis para serializar 
	objetos, arreglos, números, cadenas, booleanos y nulos encerrado entre llaves, 
	propiedad: valor 
	*/
	var newFriend ={
		id : pid,
		name : pname,
		country : pcountry,
		birthday : pbirthday,
		email : pemail //este no lleva como porque es el utlimo elemento
	} 

	//Compruebo los datos que estoy recibiendo del formulario con console.log()
	console.log(newFriend);
	/*
	Ahora agregamo este objeto (newFriend) amigo con sus propiedad a la lista con 
	friendList.push(), con esto la funcionalidad crear amigo ya esta lista
	*/
	friendList.push(newFriend);

	localStorageFriendList(friendList);

	/*
	Ahora vamos a la uiLogi.js para tomar los datos del formulario y enviarlos a la 
	logica del negocio
	*/
}


function getFriendList(){
	//Vamos a traer los datos del loscalStorage
	var storedList = localStorage.getItem('localFriendList');
	//Si la lsita es igual a nulo no hay datos
	if(storedList == null){
		friendList = []; //Datos vacios
	}else{
	/*
	Si hay datos lo igualamos a la lista almacenada en el localStorage
	Para que todo funcione debemos volver a colocar los datos en el formato que le 
	corresponde, eso lo hacemos con friendList = JSON.parse(storedList);
	*/
		friendList = JSON.parse(storedList); //JSON es para intercambiar datos y lo guarda como string
	}
	return friendList;
}


	/*
	Guardamos la lista en el localStorage, creamos una funcion y le pasamos por parametro 
	una lista. Esta funciona va agarrar la lsita y la va a almacenar en el localStorage
	*/
 function localStorageFriendList(plist){
 	/*
 	le decimos como lo vamoa a almacenar 'localFriendList', pero en JSON solo podemos 
 	almacenar string, convertimos la lista a texto con JSON,stringify(plist) para poderla 
 	guardar  	ya guardamos la lista en el localStorage a través de la variable 
 	localFriendList solo falta llamar a la funcion despues de agregar un amigo a la lista
 	*/
 	localStorage.setItem('localFriendList', JSON.stringify(plist));
 }