    paypal.Buttons({
    createOrder: function (data,actions){
        console.log("ok etape 1");
        return actions.order.create({
            purchase_units:[{
                amount: {
                    value : '0.05'
                }
            }]
        });
    },
        onApprove: function (data,actions){
        return actions.order.capture().then(function (details){
            console.log( "ok etape 2");
            alert('transaction effectué');

            });
        }
}).render('#paypal-button-container');