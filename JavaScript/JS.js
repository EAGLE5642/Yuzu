
function main(){
	document.write("おかりなさい<br>");

	document.bgColor="#ffc0cb";
}

function tap_schedule(){
	alert("スケジュール管理ボタンを押しました");
}

function tap_search(){
	//テキストフィールドの文字取得
	word = document.getElementById("text1").value;

	//Google検索
	window.location.href="https://google.com/search?q="+word;
}

main();
