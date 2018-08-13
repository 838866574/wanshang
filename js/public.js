$(function(){
    
    $("#searchShow").click(function(){
    	$(".searchBox").show();
    })
    $("#closeSearch").click(function(){
    	$(".searchBox").hide();
    })
	
	$("#showDNav").hover(function(){
		$(".wsDownNav").slideDown('200');
	}, function(){
		$(".wsDownNav").hide();
	});
	$(".wsDownNav").hover(function(){
		$(".wsDownNav").show();
	}, function(){
		$(".wsDownNav").hide();
	});
	
	$(".wsDownNav ul li").hover(function(){
		$("#rightFont").show();
		var index = $(this).index();
		if(index == 0){
			$("#rightFont").html('万商天勤律师事务所是一家能够提供全面法律服务的综合性律师事务所。');
		} else if(index == 1){
			$("#rightFont").html('万商天勤律师事务所以专业的服务和不断创新的执业能力获得了法律市场的认可和评级机构的推荐。 ');
		} else if(index == 2){
			$("#rightFont").html('万商天勤积极投身各类社会公益活动，并长期致力于公益事业的推进。');
		} else if(index == 3){
			$("#rightFont").html('万商天勤在北京、深圳、上海、成都、武汉、马德里、曼彻斯特等地均设有办公室。');
		};
	}, function(){
		$("#rightFont").hide();
	});
	
	$("#wxBtn").hover(function(){
		$("#wxBox").show();
	}, function(){
		$("#wxBox").hide();
	});
	$("#phoneIcon").hover(function(){
		$("#erw").show();
	}, function(){
		$("#erw").hide();
	});
})

function searchEnter() {
    if (event.keyCode == 13) {
    	window.location.href = 'searchResult.html';
//      alert("搜索");
    }
}