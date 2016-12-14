var view = new View({
    vm: bookViewModel,
    render: function() {
				var text
        var eles = document.querySelectorAll('[text]')
        for (var i = eles.length - 1; i >= 0; i--) {
							text = eval(eles[i].getAttribute('text') + '()')
							if( eles[i].tagName === "LABEL" ) {
								eles[i].innerText = text
							}else if (eles[i].tagName === "INPUT" ) {
								eles[i].value = text
							}
        }
    }
})
