	function addNode(parent, textval) { 
		var i;
		var tempnode;
		var nodelist = this.nodelist;		//'This' refer to the tree object!

		i = nodelist.length;

		nodelist[i] = new nodeStruct;

		nodelist[i].index = i;
		nodelist[i].trid = this.name + "_" + i;
		nodelist[i].imgOnClick = "onclick='" + this.name + ".expand("+i+")'";
		nodelist[i].nodeOnClick = "onclick='" + this.name+".onTreeNodeClick("+i+", event)'";

		nodelist[i].parent = parent;

		nodelist[i].text = trim(textval);
		nodelist[i].fetched = !this.needFetch;


		//not root node
		if (i > 0) {
			//the node's parent has no any child
			if (nodelist[parent].child == -1) {
			    //alert(i+":parent none child");
				nodelist[parent].child = i;
				nodelist[parent].last = i;
			//the node's parent has child
			} else {
				//get the curr parent' last child
				//alert(i+":parent have child");
				tempnode = nodelist[nodelist[parent].last];
				//alert(tempnode+":"+i);
				//set the old last's sibling
				tempnode.sibling = i;
				//set the new last
				nodelist[parent].last = i;
			}
		}
	}

	function nodeStruct() {
		this.index = 0;
		this.parent = -1;
		this.parentKey = "";
		this.sibling = -1;				//sibling index; -1
		this.last = -1				// the last child
		this.child = -1;				// -1 represent no child;
		this.trid = "";
		this.imgOnClick = "";
		this.nodeOnClick = "";
		this.text = "";
		this.folded = true;
		this.fetched = true;
	}

	function tree(name, needFetch){
		this.nodelist=new Array();
		this.name = name;
		
		if (needFetch)
			this.needFetch = needFetch;
		else
			this.needFetch = false;

		this.selected = -1;


		//function
		this.addNode=addNode;
		this.write=write;
		this.expandNode=expandNode;
		this.expand=expand;
		this.fetchTreeData = fetchTreeData;
		this.onTreeNodeClick = onTreeNodeClick;
		this.deleteNode = deleteNode;

		this.addNode(-1, "root", "##_root_##");
		this.nodelist[0].fetched=true;
	}


	function expand(TableID) {
		var tempnode=this.nodelist[TableID];
		var nowimg;
		var SvId; 

		if (this.needFetch && !tempnode.fetched) { 
			this.fetchTreeData(TableID);
			tempnode.fetched = true;
		}
        
        
		tempnode.folded = !tempnode.folded;

		if(tempnode.folded==false) {  
			if(tempnode.child!=-1) {			//has child
				if(tempnode.index==0)			//first one!
					if(tempnode.sibling==-1)
						nowimg=gVars.singledownImg;
					else
						nowimg=gVars.minusupImg;
				else
					if(tempnode.sibling==-1)			//last one!
						nowimg=gVars.minusdownImg;
					else
						nowimg=gVars.minusImg;
				if(tempnode.index!=0) { 
					document.getElementById(tempnode.trid).style.display = "";		//To display
					document.getElementById("img_" + tempnode.trid).src = nowimg;
				}
			}
		} else {
			if(tempnode.child!=-1) {
				if(tempnode.index==0)			//first one!
					if(tempnode.sibling==-1)
						nowimg=gVars.singleupImg;
					else
						nowimg=gVars.plusupImg;
				else
					if(tempnode.sibling==-1)			//last one!
						nowimg=gVars.plusdownImg;
					else
						nowimg=gVars.plusImg;
						
				document.getElementById(tempnode.trid).style.display = "none";		//To hide
				document.getElementById("img_" + tempnode.trid).src = nowimg;		//Can't put at the bottom Coz the nowimg can be empty!
			}
		}
  }

  function write() {

  	for (var i = 0; i < this.nodelist.length;i ++) {
		if (this.nodelist[i])
			this.nodelist[i].folded = true;
	}


	if (this.nodelist.length > 1) {
		var html = new StringBuffer(1000);
		
		writelevel(this.nodelist[this.nodelist[0].child], 1, this, this.name, this.needFetch, html);

		document.write(html); //
	}

  }

	function expandNode(TableID) { 
		var tempTableObj = document.getElementById(this.name + "_"+ TableID.toString());
		if (TableID == 0) return;
		if (tempTableObj)
			this.expand(TableID);
		var tempnode = this.nodelist[TableID];
		this.expandNode(tempnode.parent);
	}

	function onTreeNodeClick(index, event) {
		if (typeof this.onfocus == "function") {
			this.onfocus(document.getElementById("td_"+this.name+"_"+index),
						 document.getElementById("td_"+this.name+"_"+this.selected),
						 event,
						 index);
		}

		if (typeof this.onclick == "function")
			this.onclick(document.getElementById("td_"+this.name+"_"+index),
						 event,
						 index);

	}

	function fetchTreeData(index) { return ;
		frmObj = document.getElementsByName("iFrameTree_" + this.name)[0];
		frmObj = document.getElementsByName(this.name)[0];
		src = frmObj.src;
		start = src.indexOf("globe.tree.parent");
		if (start != -1) {
			end = src.indexOf("&", start);
			end = (end==-1)?"":src.substring(end);
			src = src.substring(0, start+18) + this.nodelist[index].primaryKey + end;

		} else {
			src += "&globe.tree.parent=" + this.nodelist[index].primaryKey;
		}
		frmObj.src = src;
	}

	function deleteNode(index) {
		if (this.nodelist[index]) {
			//not the first node
			if (this.nodelist[this.nodelist[index].parent].child != index) {
				//the parent node
				temp = this.nodelist[this.nodelist[this.nodelist[index].parent].child];
				//find the index node's pre node
				while (temp.sibling != index)
					temp = this.nodelist[temp.sibling];
				//set the temp node's sibling is the index nodes' sibling
				temp.sibling = this.nodelist[index].sibling;
				//if index node is the last node
				if (temp.sibling == -1) {
					this.nodelist[this.nodelist[index].parent].last = temp.index;
				}
			//is the first node
			} else {
				//set the parent's child is the index node's sibling
				this.nodelist[this.nodelist[index].parent].child = this.nodelist[index].sibling;
				//if index node is the last node
				if (this.nodelist[index].sibling == -1) {
					this.nodelist[this.nodelist[index].parent].last = -1
				}
			}
			var parent = this.nodelist[index].parent;
			//delete the index node
			this.nodelist[index] = this.nodelist[-1];
		}

	//	this.write();
	//	this.expandNode(parent);
	}
	
  var gVars=new globalVars("images/");

  function writelevel(tempnode, level, treeNodes, treeNodesName, needFetch, html) {
	var endsibling;
	var nowimg, i, j, temp;
	var nodelist = treeNodes.nodelist;

	html.append("<TABLE CELLPADDING=0 CELLSPACING=0>");
	
	var k = 0;

	do{
		if(tempnode.child==-1) {
		  if(tempnode.index==0) {			//first one!
			 if (needFetch && !tempnode.fetched)
			 	nowimg=gVars.plusupImg;
			 else
			 	nowimg=gVars.blankupImg;
		  } else {
		    if(tempnode.sibling==-1) {			//last one!
		    	if (needFetch && !tempnode.fetched)
		  	  		nowimg=gVars.plusdownImg;
		  	  	else
		  	  		nowimg=gVars.blankdownImg;
            } else {
            	if (needFetch && !tempnode.fetched)
			  	  	nowimg=gVars.plusImg;
			  	else
			  		nowimg=gVars.blankImg;
			}
		  }
		} else
		  if(tempnode.index==0)			//first one!
   		   if(tempnode.sibling=-1)		//Only one
		     nowimg=gVars.singleupImg;
		   else
			 nowimg=gVars.plusupImg;
		  else
		    if(tempnode.sibling==-1)			//last one!
		  	  nowimg=gVars.plusdownImg;
            else
		  	  nowimg=gVars.plusImg;

		html.append("<TR><TD NOWRAP>");
		
		for(i=1;i<level;i++)
		{
		  temp = tempnode;
		  for(j=0;j<level-i-1;j++)
			temp = nodelist[temp.parent];

		  if(nodelist[temp.parent].sibling!=-1)
			html.append(gVars.lineImgNode);
		  else
			html.append(gVars.emptyImgNode);
		}

		html.append("<IMG ID='img_" + tempnode.trid + "' SRC='" + nowimg + "' "+ tempnode.imgOnClick +" WIDTH=16 HEIGHT=18 Border=0 style='cursor:hand'>");
		html.append("</TD><TD WIDTH='100%' NOWRAP ID='td_" + tempnode.trid + "' " + tempnode.nodeOnClick + ">");

		if (tempnode.text) {  
			html.append(tempnode.text);
		}

		html.append("</TD></TR>");

	    if(tempnode.child != -1) {  //have child
	    	tempnode.fetched = true;  
			html.append("<TR ID=" + tempnode.trid +" style='display:none'><TD COLSPAN=2 NOWRAP>");
			writelevel(nodelist[tempnode.child],level+1,treeNodes,treeNodesName,needFetch,html);
			html.append("</TD></TR>");
		}

		endsibling = tempnode.sibling;
		tempnode = nodelist[tempnode.sibling];


	} while (endsibling != -1);

	html.append("</TABLE>");


  }
	function globalVars(imagedir){

		// Sets the global variables for the script.
		// These may be changed to quickly customize the tree's apperance

		//Imgages
		this.imagedir=imagedir;

		this.plusImg = this.imagedir + "plus.gif";
		this.plusdownImg = this.imagedir + "plusdown.gif";
		this.plusupImg = this.imagedir + "plusup.gif";

		this.singleupImg = this.imagedir  + "singleup.gif";
		this.singledownImg = this.imagedir  + "singledown.gif";

		this.minusImg = this.imagedir  + "minus.gif";
		this.minusupImg = this.imagedir  + "minusup.gif";
		this.minusdownImg = this.imagedir  + "minusdown.gif";

		this.blankImg = this.imagedir + "blank.gif";
		this.blankupImg = this.imagedir + "blankup.gif";
		this.blankdownImg = this.imagedir + "blankdown.gif";

		this.emptyImg = this.imagedir + "empty.gif";
		this.emptyImgNode = "<IMG SRC='" + this.emptyImg + "' WIDTH=16 HEIGHT=18 Border=0>";
		this.lineImg = this.imagedir + "line.gif";
		this.lineImgNode = "<IMG SRC='" + this.lineImg + "' WIDTH=16 HEIGHT=18 Border=0>";
	}