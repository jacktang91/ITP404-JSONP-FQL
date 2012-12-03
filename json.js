var script = document.createElement('script');
script.src = "http://graph.facebook.com/fql?q=SELECT+page_id,name,username,description,fan_count,pic_small,page_url,categories,founded,company_overview,mission+FROM+page+WHERE+username='nintendo'+OR+username='microsoft'+OR+username='sony'+OR+username='atari'+ORDER+BY+fan_count&callback=myFunction";
document.getElementsByTagName('head')[0].appendChild(script);

function myFunction(fbData){
	console.log(fbData);
	for (var i=0;i<4;i++){
		var templateString = document.getElementById('page-template').innerHTML;
		var templateFunction = Handlebars.compile(templateString);
		var html = templateFunction(fbData.data[i]);

		document.getElementById('page-info').innerHTML += html;
	}
};

$("#page-info").on("click",".moreinfo", function(){
	$(this).parent().children(".additional").toggle();	
});
