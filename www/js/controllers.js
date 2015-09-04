var app = angular.module('tucocinaApp.controllers', ['LocalStorageModule']);





app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});


app.controller('pruebaHomeCtrl', function($scope, $location){
  
  $scope.pin = '';
         
  $scope.aMesa = function(){
     console.log($scope.pin);

    // // nos vamos a al siguiente estado
    $location.url('/app/mesa');
  } 
});

// CONTROLADORES DE LA APP

// controlador para la vista home, encargada de recoger el código del restaurante
app.controller('HomeCtrl', function($scope, localStorageService, $location) {

  // almaceno el código del restaurante en el local storage
  $scope.saveCodigoRestaurante = function(codigo){
    if (codigo != null) {
      localStorageService.set('codigoRestaurante', codigo);
      $location.url('/mesa');
    }else{
      $scope.respuesta_codigo = 'Ingrese el código del restaurante';
    }
  }; // fin saveCodigoRestaurante
  
});// fin HomeCtrl



// controlador para capturar el numero de la mesa y alamcenarlo en el local storage para su posterior uso
app.controller('MesaCtrl', function($scope, localStorageService, $location){

  // función para almacenar el numero de la mesa en el local storage
  $scope.mesaRestaurante = function(numMesa){
    if (numMesa != null) {
      localStorageService.set('numMesa', numMesa);
    }else{
      $scope.respuesta_mesa = 'Ingrese el numero de su mesa';
    }
  };// fin mesaRestaurante

});// fin MesaCtrl




// controlar para cargar las categorias del menu
app.controller('CategoriasCtrl', function($scope, localStorageService, Menu_categorias){

  // cargo todas las categorias al $scope para poder mostrarlas en la vista
  $scope.categorias = Menu_categorias;

  // función para guardar el id de la categoria seleccionada
  $scope.categoria_seleccionada = function(idCategoria){
    if (idCategoria != null) {
      localStorageService.set('idCategoria', idCategoria);
    }
  };// fin categoria_seleccionada

});// fin CategoriasCtrl



app.controller('pruebaMesaCtrl', function($scope, $location){
  $scope.mesa = '';

  $scope.aMenuPrincipal = function(){
    console.log($scope.mesa);

    //nos vamos al estado menuPrincipal 
    $location.url('/app/menuPrincipal');
  }

});


app.controller('pruebaMenuPrincipalCtrl', function($scope, $location){

});

