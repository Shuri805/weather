fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f5da1ec54f0a6fb94126041b294bd58e')
.then(response => response.json())
.then(data => {
  console.log(data)
  return data.list.weather
})

