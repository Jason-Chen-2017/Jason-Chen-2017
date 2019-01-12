var data = [{
  type:'scattermapbox',
  lat:['34.03'],
  lon:['-118.15'],
  mode:'markers',
  marker: {
    size:20
  },
  text:['Los Angeles']
}]

var layout = {
  autosize: true,
  hovermode:'closest',
  mapbox: {
    bearing:0,
    center: {
      lat:34,
      lon:-118
    },
    pitch:0,
    zoom:7
  },
}

Plotly.setPlotConfig({
  mapboxAccessToken: 'pk.eyJ1IjoiZXRwaW5hcmQiLCJhIjoiY2luMHIzdHE0MGFxNXVubTRxczZ2YmUxaCJ9.hwWZful0U2CQxit4ItNsiQ'
})

Plotly.plot('worldmap', data, layout, {showSendToCloud: true})