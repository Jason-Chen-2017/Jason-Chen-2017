var frames = [
  {name: 'sine', data: [{x: [], y: []}]}, // 0
  {name: 'cosine', data: [{x: [], y: []}]}, // 1
  {name: 'circle', data: [{x: [], y: []}]}, // 2
  {name: '2^x', data: [{x: [], y: []}]},// 3
  {name: 'e^x', data: [{x: [], y: []}]},// 4
  {name: '(1/2)^x', data: [{x: [], y: []}]},// 5
  {name: 'x^2', data: [{x: [], y: []}]}, // 6
  {name: 'x^1/2', data: [{x: [], y: []}]}, // 7
  {name: 'ln(x)', data: [{x: [], y: []}]}, // 8
  {name: 'tan(x)', data: [{x: [], y: []}]}, // 9
  {name: 'asin(x)', data: [{x: [], y: []}]}, // 10
  {name: 'acos(x)', data: [{x: [], y: []}]}, // 11
  {name: 'atan(x)', data: [{x: [], y: []}]}, // 12
];

var n = 1000;
for (var i = 0; i < n; i++) {
  var t = i / (n - 1) * 2 - 1;
  let a = t * 10;

  // A sine wave:
  frames[0].data[0].x[i] = a;
  frames[0].data[0].y[i] = Math.sin(a);

  // A cosine wave:
  frames[1].data[0].x[i] = a;
  frames[1].data[0].y[i] = Math.cos(a);

  // A circle:
  frames[2].data[0].x[i] = Math.sin(a);
  frames[2].data[0].y[i] = Math.cos(a);

  // 2^x:
  frames[3].data[0].x[i] = a;
  frames[3].data[0].y[i] = Math.pow(2, a);

  // e^x:
  frames[4].data[0].x[i] = a;
  frames[4].data[0].y[i] = Math.exp(a);

  // (1/2)^x:
  frames[5].data[0].x[i] = a;
  frames[5].data[0].y[i] = Math.pow(.5, a);

  // x^2:
  frames[6].data[0].x[i] = a;
  frames[6].data[0].y[i] = Math.pow(a, 2);


  // x^1/2:
  frames[7].data[0].x[i] = a;
  frames[7].data[0].y[i] = Math.pow(a, .5);

  // log(x):
  frames[8].data[0].x[i] = a;
  frames[8].data[0].y[i] = Math.log(a);

  // tan(x):
  frames[9].data[0].x[i] = a;
  frames[9].data[0].y[i] = Math.tan(a);
  // asin(x):
  frames[10].data[0].x[i] = a;
  frames[10].data[0].y[i] = Math.asin(a);
  // acos(x):
  frames[11].data[0].x[i] = a;
  frames[11].data[0].y[i] = Math.acos(a);
  // atan(x):
  frames[12].data[0].x[i] = a;
  frames[12].data[0].y[i] = Math.atan(a);

}

Plotly.plot('graph', [{
  x: frames[0].data[0].x,
  y: frames[0].data[0].y,
  line: {simplify: false},
}], {
  xaxis: {range: [-10, 10]},
  yaxis: {range: [-3, 3]},
  updatemenus: [{
    buttons: [
      {method: 'animate', args: [['sine']], label: '正弦函数: sine'},     //0
      {method: 'animate', args: [['cosine']], label: '余弦函数: cosine'},  //1
      {method: 'animate', args: [['circle']], label: '圆形函数: circle'},//2
      {method: 'animate', args: [['2^x']], label: '指数函数: 2^x'},//3
      {method: 'animate', args: [['e^x']], label: '指数函数: e^x'},//4
      {method: 'animate', args: [['(1/2)^x']], label: '指数函数:(1/2)^x'},//5
      {method: 'animate', args: [['x^2']], label: '幂函数: x^2'},//6
      {method: 'animate', args: [['x^1/2']], label: '幂函数: x^1/2'},//7
      {method: 'animate', args: [['ln(x)']], label: '对数函数(底为e): ln(x)'},//8
      {method: 'animate', args: [['tan(x)']], label: '正切函数: tan(x)'},//9
      {method: 'animate', args: [['asin(x)']], label: '反正弦函数: asin(x)'},//10
      {method: 'animate', args: [['acos(x)']], label: '反余弦函数: acos(x)'},//11
      {method: 'animate', args: [['atan(x)']], label: '反正切函数: atan(x)'},//12
    ]
  }]
}, {displayModeBar: false}).then(function () {
  Plotly.addFrames('graph', frames);
});