    var refImg = new Firebase("https://sweltering-fire-7944.firebaseio.com/images/" + $rootScope.authData.uid);
    var ImgObj = $firebaseObject(refImg);


    function saveimage(e1) {
        var filename = e1.target.files[0];
        var fr = new FileReader();
        fr.onload = function (res) {
            $scope.image = res.target.result;
            ImgObj.image = res.target.result;
            ImgObj.$save().then(function (val) {
            }, function (error) {
                console.log("ERROR", error);
            })
        };
        fr.readAsDataURL(filename);
    }

    document.getElementById("file-upload").addEventListener('change', saveimage, false);

    this.loadimage = function () {
        ImgObj.$loaded().then(function (obj) {
            $scope.profileImage = obj.image;
            console.log("loaded", $scope.profileImage);
            document.getElementById("profileImage").src = obj.image;
        }, function (error) {
            console.log("ERROR", error);
        });
    };
    this.loadimage();