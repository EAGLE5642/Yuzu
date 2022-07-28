function main(){
	document.write("おかえりなさい<br>");

	document.bgColor="#ffc0cb";


}

//動的処理(端末ごとの処理)
function sub(){
	var user=window.navigator.userAgent;
	document.write(user);
}

//スケジュール管理ソフト起動
function tap_schedule(){
	window.location.href="HTML/schedule.html";
}

//Google検索
function tap_search(){
	//テキストフィールドの文字取得
	word = document.getElementById("text1").value;

	//検索
	window.location.href="https://google.com/search?q="+word;
}


//Google
function tap_site1(){
	window.location.href="https://google.com/";

}


//YouTube
function tap_site2(){
	window.location.href="https://youtube.com/";
}


//Yahoo!
function tap_site3(){
	window.location.href="https://yahoo.co.jp/";
}


//Amazon
function tap_site4(){
	window.location.href="https://amazon.co.jp/";
}


//Skype
function tap_site5(){
	window.location.href="skype:?chat";
}


//Coming Soon
function tap_site6(){
	alert("Coming Soon...");
}


main();
sub();
