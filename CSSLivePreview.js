function CSSLivePreview(settings) {
  this.parent = null
  this.type = settings.type || 'radio'
  this.config = settings.config
}

CSSLivePreview.prototype.createPanels = () => {
  this.parent.innerHTML = `
    <form>
      <textarea id="htmlString" />
      <textarea id="cssString" />
      <div class="options-panel">
        ${this.config.options.map(x => `<input id="${x.label}" />`)}
      </div>
    </form>
  `
}

CSSLivePreview.prototype.init = id => {
  console.log({ id })
  this.parent = document.getElementById(id)
  console.log(this.parent)
}
