
//const ApiUrl = 'https://5f220e36-3655-41df-9e6d-bdddd1f7fd4c.mock.pstmn.io/housing';

        $.ajax({

            url: "assets/js/data.json",
            method: "GET",
            data: id,
            success: function () {
                console.log(id);
            }
        })
    

récupAPI(ApiUrl);

function récupAPI(url) {
    fetch(url).then(res => res.json()).then(data => {
            affichage(data);
            console.log(data);
    })
}


function affichage(data) {
    let i=1;
    data.forEach(test => {
        const { localisation, date, photo1, photo2, photo3, note, prix, id, lng, lat,ClientTapkey } = test;
        const vignette = document.createElement('div');
        vignette.classList.add('movie');
        vignette.innerHTML = `
                                  <div class="col-md-4">
    <div class="card cardmaison" style="border-style: solid;">
        <div class="card-body cardmaison" style="border-style: none;">
            <div id="carousel-${i}" class="carousel slide" data-bs-ride="false" style="width: 300px;height: 260px;margin-top: -18px;">
                <div class="carousel-inner">
                    <div class="carousel-item active"><img class="w-100 d-block" src="${photo1}" alt="Slide Image" /></div>
                    <div class="carousel-item"><img class="w-100 d-block" src="${photo2}" alt="Slide Image" /></div>
                    <div class="carousel-item"><img id="nimportequoi-4" class="w-100 d-block" src="${photo3}" alt="Slide Image" /></div>
                </div>
                <div><a class="carousel-control-prev" href="#carousel-${i}" role="button" data-bs-slide="prev"><span class="visually-hidden">Previous<span><i class="icon-arrow-right" style="color: rgb(0,0,0);padding-bottom: 0px;padding-top: 0px;font-size: 21px;"></i></span></span><span style="border-radius: 72px;background: #ffffff;font-size: 18px;border-width: 26px;padding: 0px;padding-top: 3px;padding-bottom: 2px;padding-left: 2px;padding-right: 2px;margin-top: 4px;height: 28.7969px;width: 32px;"><span><i class="icon-arrow-left" style="color: rgb(0,0,0);padding-bottom: 0px;padding-top: 0px;font-size: 21px;"></i></span></span></a><a class="carousel-control-next" href="#carousel-${i}" role="button" data-bs-slide="next"><span class="visually-hidden">Next</span><span></span><span style="border-radius: 72px;background: #ffffff;font-size: 18px;border-width: 26px;padding: 0px;padding-top: 3px;padding-bottom: 2px;padding-left: 2px;padding-right: 2px;margin-top: 4px;height: 28.7969px;width: 32px;"><span><i class="icon-arrow-right" style="color: rgb(0,0,0);padding-bottom: 0px;padding-top: 0px;font-size: 21px;"></i></span></span></a></div>
                <ol class="carousel-indicators">
                    <li class="active" data-bs-target="#carousel-${i}" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carousel-${i}" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel-${i}" data-bs-slide-to="2"></li>
                </ol>
            </div>
            <h4 class="card-title" style="font-size: 17px;font-weight: bold;width: 254px;text-align: left;">${localisation} <span><i class="fa fa-star"></i>${note}</span></h4>
            <h6 class="text-muted card-subtitle mb-2">${date}</h6>
            <h6 class="text-muted card-subtitle mb-2"><span style="font-weight: bold;">${prix}</span><br><span>par nuit</span></h6>
        </div>
    </div>
</div>
        
                `
    i++;
        document.getElementById('main').appendChild(vignette);


    })
}


