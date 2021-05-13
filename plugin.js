const plugins = [
  function (hook, vm) {
    hook.doneEach(function () {
      console.log('yessss')
      try {
        if (typeof CSSLivePreview === 'function') {
          new CSSLivePreview({
            config: {
              options: ['[attr]', '[attr=val]', '[attr~=val]'],
            },
          }).init('css-attributes')
        }
      } catch (e) {
        console.log({ e })
      }
    })
  },
]
