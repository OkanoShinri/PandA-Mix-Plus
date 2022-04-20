chrome.runtime.onInstalled.addListener(initialize);

//アドオンがインストールされたときに実行（初期化）
function initialize() {
  //storage.localの設定
  chrome.storage.local.get("submitted_assignments", (restoredSettings) => {
    if (!restoredSettings.submitted_assignments) {
      let empty_array = new Array();
      chrome.storage.local.set({
        submitted_assignments: empty_array,
      });
    }
  });
}
