$(document).ready(function(){
	
	
	//delete buttom
	$(".del-btn").on('click',function(){
		var b = $(this);
		
		b.parents('li').remove();
	
		
	});
	//edit buttom
	$(".edit-btn").on('click',function(e){
		
		e.preventDefault();
		var c= $(this).next('.cancel-btn');
			c.css('display','inline-block');
				var p =$(this).parents('li');
					p.children('div').children('div').children('div').children('input[class="form-control mylist"]').attr('disabled', false);
		
	});
	$(".cancel-btn").on('click',function(e){
		
		e.preventDefault();
		var p =$(this).parents('li');
					p.children('div').children('div').children('div').children('input[class="form-control mylist"]').attr('disabled', true);
		$(this).css('display','none');
		
		
	});
	
	$('input[type="text"]').keypress(function (e) {
		 var key = e.which;
		 if(key == 13)  // the enter key code
		  {
			$(this).attr('disabled', true);
			return false;  
		  }
		});  
	
	$(document).click(function(evt) {
		//console.log(evt.target.classList('del-btn','cancel-btn','edit-btn'));
		var t = $(evt.target);
		if(t.hasClass('del-btn') || t.hasClass('edit-btn') || t.hasClass('cancel-btn') || t.hasClass('form-control mylist'))
			{
				//donothing
				
			}
		else {
				$('.cancel-btn').css('display','none');
			 	$('input[class="form-control mylist"]').attr('disabled',true);
			}
	});
	


	$(".check").change(function(e) {
		e.preventDefault();
		var parent = $(this).parents('.input-group');
		if(parent.children('.mylist').hasClass('done')){
			parent.children('.mylist').removeClass('done');
		} else{
			parent.children('.mylist').addClass('done');
		}
	});
});