browser.runtime.onInstalled.addListener(initialize);

//アドオンがインストールされたときに実行（初期化）
function initialize() {
  //storage.localの設定
  browser.storage.local
    .get("submitted_assignments")
    .then((restoredSettings) => {
      if (!restoredSettings.submitted_assignments) {
        let empty_array = new Array();
        browser.storage.local.set({
          submitted_assignments: empty_array,
        });
      }
    });
}
