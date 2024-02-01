document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#adDate", {
    dateFormat: "Y-m-d",
  });

  var adDateInput = document.getElementById("adDate");
  var convertedBsDateOutput = document.getElementById("convertedBsDate"); 
  var bsDateInput = document.getElementById("bsDate");
  var convertedAdDateOutput = document.getElementById("convertedAdDate"); 

  adDateInput.addEventListener("change", function () {
    var selectedADDate = adDateInput.value;
    var bsDate = NepaliFunctions.AD2BS(selectedADDate, "YYYY-MM-DD", "YYYY-MM-DD");
    bsDateInput.value = bsDate;
  });
  
 bsDateInput.nepaliDatePicker({
  onChange: function (selectedBSDate) {
    var adDate = NepaliFunctions.BS2AD(selectedBSDate.object, "YYYY-MM-DD");
    var formattedADDate = adDate.year + "-" + adDate.month + "-" + adDate.day;

    adDateInput.value = formattedADDate;
  },
});

  
});
