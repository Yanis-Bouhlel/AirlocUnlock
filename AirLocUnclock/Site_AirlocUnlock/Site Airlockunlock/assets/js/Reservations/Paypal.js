    
paypal.Buttons({
    createOrder: function (data,actions){
        var Prix = localStorage.getItem("PrixStock");
        console.log("ok etape 1");
        return actions.order.create({
            purchase_units:[{
                amount: {
                    value : parseInt(Prix),
                }
            }]
        });
    },
        onApprove: function (data,actions){
        return actions.order.capture().then(function (details){
            console.log( "ok etape 2");
            alert('transaction effectué');
            //getId() ; 
        });
        }
}).render('#paypal-button-container');