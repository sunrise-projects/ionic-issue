 app.controller('MyCtrl', function($scope, $timeout, $cordovaFileTransfer) {
  
$scope.uploadFile = function() {
     var url = "http://192.168.1.109/uploads/upload.php";
     //target path may be local or url
     var targetPath = "http://192.168.1.109/images/my.png";
      var filename = targetPath.split("/").pop();
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "image/png"
        };
        $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
            alert("success");
            alert(JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
            alert(JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
            $timeout(function () {
            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
          })
        });
    }
});