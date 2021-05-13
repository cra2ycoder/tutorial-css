const sirvURL = 'https://cra2ycoder.sirv.com/'

const plugins = [
  function (hook, vm) {
    hook.doneEach(function () {
      if (typeof CSSLivePreview === 'function') {
        new CSSLivePreview().init('css-attributes')
      }
    })
  },
]
