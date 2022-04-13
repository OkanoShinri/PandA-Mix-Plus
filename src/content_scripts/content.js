(function () {
  //グローバルなガード変数をチェック、設定する
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    if (!message.command) {
      return;
    }
    switch (message.command) {
      case value:
        break;

      default:
        break;
    }
  });
})();
