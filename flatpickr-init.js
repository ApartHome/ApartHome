document.addEventListener('DOMContentLoaded', function() {
  const dateField = document.getElementById('dates');
  if (dateField) {
    flatpickr(dateField, {
      mode: "range",
      minDate: "today",
      dateFormat: "d.m.Y",
      locale: "ru"
    });
  }
});
