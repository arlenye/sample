    function clickIt() {
    	if (expanded) {
    		collapse();
    		expanded = false;
    	} else {
    		expand();
    		expanded = true;
    	}
    }
    
    function expand() {
        if (top.document.getElementById("main") && top.document.getElementById("main").cols) {
            top.document.getElementById("main").cols = "200,*";
        }
        document.getElementById("ctl").title = "hide";
        document.getElementById("ctlimg").src = "images/collapse.gif";
    }

    function collapse() {
        if (top.document.getElementById("main") && top.document.getElementById("main").cols) {
            top.document.getElementById("main").cols = "8,*";
        }
        document.getElementById("ctl").title = "show";
        document.getElementById("ctlimg").src = "images/expand.gif";
    }

	function change(id) {
		if (document.getElementById[id]) {
			if (document.getElementById(id).style.display == "none")
				document.getElementById(id).style.display="block";
			else
				document.getElementById(id).style.display="none";
		}
	}