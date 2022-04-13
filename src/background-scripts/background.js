browser.runtime.onInstalled.addListener(initialize);

//アドオンがインストールされたときに実行（初期化）
function initialize() {
  //storage.localの設定
  browser.storage.local.set({}).catch((e) => {
    console.error(`Failed : ${e.message}`);
  });
}
