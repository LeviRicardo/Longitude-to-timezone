const longitude = [-34, 52, 53, "Recife"] // [Grade of Longitude, Minutes of Longitude, Seconds of Longitude, Name of the place to show on print]
const velocidade = 54000 //15 gredes per hour = 54000 seconds(Grade) pper hour = 900 minutes(Grade) per hour

//Final timezone
var total = []

//Return the absolute value of a number. Equals to |x|
function abs(x){
	return (x < 0 ? -x : x)
}


//Transforms everything to seconds
var segundos_totais = abs(longitude[0]*3600) + longitude[1]*60 + longitude[2]

//Hours
total[0] = (segundos_totais-(segundos_totais%velocidade))/velocidade

//Time left after calculating hours
var resto = segundos_totais% velocidade

//Minutes
total[1]= (resto-(resto%(velocidade/60)))/(velocidade/60)

//Time left after calculating minutes
resto = resto%(velocidade/60)

//Seconds. After calculating seconds the is still something left but that is a precision i ddon't want
total[2] = (resto-(resto%(velocidade/3600)))/(velocidade/3600)

//((resto% (velocidade/3600))/10) //That is the tenths of seconds

//Print of the timezone
console.log("O fuso horário de "+ longitude[3] + " é: " + ( longitude[0] < 0 ? total[0] *= -1 : total[0]) + ":" + total[1] + ":" + total[2])