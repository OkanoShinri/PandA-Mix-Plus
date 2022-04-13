function listenForClicks() {
  let button = document.getElementById("button");

  button.addEventListener(
    "click",
    function () {
      browser.runtime.sendMessage({
        command: "popup_clicked",
      });
    },
    false
  );
}

//ポップアップメニューを開いたとき、アクティブタブにcontent.jsを実行させ、
//クリック時の関数をリッスンする
browser.tabs
  .executeScript({ file: "/src/content_scripts/content.js" })
  .then(listenForClicks)
  .catch((error) => {
    //開いているページでcontent.jsを実行できなかった場合
    console.error("Failed :" + error.message);
  });
