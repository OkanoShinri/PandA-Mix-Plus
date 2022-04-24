(function () {
  //firefox -> chrome
  (function(a,b){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],b);else if("undefined"!=typeof exports)b(module);else{var c={exports:{}};b(c),a.browser=c.exports}})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if("object"!=typeof globalThis||"object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");if("undefined"==typeof globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a);let m=!1;const n=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){m||(console.warn("Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",new Error().stack),m=!0),h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),o=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},p=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=o.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},q={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(n),onMessageExternal:k(n),sendMessage:p.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},r={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":r},services:{"*":r},websites:{"*":r}},j(a,q,b)})(chrome)}else a.exports=globalThis.browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.9.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  //縦横切り替えの設定
  let row_is_period = false;
  browser.storage.local
    .get("row_is_period")
    .then((restoredSettings) => {
      row_is_period = restoredSettings.row_is_period;
    })
    .catch((e) => {
      console.log(e);
      browser.storage.local.set({
        row_is_period: row_is_period,
      });
    });

  //通知エリアの削除
  let b = document.getElementsByClassName("pasystem-banner-alerts")[0];
  if (typeof b !== undefined) {
    b.style.display = "none";
  }

  //ロゴにリンク張る
  let top_nav = document.getElementById("topnav_container");
  document.getElementById("topnav").style.display = "none";
  let home_ref = document
    .getElementById("topnav")
    .querySelector("li")
    .getElementsByClassName("link-container")[0]
    .getAttribute("href");
  let logo = document.getElementsByClassName(
    "Mrphs-headerLogo--institution"
  )[0];
  logo.style.position = "relative";
  let home_link = document.createElement("a");
  home_link.style =
    "position: absolute; top: 0; left: 0; width:100%; height:100%;";

  home_link.setAttribute("href", home_ref);
  logo.appendChild(home_link);

  //提出済み課題生成機能
  let post_button = document.getElementById("post");
  if (post_button !== null) {
    let id = document
      .getElementsByName("assignmentId")
      .item(0)
      .value.split("/")
      .pop();
    browser.storage.local.get().then((restoredSettings) => {
      let submitted_assignments = restoredSettings.submitted_assignments;
      if (submitted_assignments.length > 10) {
        submitted_assignments.shift();
      }

      post_button.addEventListener(
        "click",
        () => {
          submitted_assignments.push(id);
          browser.storage.local.set({
            submitted_assignments: submitted_assignments,
          });
        },
        false
      );
    });
  }

  //時間割機能
  const periods = [
    "月１",
    "月２",
    "月３",
    "月４",
    "月５",
    "火１",
    "火２",
    "火３",
    "火４",
    "火５",
    "水１",
    "水２",
    "水３",
    "水４",
    "水５",
    "木１",
    "木２",
    "木３",
    "木４",
    "木５",
    "金１",
    "金２",
    "金３",
    "金４",
    "金５",
  ];
  const hour = [
    "1限  8:45~10:15",
    "2限  10:30~12:00",
    "3限  13:15~14:45",
    "4限  15:00~16:30",
    "5限  16:45~18:15",
  ];
  const week = ["月", "火", "水", "木", "金"];
  const _width = (document.body.clientWidth - 160) / 5;

  let source_classes = [].slice.call(
    document.getElementsByClassName("fav-sites-entry")
  );

  makeClassElements(source_classes).then((classes) => {
    const period_time_table = makePeriodTimeTable(classes);
    period_time_table.style.display = "block";
    top_nav.appendChild(period_time_table);

    const week_time_table = makeWeekTimeTable(classes);
    week_time_table.style.display = "none";
    top_nav.appendChild(week_time_table);

    if (row_is_period) {
      week_time_table.style.display = "block";
      period_time_table.style.display = "none";
    }

    let change_buttom = document.createElement("div");
    change_buttom.style =
      "position:absolute; padding:5px; top:60px; left: 30px; user-select:none; border: 1px solid; border-radius:4px;";
    change_buttom.textContent = "縦-横 交換";
    change_buttom.addEventListener(
      "click",
      function () {
        if (
          document.getElementsByClassName("period-time-table")[0].style
            .display === "block"
        ) {
          document.getElementsByClassName(
            "period-time-table"
          )[0].style.display = "none";
          document.getElementsByClassName("week-time-table")[0].style.display =
            "block";
        } else {
          document.getElementsByClassName(
            "period-time-table"
          )[0].style.display = "block";
          document.getElementsByClassName("week-time-table")[0].style.display =
            "none";
        }
        row_is_period = !row_is_period;
        browser.storage.local.set({
          row_is_period: row_is_period,
        });
      },
      false
    );
    top_nav.appendChild(change_buttom);

    window.addEventListener("resize", function () {
      const new_width = (document.body.clientWidth - 160) / 5;

      let _week = this.document.getElementsByClassName("week");
      for (let index = 0; index < _week.length; index++) {
        _week[index].style.width = `${new_width}px`;
      }

      let _period = this.document.getElementsByClassName("period");
      for (let index = 0; index < _period.length; index++) {
        _period[index].style.width = `${new_width}px`;
      }

      let _time_tables = this.document.getElementsByClassName("time-table");
      for (let index = 0; index < _time_tables.length; index++) {
        _time_tables[index].style.width = `${new_width}px`;
      }
    });
  });

  async function makeClassElements(source_classes) {
    const _Width = (document.body.clientWidth - 160) / 5;
    const Classelement_style = `display:block; margin: 0px; padding: 5px; width: ${_Width}px; min-height: 40px; border-radius:10px;`;

    let classes = new Array(25);
    classes.fill("___");
    const res = await Promise.all(
      source_classes.map(async (source_class) => {
        const source_element = source_class;
        let title = source_element
          .getElementsByClassName("fav-title")[0]
          .querySelector("a")
          .getAttribute("title");
        if (!title.includes("2022")) {
          return;
        }
        let id = source_element
          .getElementsByClassName("fav-title")[0]
          .querySelector("a")
          .getAttribute("href")
          .split("/")
          .pop();
        const site_fetch = await fetch(
          `https://panda.ecs.kyoto-u.ac.jp/direct/site/${id}/pages.json`
        )
          .then((response) => response.json())
          .catch(() => new Response());
        let copy = document.createElement("div");
        copy.classList.add("time-table");
        copy.style = Classelement_style;

        let _class = document.createElement("a");
        _class.style = "text-decoration: none;";
        _class.classList.add("link-container");
        _class.setAttribute("href", site_fetch[0].tools[0].url);
        _class.setAttribute("title", title);

        let _title = document.createElement("span");
        _title.textContent = title.split("]").pop();
        copy.appendChild(_title);

        //dropdownメニューを作成
        let dropdown = document.createElement("div");
        dropdown.classList.add("classe-dropdown");
        dropdown.style = "display: none;";
        let dropdown_menu = document.createElement("ul");
        dropdown_menu.classList.add("classe-dropdown-list");
        dropdown_menu.style = "margin: 5px;";
        for (let index = 1; index < site_fetch.length; index++) {
          //index==0 は概要なので除外
          const title = site_fetch[index].title;
          const link = site_fetch[index].tools[0].url;

          let _li = document.createElement("li");
          _li.style = "display:block; list-style: none; width:100%;";

          let _a = document.createElement("a");
          _a.style = "text-decoration: none;";
          _a.setAttribute("href", link);

          let _div = document.createElement("div");
          _div.classList.add("class-background");
          _div.style =
            "padding:5px; transition: all .2s ease; border-radius:4px;";
          _div.textContent = title;
          _div.addEventListener(
            "mouseover",
            function () {
              _div.style.backgroundColor = "#D3D3D3";
            },
            false
          );
          _div.addEventListener(
            "mouseout",
            function () {
              _div.style.backgroundColor = "";
            },
            false
          );

          if (title == "課題") {
            const kadai_time_data = await getKadaiTimeLeft(id);

            if (kadai_time_data["time-left"] > 0) {
              _div.appendChild(_makeKadaiStatusElem(kadai_time_data));
              copy.appendChild(
                _makeKadaiIconElem(kadai_time_data["time-left"])
              );
            }
          }
          _a.appendChild(_div);
          _li.appendChild(_a);

          dropdown_menu.appendChild(_li);
        }

        dropdown.appendChild(dropdown_menu);
        copy.appendChild(dropdown);

        _class.appendChild(copy);

        let is_syuutyuu = true;
        for (let j = 0; j < periods.length; j++) {
          if (title.includes(periods[j])) {
            classes[j] = _class;
            is_syuutyuu = false;
          }
        }
        if (is_syuutyuu) {
          classes.push(_class);
        }
      })
    );

    return classes;
  }
  async function getKadaiTimeLeft(id) {
    //0: 無し 1:1週間以上 2:1週間以内 3:1日以内
    //
    let left = Number.MAX_SAFE_INTEGER;
    let day = "";
    const kadai_fetch = await fetch(
      `https://panda.ecs.kyoto-u.ac.jp/direct/assignment/site/${id}/pages.json`
    )
      .then((response) => response.json())
      .catch(() => new Response());

    const restored = await browser.storage.local.get(["submitted_assignments"]);
    const submitted_kadai = restored.submitted_assignments;

    const kadai_list = kadai_fetch["assignment_collection"];
    for (let index = 0; index < kadai_list.length; index++) {
      const kadai_info = kadai_list[index];
      if (
        !submitted_kadai.includes(kadai_info.id) &&
        kadai_info.status == "OPEN"
      ) {
        if (_getMsTimeLeft(kadai_info.dropDeadTimeString) < left) {
          left = _getMsTimeLeft(kadai_info.dropDeadTimeString);
          day = kadai_info.dropDeadTimeString;
        }
      }
    }
    if (left === Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    let data = { "time-left": left, day: day };
    return data;
  }

  function _getMsTimeLeft(date) {
    const ts = Date.parse(date);
    const limit = new Date(ts);
    const now = new Date();
    const delta = limit - now; // /86400000;

    return delta;
  }

  function _makeKadaiStatusElem(kadai_time_data) {
    const kadai_time_left = kadai_time_data["time-left"];
    const _limit_day = new Date(kadai_time_data["day"]);
    const limit_day = _limit_day.toLocaleString();
    let _kadai_status_elm = document.createElement("span");
    const day = Math.floor(kadai_time_left / 86400000);
    const hour = Math.floor(kadai_time_left / 3600000);
    const minute = Math.floor(kadai_time_left / 60000);

    if (_kadai_status_elm < 0) {
      _kadai_status_elm.textContent = "";
    } else if (hour < 1) {
      _kadai_status_elm.textContent = `提出期限まであと${minute}分`;
      _kadai_status_elm.style.color = "#9e0008";
      _kadai_status_elm.style.marginLeft = "10px";
    } else if (day < 1) {
      _kadai_status_elm.textContent = `提出期限まであと${hour}時間`;
      _kadai_status_elm.style.color = "#9e0008";
      _kadai_status_elm.style.marginLeft = "10px";
    } else if (day < 3) {
      _kadai_status_elm.textContent = `期限: ${limit_day}`;
      _kadai_status_elm.style.color = "crimson";
      _kadai_status_elm.style.marginLeft = "10px";
    } else if (day < 7) {
      _kadai_status_elm.textContent = `期限: ${limit_day}`;
      _kadai_status_elm.style.color = "firebrick";
      _kadai_status_elm.style.marginLeft = "10px";
    } else {
      _kadai_status_elm.textContent = `期限: ${limit_day}`;
      _kadai_status_elm.style.color = "#FF4500";
      _kadai_status_elm.style.marginLeft = "10px";
    }
    return _kadai_status_elm;
  }

  function _makeKadaiIconElem(kadai_time_left) {
    let _kadai_icon_elm = document.createElement("span");
    //_kadai_icon_elm.style.marginLeft = "10px";
    /*
    _kadai_icon_elm.style.paddingLeft = "2px";
    _kadai_icon_elm.style.paddingRight = "2px";
    _kadai_icon_elm.style.fontSize = "1.5em";
    _kadai_icon_elm.style.border = "solid gray 0.5px";
    _kadai_icon_elm.style.borderRadius = "5px";
    */
    const day = kadai_time_left / 86400000;
    const hour = kadai_time_left / 3600000;

    /*
    if (kadai_time_left < 0) {
      _kadai_icon_elm.textContent = "";
    } else if (hour < 1) {
      _kadai_icon_elm.textContent = "★★★";
      _kadai_icon_elm.style.color = "red";
      _kadai_icon_elm.style.marginLeft = "10px";
    } else if (day < 1) {
      _kadai_icon_elm.textContent = "★★";
      _kadai_icon_elm.style.color = "red";
      _kadai_icon_elm.style.marginLeft = "10px";
    } else if (day < 2) {
      _kadai_icon_elm.textContent = "★";
      _kadai_icon_elm.style.color = "crimson";
      _kadai_icon_elm.style.marginLeft = "10px";
    } else if (day < 3) {
      _kadai_icon_elm.textContent = "●";
      _kadai_icon_elm.style.color = "crimson";
      _kadai_icon_elm.style.marginLeft = "10px";
    } else if (day < 7) {
      _kadai_icon_elm.textContent = "●";
      _kadai_icon_elm.style.color = "firebrick";
      _kadai_icon_elm.style.marginLeft = "10px";
    } else {
      _kadai_icon_elm.textContent = "●";
      _kadai_icon_elm.style.color = "#FF4500";
      _kadai_icon_elm.style.marginLeft = "10px";
    }
    */
    if (kadai_time_left < 0) {
      _kadai_icon_elm.textContent = "";
    } else if (hour < 3) {
      _kadai_icon_elm.textContent = " やれ";
      _kadai_icon_elm.style.color = "#9e0008";
      _kadai_icon_elm.style.fontWeight = "bold";
    } else if (day < 7) {
      _kadai_icon_elm.textContent = ` - あと${Math.floor(day) + 1}日`;
      //_kadai_icon_elm.style.fontSize = `${(7 - day) / 14 + 1.0}em`;
      _kadai_icon_elm.style.color = "#9e0008";
      _kadai_icon_elm.style.fontWeight = "bold";
    } else {
      _kadai_icon_elm.textContent = " - まだ先";
      _kadai_icon_elm.style.fontSize = "1.0em";
      _kadai_icon_elm.style.color = "#FF4500";
    }
    return _kadai_icon_elm;
  }

  function makePeriodTimeTable(classes) {
    let time_table = document.createElement("table");
    time_table.classList.add("period-time-table");
    time_table.style.marginTop = "10px";
    let time_table_head = document.createElement("thead");
    let time_table_body = document.createElement("tbody");
    time_table.appendChild(time_table_head);
    time_table.appendChild(time_table_body);

    var row = document.createElement("tr");
    let td = document.createElement("td");
    row.appendChild(td);
    for (let index = 0; index < 5; index++) {
      let _hour = document.createElement("div");
      _hour.classList.add("period");
      _hour.textContent = hour[index];
      _hour.style = `margin: 0px; padding: 0px 10px; width: ${_width}px; min-height: 40px;`;
      let td = document.createElement("td");
      td.appendChild(_hour);
      row.appendChild(td);
      time_table_body.appendChild(row);
    }
    for (let index = 0; index < 25; index++) {
      if (index % 5 == 0) {
        var row = document.createElement("tr");
        if (Math.floor(index / 5) % 2) {
          row.style.backgroundColor = "rgb(244, 244, 244)";
        }
        let td = document.createElement("td");
        let _week = document.createElement("div");
        _week.textContent = week[index / 5];
        _week.style = `margin: 0px; padding: 5px; width: 140px; min-height: 40px;`;
        td.appendChild(_week);
        row.appendChild(td);
      }

      if (classes[index] === "___") {
        let copy = document.createElement("div");
        copy.classList.add("time-table");
        copy.textContent = "___";
        copy.style = `margin: 0px; padding: 5px; width: ${_width}px; min-height: 40px;`;
        classes[index] = copy;
      }
      let td = document.createElement("td");
      let _class_w_event = _addEvent(classes[index].cloneNode(true));
      td.appendChild(_class_w_event);
      row.appendChild(td);
      if (index % 5 == 4) {
        time_table_body.appendChild(row);
      }
    }

    for (let index = 25; index < classes.length; index++) {
      if (index % 5 == 0) {
        var row = document.createElement("tr");
        row.style.backgroundColor = "rgb(244, 244, 244)";
        let _td = document.createElement("td");
        let _week = document.createElement("div");
        _week.textContent = "集中講義等";
        _week.style = `margin: 0px; padding: 5px; width: 140px; min-height: 40px;`;
        _td.appendChild(_week);
        row.appendChild(_td);
      }
      let td = document.createElement("td");
      let _class_w_event = _addEvent(classes[index].cloneNode(true));
      td.appendChild(_class_w_event);
      row.appendChild(td);

      if (index % 5 == 4 || index == classes.length - 1) {
        time_table_body.appendChild(row);
      }
    }

    return time_table;
  }
  function makeWeekTimeTable(classes) {
    let time_table = document.createElement("table");
    time_table.classList.add("week-time-table");
    time_table.style.marginTop = "10px";
    let time_table_head = document.createElement("thead");
    let time_table_body = document.createElement("tbody");
    time_table.appendChild(time_table_head);
    time_table.appendChild(time_table_body);

    var row = document.createElement("tr");
    let td = document.createElement("td");
    row.appendChild(td);
    for (let index = 0; index < 5; index++) {
      let _week = document.createElement("div");
      _week.classList.add("week");
      _week.textContent = week[index];
      _week.style = `margin: 0px; padding: 0px 10px; width: ${_width}px; min-height: 40px;`;
      let td = document.createElement("td");
      td.appendChild(_week);
      row.appendChild(td);
      time_table_body.appendChild(row);
    }
    for (let index = 0; index < 25; index++) {
      if (index % 5 == 0) {
        var row = document.createElement("tr");
        if (Math.floor(index / 5) % 2) {
          row.style.backgroundColor = "rgb(244, 244, 244)";
        }
        let td = document.createElement("td");
        let _hour = document.createElement("div");
        _hour.textContent = hour[index / 5];
        _hour.style = `margin: 0px; padding: 5px; width: 140px; min-height: 40px;`;
        td.appendChild(_hour);
        row.appendChild(td);
      }
      let _index = Math.floor(index / 5) + (index % 5) * 5;

      if (classes[_index] === "___") {
        let copy = document.createElement("div");
        copy.classList.add("time-table");
        copy.textContent = "___";
        copy.style = `margin: 0px; padding: 5px; width: ${_width}px; min-height: 40px;`;
        classes[_index] = copy;
      }
      let td = document.createElement("td");
      let _class_w_event = _addEvent(classes[_index].cloneNode(true));
      td.appendChild(_class_w_event);
      row.appendChild(td);
      if (index % 5 == 4) {
        time_table_body.appendChild(row);
      }
    }

    for (let index = 25; index < classes.length; index++) {
      if (index % 5 == 0) {
        var row = document.createElement("tr");
        row.style.backgroundColor = "rgb(244, 244, 244)";
        let td = document.createElement("td");
        let _week = document.createElement("div");
        _week.textContent = "集中講義等";
        _week.style = `margin: 0px; padding: 5px; width: 140px; min-height: 40px;`;
        td.appendChild(_week);
        row.appendChild(td);
      }
      let td = document.createElement("td");
      let _class_w_event = _addEvent(classes[index].cloneNode(true));
      td.appendChild(_class_w_event);
      row.appendChild(td);

      if (index % 5 == 4 || index == classes.length - 1) {
        time_table_body.appendChild(row);
      }
    }

    return time_table;
  }

  function _addEvent(_class) {
    if (_class.getElementsByClassName("class-background") !== null) {
      let _class_bgs = _class.getElementsByClassName("class-background");
      for (let index = 0; index < _class_bgs.length; index++) {
        const _class_bg = _class_bgs[index];
        _class_bg.addEventListener(
          "mouseover",
          function () {
            _class_bg.style.backgroundColor = "#D3D3D3";
          },
          false
        );
        _class_bg.addEventListener(
          "mouseout",
          function () {
            _class_bg.style.backgroundColor = "";
          },
          false
        );
      }
    }
    if (_class.getElementsByClassName("time-table").length > 0) {
      let _time_table = _class.getElementsByClassName("time-table")[0];
      _time_table.addEventListener(
        "mouseover",
        function () {
          _time_table.style.backgroundColor = "#D3D3D3";
          _time_table.getElementsByClassName("classe-dropdown")[0].style =
            "display: block; z-index: 99; position: absolute; width: 13%; background-color: white; border: 1px solid; border-radius:10px;";
        },
        false
      );
      _time_table.addEventListener(
        "mouseout",
        function () {
          _time_table.style.backgroundColor = "";
          _time_table.getElementsByClassName("classe-dropdown")[0].style =
            "display: none;";
        },
        false
      );
    }
    return _class;
  }
})();
