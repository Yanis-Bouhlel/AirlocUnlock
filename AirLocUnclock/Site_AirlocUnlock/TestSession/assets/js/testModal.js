  var reserverBtn = document.getElementById('buttonM');
  reserverBtn.addEventListener('click', function() {
    var reserverModal = new bootstrap.Modal(document.getElementById('modal-1'));
    reserverModal.show();
  });


  var ButtonPaypal = document.getElementById('ButtonPaypal');
  ButtonPaypal.addEventListener('click', function() {
    var PaypalModal = new bootstrap.Modal(document.getElementById('modal-2'));
    PaypalModal.show();
  });

