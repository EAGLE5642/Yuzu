function main(){
	document.write("おかりなさい<br>");

	document.bgColor="#ffc0cb";
}

//スケジュール管理ソフト起動
function tap_schedule(){
	alert("スケジュール管理ボタンを押しました");
}

//Google検索
function tap_search(){
	//テキストフィールドの文字取得
	word = document.getElementById("text1").value;

	//検索
	window.location.href="https://google.com/search?q="+word;
}

function tap_site(){
	if(document.getElementById("site1")){
		site=document.getElementById("site1").value;

		window.location.href="https://google.com/";
	}
}

main();
