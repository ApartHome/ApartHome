document.addEventListener('DOMContentLoaded', function() {
 var field =  document.getElementById('dates');
  if (field) {
    flatpickr(field, {
      mode: "range",
      minDate: "today",
      dateFormat: "d.m.Y",
      locale: "ru"
    });
  }
});
