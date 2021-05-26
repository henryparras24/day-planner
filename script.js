var timeDisplay = $('#currentDay');
var saveButton = document.querySelector('.saveBtn');


function currentDay(){

   var rightNow =  moment().format('dddd, MMMM Do YYYY');
    timeDisplay.text(rightNow);
}
setInterval(currentDay, 1000);

saveButton.addEventListener("click", storeStuff);

function storeStuff (){
    var saveButtonValue = document.querySelector('.saveBtnValue').value;
    localStorage.setItem("saveButtonValue", saveButtonValue ) ;
    


}


//document.getElementById("save").addEventListener("click", function ()
   // {
      //  var user = document.getElementById("user").value ;
        //localStorage["user"] = user ;
     //   localStorage.setItem("user", user) ;
     //   alert("gmail id saved") ;
     //   console.log("gmail id saved")
   // } , false);