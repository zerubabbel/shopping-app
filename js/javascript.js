$(document).ready(function () {

	//your code here



	$('#add-to-list-button').click(function() { 

		$('ul').append('<li class="todo"><button class="item">Done</button><button class="remove">Remove</button>'+ $('input#add-to-list').val() + '</li>');
		$('input#add-to-list').val("");
	

	}); 


	$('ul').on('click', '.item', function() {
		$(this).closest('li').toggleClass('todo done');
		$(this).remove();
	});

	$('ul').on('click', '.remove', function() {
		$(this).closest('li').remove(); $(this).closest('button').remove() ;$(this).remove();
	});

});

