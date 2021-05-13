const sirvURL = 'https://cra2ycoder.sirv.com/'

const plugins = [
  function (hook, vm) {
    hook.ready(function () {
      console.log(document.getElementById('css-attributes'))

      // new Zooming({
      //   // options...
      // }).listen('.img-zoomable')
    })
  },
]
