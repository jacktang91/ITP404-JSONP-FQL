var script = document.createElement('script');
script.src = "http://graph.facebook.com/fql?q=SELECT+page_id,name,username,description,fan_count,pic_small,page_url,categories+FROM+page+WHERE+username='nintendo'+OR+username='microsoft'+OR+username='sony'+OR+username='atari'+ORDER+BY+fan_count&callback=myFunction";
document.getElementsByTagName('head')[0].appendChild(script);

function myFunction(fbData){
	console.log(fbData);
	
	var templateString = document.getElementById('page-template').innerHTML;
	var templateFunction = Handlebars.compile(templateString);
	var html = templateFunction(fbData);

	document.getElementById('page-info').innerHTML = html;
};

$(".page").on("click","a", function(){
		console.log('hello');		
});
