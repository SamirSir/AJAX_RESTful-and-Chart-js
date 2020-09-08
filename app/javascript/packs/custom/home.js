

$(function(){
	// Calling api for data rendering and displaying
	var orderList = $("#orders");	
	$.ajax({
		type: 'GET',
		url: "/orders.json",
		success: function(orders){
			$.each(orders, function(i, order){
				orderList.append("<li><i> Name: <b>"+ order["name"]+"</b>, Drink: <b>"+order.drink+"</b></i><button class='remove' data-id="+order["id"]+">X</button></li>");
			});
		},
	});

	// posting data into order table and displaying with nested AJAX
	$("#add-order").on("click", function(){
		var orderName = $("p #name").val();
		var orderDrink = $("p #drink").val();
		var order = {name: orderName, drink: orderDrink};
		$.ajax({
			url: "/orders/new_order",
			dataType: "json",
			type: "post",	
			data: order,
			success: function(response){
				$(orderList).append("<li><i> Name: <b>"+ response.order.name+"</b>, Drink: <b>"+response.order.drink+"</b></i></li>");
			},
			error: function(){
				alert("data halda error bhayo");
			},
		});
	});

	// deleting order using delegaate function inside the order child: 

	$(orderList).delegate(".remove", "click", function(){
		var self =  $(this);
		var parentLi =  $(this).closest("li");

		$.ajax({
			url: '/orders/'+$(self).attr('data-id'),
			type: "delete",
			success: function(){
				$(parentLi).fadeOut(300, function(){
					$(parentLi).remove();
				});
			},
		});
	});


	// editing the order manual method
	var editOrderList = $("ul#update li"); 
	
	$(editOrderList).delegate("#editOrder", "click", function(){
		var li = $(this).closest('li');
		var name = $(li).find('span.name').html();
		var drink = $(li).find('span.drink').html();
		var editSpan = $(li).find('span');
		var editInp = $(li).find('input');
		var editBtn = $(li).find('#editOrder');
		var saveBtn = $(li).find("#saveOrder");
		var cancelBtn = $(li).find("#cancelOrder");

		$(editBtn).removeClass("noEdit").addClass("edit");
		$(saveBtn).removeClass("edit").addClass("noEdit");
		$(cancelBtn).removeClass("edit").addClass("noEdit");

		$(editSpan).removeClass('noEdit');
		$(editSpan).addClass('edit');

		$(editInp).removeClass('edit');
		$(editInp).addClass('noEdit');

		$(li).find('input.name').val(name);
		$(li).find('input.drink').val(drink);

	});

	$(editOrderList).delegate("#cancelOrder", "click", function(){
		var li = $(this).closest('li');

		var editSpan = $(li).find('span');
		var editInp = $(li).find('input');

		var editBtn = $(li).find('#editOrder');
		var saveBtn = $(li).find("#saveOrder");
		var cancelBtn = $(li).find("#cancelOrder");

		$(editSpan).removeClass('edit');
		$(editSpan).addClass('noEdit');

		$(editInp).removeClass('noEdit');
		$(editInp).addClass('edit');

		$(editBtn).removeClass("edit").addClass("noEdit");
		$(saveBtn).removeClass("noEdit").addClass("edit");
		$(cancelBtn).removeClass("noEdit").addClass("edit");

	});

	$(editOrderList).delegate("#saveOrder", "click", function(){
		var li = $(this).closest('li');

		var name = $(li).find("input.name").val();
		var drink= $(li).find('input.drink').val();

		var editSpan = $(li).find('span');
		var editInp = $(li).find('input');

		var editBtn = $(li).find('#editOrder');
		var saveBtn = $(li).find("#saveOrder");
		var cancelBtn = $(li).find("#cancelOrder");

		$.ajax({
			url: "demo/orders/"+($(li).attr("data-id")), 
			type: "PUT",
			data: {name: name, drink: drink},
			success: function(){
				$(editSpan).removeClass('edit');
				$(editSpan).addClass('noEdit');

				$(editInp).removeClass('noEdit');
				$(editInp).addClass('edit');

				$(li).find('span.name').html(name);
				$(li).find('span.drink').html(drink);

				$(editBtn).removeClass("edit").addClass("noEdit");
				$(saveBtn).removeClass("noEdit").addClass("edit");
				$(cancelBtn).removeClass("noEdit").addClass("edit");
			},
			error: function(){
				console.log("Error while editing data!");
			}
		});
	});

	// edit order shortcut method
	var m2orderList = $("ul#putRequest li");
	$(m2orderList).delegate("#editOrder", "click", function(){
		var li = $(this).closest("li");
		$(li).addClass("edit");
		$(li).find("input.name").val($(li).find("span.name").html());
		$(li).find("input.drink").val($(li).find("span.drink").html());
	});

	$(m2orderList).delegate("#cancelOrder", "click", function(){
		var li = $(this).closest("li");
		$(li).removeClass("edit");
	});

	$(m2orderList).delegate("#saveOrder", "click", function(){
		var li = $(this).closest("li");
		var name =  $(li).find("input.name").val();
		var drink =  $(li).find("input.drink").val();
		$.ajax({
			url: "demo/orders/"+($(li).attr("data-id")),
			type: "PUT", 
			data: {name: name, drink: drink},
			success: function(){
				$(li).find("span.name").html(name);
				$(li).find("span.drink").html(drink);
				$(li).removeClass("edit");
			}, 
			error: function(){
				alert("Error while updating order");
			},
		});

	});


	// background color toggle
	$("#toggle").on("click", function(){
		var container = $("body")[0];
		var toggleBtn = $("#toggle")[0];

		if (container.className == ""){
			container.classList.add("dark");
			toggleBtn.classList.add("dark");
			toggleBtn.innerHTML = "Light Mode";
		}
		else {
			container.classList.remove("dark");
			toggleBtn.classList.remove("dark");
			toggleBtn.innerHTML = "Dark Mode";
		}
	});


	// Voting
	$("#votingBtn").on("click", addVote);
	$("#votingBtn2").on("click", removeVote);
	$("#votingBtn3").on("click", clearVote);

	var vote = Number($("#vote").html());
	var voteDisplay = $("#vote");

	function addVote(){
		vote = vote + 1;
		$(voteDisplay).html(vote);
	}

	function removeVote(){
		if (vote > 0){
			vote = vote - 1;
			$(voteDisplay).html(vote);
		}
	}

	function clearVote(){
		vote = 0;
		$(voteDisplay).html(vote);
	}

	
	// enter event from  input 
	// $("#submitBtn").on("input", update);
	$("#submitBtn").on("keypress", enter);
	
	function enter(event){
		if(event.which == 13){
			$("#display").empty();
			$("#display").append("<br>"+this.value);
		}
	}

	// search 
	$("#inputText").on("keyup", function(){
		// alert("sam");
	    var input, filter, ul, li, a, i, txtValue;
	    input = document.getElementById("inputText");
	    filter = input.value.toUpperCase();
	    ul = document.getElementById("searchList");
	    li = ul.getElementsByTagName("li");
	    for (i = 0; i < li.length; i++) {
	        a = li[i].getElementsByTagName("a")[0];	
	        txtValue = a.textContent || a.innerText;
	        // console.log(txtValue.toUpperCase().indexOf(filter));
	        if (txtValue.toUpperCase().indexOf(filter) > -1) {
	            li[i].style.display = "";
	        } else {
	            li[i].style.display = "none";
	        }
	    }
	});

	$("#jptsearch_text").on("keyup", function(){
		var searchText, textList, i, n, str, searchList; 
		searchText = $("#jptsearch_text").val();

		searchList = $("#jptList li");
		n = searchList.length;
		for(i=0; i<n; i++){
			if (searchList[i].textContent.indexOf(searchText) > -1){
				searchList[i].style.display = "";
				searchList[i].style.color = "green";
			}
			else{
				searchList[i].style.display = "none";
			}
		}
	});



});