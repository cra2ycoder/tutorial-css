function CSSLivePreview() {
  this.parent = null
}

CSSLivePreview.prototype.init = id => {
  console.log({ id })
  this.parent = document.getElementById(id)
  console.log(this.parent)
}
