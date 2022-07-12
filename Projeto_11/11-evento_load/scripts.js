window.addEventListener("load", function() {
   this.alert("Assine os termos")
})

window.addEventListener("beforeunload", function(e) {
   this.event.returnValue = null;
})