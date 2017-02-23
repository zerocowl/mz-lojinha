app.controller('produtosController', function($scope, $http) {
  $scope.produtos = [];

  //debugger;
  $http.get('json/produtos.json')
  .success(function (data) {
  		$scope.produtos = data;

  })
  .error(function(){
  		console.error('Erro ao carregar arquivo JSON');
  });
    
    


});
