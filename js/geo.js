var results;
var map;

window.onload = function() {
    result = document.getElementById('result');
	
	// Устанавливаем некоторые параметры карты. В данном примере 
	// устанавливаются начальный уровень масштабирования и тип карты. 
	// Информацию о других параметрах см. в документации по Google Maps.
	var myOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	
	// Создаем карту, используя установленные выше параметры
	map = new google.maps.Map(document.getElementById("mapSurface"), myOptions);
	
	var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	title:"Hello World!" 
});
