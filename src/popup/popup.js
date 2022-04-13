//ポップアップメニューが開かれたとき、設定をストレージから読み取る
browser.storage.local
  .get()
  .then((restoredSettings) => {
    document.getElementById("hoge").value = restoredSettings.hoge;
  })
  .catch((e) => {
    console.error(`Failed : ${e.message}`);
  });

// ポップアップページで設定を変更したとき、それをストレージに保存する
document.getElementById("hoge").addEventListener("change", storeSettings);

//popup.htmlの内容をストレージにセットする
function storeSettings() {
  let hoge = document.getElementById("hoge").value;
  browser.storage.local.set({
    hoge: hoge,
  });
}
