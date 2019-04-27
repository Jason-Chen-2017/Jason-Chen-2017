function fn_compose() {

  let N = 10000;
  const A = 10;
  const B = 10;

  var frames = [
    {name: 'ln(x)/x', data: [{x: [], y: []}]}, // 0
    {name: 'ln(x)-0.3x', data: [{x: [], y: []}]}, // 1
    {name: 'xe^(-2x)', data: [{x: [], y: []}]}, // 2

  ];

  function sin(x) {
    return Math.sin(x)
  }

  function asin(x) {
    return Math.asin(x)
  }

  function cos(x) {
    return Math.cos(x)
  }

  function tan(x) {
    return Math.tan(x)
  }

  function atan(x) {
    return Math.atan(x)
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

  function ln(x) {
    return Math.log(x)
  }

  function exp(x) {
    return Math.exp(x)
  }


  for (let i = 0; i < N; i++) {
    let t = 10 * A * (-1 + i / N * 2);

    // ln(x)/x
    frames[0].data[0].x[i] = t;
    frames[0].data[0].y[i] = ln(t) / t;

    // ln(x)-0.3x
    frames[1].data[0].x[i] = t;
    frames[1].data[0].y[i] = ln(t) - 0.3 * t;

    // xe^(-2x)
    frames[2].data[0].x[i] = t;
    frames[2].data[0].y[i] = t * exp(-2 * t);

  }


  Plotly.plot('fn_compose', // 'id'
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
          {method: 'animate', args: [['ln(x)/x']], label: 'ln(x)/x'},     //0
          {method: 'animate', args: [['ln(x)-0.3x']], label: 'ln(x)-0.3x'}, //1
          {method: 'animate', args: [['xe^(-2x)']], label: 'xe^(-2x)'}//2
        ]
      }]
    }, // layout
    {
      displayModeBar: true,
      autosizable: true,
      scrollZoom: true,
      showTips: true
    } // context

  ).then(function () {
      Plotly.addFrames('fn_compose', frames);
    }
  );
}

fn_compose();