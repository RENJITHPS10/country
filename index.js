const search = async () => {
    if (result.value) {
        let response = await fetch(`https://restcountries.com/v3.1/name/${result.value}?fullText=true`)
        response.json().then(data => {
            let country = data[0]
            let flag = country.flags.png
            let name = country.name.common
            let population = country.population
            let capital = country.capital
            let region = country.region
            let area = country.area
            let border = country.borders
            let language = country.languages
            let national_language = []
            for (var lang in language) {
                national_language.push(language[lang])
            }

            for (var currency in country.currencies) {
                var currencyname = country.currencies[currency].name
                var currencysymbol = country.currencies[currency].symbol
            }
            let map = country.maps.googleMaps
            let time = country.timezones
            output.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${flag}" class="img-fluid rounded-start" alt="${name} flag">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-white">${name}</h5>
                            <ul class="list-group list-group-flush bg-transparent">
                                <li class="list-group-item bg-transparent text-white"><strong>Population:</strong> ${population}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Capital:</strong> ${capital}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Region:</strong> ${region}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Borders:</strong> ${border}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Time Zone:</strong> ${time}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Area (km²):</strong> ${area}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Languages:</strong> ${national_language}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Currencies:</strong> ${currencysymbol} ${currencyname}</li>
                                <li class="list-group-item bg-transparent text-white"><strong>Map:</strong> <a href="${map}" class="link-success" target="_blank"
                                >Google Map</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }).catch(error => {
            alert("Country not found. Please check the country name and try again.");
            console.error('Error:', error);
        });
    } else {
        alert("Please enter the country name");
    }
}