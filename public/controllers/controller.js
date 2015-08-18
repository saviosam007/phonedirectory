(function(){
var myapp=angular.module("myapp",[])

myapp.controller('appctrl',appcontroller);

function appcontroller($scope,$http){
console.log("hey yaa connected")
var refresh=function(){
$http.get('/contactlist').success(function(response){
console.log("got the data");
$scope.contactlist=response;
$scope.contact="";
});
} 
refresh();
$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
	
    refresh();
  });
};

$scope.remove=function(id){
//console.log(id);
$http.delete('/contactlist/'+ id).success(function(response) {
    console.log(response);
	refresh();
});
};

$scope.edit=function(id){
$http.get('/contactlist/'+id).success(function(response)
{
console.log(response);
$scope.contact=response;
});
}

$scope.updateContact=function(){
console.log($scope.contact._id);
$http.put('/contactlist/'+$scope.contact._id,$scope.contact).success(function(response)
{
refresh();
$scope.contact="";
});
}

}
})();