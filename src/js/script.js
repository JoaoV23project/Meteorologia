const apiKey = '33c601ea5297261d5a593f21dca3f00f';
async function buscarTemperatura() {
    var city = document.getElementById('cidade').value;
    const clima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`).then((Response) => Response.json());
    mostrartemp(city, clima);
}
function mostrartemp(city, clima) {
    document.getElementById('resultado').style.display = 'block';
    let temperatura = clima.main.temp;
    let condicao = clima.weather[0].description;
    let umidade = clima.main.humidity;
    document.getElementById('tempo').textContent = `Tempo ${city}`;
    document.getElementById('temperatura').textContent = `${temperatura}ºC`;
    document.getElementById('condicao').textContent = `${condicao}`;
    document.getElementById('umidade').textContent = `Umidade: ${umidade}%`;
}