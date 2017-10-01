$(function () {
	$.ajax({
		type: "get", url: "/getJSON", dataType: "json", success: function (response) {

			for (var i = 0; i < 3; i++) {
				var newDiv = document.createElement("div");
				newDiv.classList.add("check-item");
				$(newDiv).attr("id", i.toString());
				var newSpan = document.createElement("span");
				var textnode = document.createTextNode("haha");
				newSpan.classList.add("knowledge-point");
				newSpan.appendChild(textnode);
				newDiv.appendChild(newSpan);
				$(".knowledge-checkbox-container").append(newDiv);
				$("#" + i.toString()).append('<label class="switch checkbox"><input type="checkbox" checked><span class="slider round"></span></label>');
			}
		}, error: function (response) { console.log(response); }
	});


});

