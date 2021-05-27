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
    var description = $(this).siblings(".saveBtnValue").val()
    console.log(description)
    var time = $(this).parent().attr("id")
    console.log(time)
    localStorage.setItem(time, description);
    
}

$("#time8 .saveBtnValue").val(localStorage.getItem("time8"))
$("#time9 .saveBtnValue").val(localStorage.getItem("time9"))
$("#time10 .saveBtnValue").val(localStorage.getItem("time10"))
$("#time11 .saveBtnValue").val(localStorage.getItem("time11"))
$("#time12 .saveBtnValue").val(localStorage.getItem("time12"))
$("#time1 .saveBtnValue").val(localStorage.getItem("time1"))
$("#time2 .saveBtnValue").val(localStorage.getItem("time2"))
$("#time3 .saveBtnValue").val(localStorage.getItem("time3"))
$("#time4 .saveBtnValue").val(localStorage.getItem("time4"))


function hourBlock(){
   var now = moment().hours();

   $(".row").each(function(){
      var blockTime = parseInt($(this).attr("id"))

      if (now > blockTime){
         $(this).addClass("past")
      } else if (now === blockTime){
         $(this).removeClass("past")
         $(this).addClass("present")
      } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
      }
   })

}
hourBlock();