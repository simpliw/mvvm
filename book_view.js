var view = new View({
	vm: bookViewModel,
	render:function(){
		var eles = document.querySelectorAll('[text]')
		for (var i = eles.length - 1; i >= 0; i--) {
			eles[i].innerText = eval(eles[i].getAttribute('text') +'()')
		}

	}
})

