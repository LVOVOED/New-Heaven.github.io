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
	
	// Пытаемся определить местоположение пользователя
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
		            geolocationSuccess, geolocationFailure);

		result.innerHTML = "Поиск завершен";
	}
	else {
		result.innerHTML = "Ваш браузер не поддерживает геолокацию";
		goToDefaultLocation();
	}
  
  f
