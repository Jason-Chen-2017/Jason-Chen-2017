let N = 100000;
const A = 20;
const B = 20;

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
  {name: 'heart(x)', data: [{x: [], y: []}]}, // 13
  {name: 'x*sin(x)', data: [{x: [], y: []}]}, // 14
  {name: 'sin(x)/x', data: [{x: [], y: []}]}, // 15
];

function sin(x) {
  return Math.sin(x)
}

function cos(x) {
  return Math.cos(x)
}

function tan(x) {
  return Math.tan(x)
}

function sqrt(x) {
  return Math.sqrt(x)
}

function abs(x) {
  return Math.abs(x)
}

function acos(x) {
  return Math.acos(x)
}

/**
 * f = a^b
 * @param a
 * @param b
 * @returns {number}
 */
function pow(a, b) {
  return Math.pow(a, b)
}

for (let i = 0; i < N; i++) {
  let t = 10 * A * (-1 + i / N * 2);

  // A sine wave:
  frames[0].data[0].x[i] = t;
  frames[0].data[0].y[i] = A * Math.sin(t);

  // A cosine wave:
  frames[1].data[0].x[i] = t;
  frames[1].data[0].y[i] = A * Math.cos(t);

  // A circle:
  frames[2].data[0].x[i] = A * Math.sin(t);
  frames[2].data[0].y[i] = A * Math.cos(t);

  // 2^x:
  frames[3].data[0].x[i] = t;
  frames[3].data[0].y[i] = Math.pow(2, t);

  // e^x:
  frames[4].data[0].x[i] = t;
  frames[4].data[0].y[i] = Math.exp(t);

  // (1/2)^x:
  frames[5].data[0].x[i] = t;
  frames[5].data[0].y[i] = Math.pow(.5, t);

  // x^2:
  frames[6].data[0].x[i] = t;
  frames[6].data[0].y[i] = Math.pow(t, 2);


  // x^1/2:
  frames[7].data[0].x[i] = t;
  frames[7].data[0].y[i] = Math.pow(t, .5);

  // log(x):
  frames[8].data[0].x[i] = t;
  frames[8].data[0].y[i] = Math.log(t);

  // tan(x):
  frames[9].data[0].x[i] = t;
  frames[9].data[0].y[i] = Math.tan(t);
  // asin(x):
  frames[10].data[0].x[i] = t;
  frames[10].data[0].y[i] = A * Math.asin(t);
  // acos(x):
  frames[11].data[0].x[i] = t;
  frames[11].data[0].y[i] = A * Math.acos(t);

  // atan(x):
  frames[12].data[0].x[i] = t;
  frames[12].data[0].y[i] = A * Math.atan(t);

  // heart(x):
  frames[13].data[0].x[i] = 16 * pow(sin(t), 3);
  frames[13].data[0].y[i] = 13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t);
  // x*sin(x):
  frames[14].data[0].x[i] = t;
  frames[14].data[0].y[i] = t * sin(t);
  // sin(x)/x:
  frames[15].data[0].x[i] = t;
  frames[15].data[0].y[i] = sin(t) / t;

}

// Plotly.newPlot('id', data, layout, context);

Plotly.plot('fn', // 'id'
  [{
    x: frames[0].data[0].x,
    y: frames[0].data[0].y,
    line: {simplify: true},
  }], // data
  {
    xaxis: {range: [-A, A]},
    yaxis: {range: [-B, B]},
    updatemenus: [{
      buttons: [
        {method: 'animate', args: [['sine']], label: '正弦函数: sine'},     //0
        {method: 'animate', args: [['cosine']], label: '余弦函数: cosine'}, //1
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
        {method: 'animate', args: [['heart(x)']], label: '心形函数: heart(x)'},//13
        {method: 'animate', args: [['x*sin(x)']], label: '函数: x*sin(x)'},//14
        {method: 'animate', args: [['sin(x)/x']], label: '函数: sin(x)/x'},//15
      ]
    }]
  }, // layout
  {
    displayModeBar: true,
  } // context

).then(function () {
    Plotly.addFrames('fn', frames);
  }
);