function envoie(){
      $.ajax({
                       // url: "https://2e6c146a-49ab-498d-8853-8f7440125954.mock.pstmn.io/clients",
                        dataType: "json",
                        success: function (data) {
                
                            console.log(data.clients);
                            var result = data.clients;
                            var mail = document.getElementById("email").value;
                            var mdp=document.getElementById("password").value;
                            
                            for (let i = 0; i < result.length; i++) {
                                console.log(result[i]["mdp"] + " = " + mdp)
                                if (mail == result[i]["email"] && mdp==result[i]["mdp"]) {                             
                                    // window.location.href = "dashboard.html";  
                                    const url = "index.php?email=" + result[i]["email"];
                                    document.location.href = url;                         
                                    console.log(document.getElementById("mail").value);
                                    console.log(document.location.href);
                                }
                            }
                        }

                    });
                }
                envoie();
    
    
