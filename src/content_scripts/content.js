(function () {
  /*var newStyle = document.createElement("style");
  newStyle.type = "text/css";
  // CSSの内容を書く
  newStyle.innerText =
    ".classe-dropdown-menu {\
  position: relative;\
  }\
  div.classe-dropdown-menu ul.classe-dropdown-menu {\
    position: absolute;\
    top: 40px;\
    width: 100%;\
    background: #072A24;\
    -webkit-transition: all .2s ease;\
    transition: all .2s ease;\
  }\
  div.classe-dropdown-menu:hover ul.classe-dropdown-menu {\
    top: 50px;\
    visibility: visible;\
    opacity: 1;\
  }";
  // HEAD要素の最後に作成したstyle要素を追加
  document.getElementsByTagName("HEAD").item(0).appendChild(newStyle);
  */
  let b = document.querySelector(".pasystem-banner-alerts");
  b.style.display = "none";

  let top_nav = document.querySelector("#topnav_container");
  document.querySelector("#topnav").style.display = "none";
  let home_ref = document
    .querySelector("#topnav")
    .querySelector("li")
    .querySelector(".link-container")
    .getAttribute("href");
  let logo = document.querySelector(".Mrphs-headerLogo--institution");
  logo.style.position = "relative";
  let home_link = document.createElement("a");
  home_link.style =
    "position: absolute; top: 0; left: 0; width:100%; height:100%;";

  home_link.setAttribute("href", home_ref);
  logo.appendChild(home_link);

  let time_table = document.createElement("table");
  time_table.style.marginTop = "10px";
  let time_table_head = document.createElement("thead");
  let time_table_body = document.createElement("tbody");
  time_table.appendChild(time_table_head);
  time_table.appendChild(time_table_body);

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
  const _width = document.body.clientWidth / 5 - 20;

  let source_classes = [].slice.call(
    document.querySelectorAll(".fav-sites-entry")
  );

  makeClassElements(source_classes).then((classes) => {
    var row = document.createElement("tr");
    let td = document.createElement("td");
    row.appendChild(td);
    for (let index = 0; index < 5; index++) {
      let _hour = document.createElement("div");
      _hour.classList.add("period");
      _hour.textContent = hour[index];
      _hour.style = `margin: 0px; padding: 0px 10px; width: ${_width}px; height: 40px;`;
      let td = document.createElement("td");
      td.appendChild(_hour);
      row.appendChild(td);
    }
    for (let index = 0; index < 25; index++) {
      if (index % 5 == 0) {
        time_table_body.appendChild(row);
        var row = document.createElement("tr");
        let td = document.createElement("td");
        let _week = document.createElement("div");
        _week.textContent = week[index / 5];
        _week.style = `margin: 0px; padding: 0px; width: 80px; height: 40px;`;
        td.appendChild(_week);
        row.appendChild(td);
      }
      if (classes[index] === "___") {
        let copy = document.createElement("div");
        copy.classList.add("time-table");
        copy.textContent = "___";
        copy.style = `margin: 0px; padding: 0px; width: ${_width}px; height: 40px;`;
        classes[index] = copy;
      }
      let td = document.createElement("td");
      td.appendChild(classes[index]);
      row.appendChild(td);
    }

    for (let index = 25; index < classes.length; index++) {
      if (index % 5 == 0) {
        time_table_body.appendChild(row);
        var row = document.createElement("tr");
        let td = document.createElement("td");
        let _week = document.createElement("div");
        _week.textContent = "集中講義等";
        _week.style = `margin: 0px; padding: 0px; width: 80px; height: 40px;`;
        td.appendChild(_week);
        row.appendChild(td);
      }
      let td = document.createElement("td");
      td.appendChild(classes[index]);
      row.appendChild(td);

      if (index == classes.length - 1) {
        time_table_body.appendChild(row);
      }
    }
    top_nav.appendChild(time_table);
  });

  async function makeClassElements(source_classes) {
    const _Width = document.body.clientWidth / 5 - 20;
    const Classelement_style = `display:block; margin: 0px; padding: 0px; width: ${_Width}px; height: 40px; transition: all .2s ease;`;

    let classes = new Array(25);
    classes.fill("___");
    const res = await Promise.all(
      source_classes.map(async (source_class) => {
        const source_element = source_class;
        let title = source_element
          .querySelector(".fav-title")
          .querySelector("a")
          .getAttribute("title");
        if (!title.includes("2022")) {
          return;
        }
        let id = source_element
          .querySelector(".fav-title")
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

        let link_container = document.createElement("a");
        link_container.classList.add("link-container");
        link_container.setAttribute("href", site_fetch[0].tools[0].url);
        link_container.setAttribute("title", title);
        let _title = document.createElement("span");
        _title.textContent = title.split("]").pop();
        link_container.appendChild(_title);
        copy.appendChild(link_container);

        //dropdownメニューを作成
        let dropdown = document.createElement("div");
        dropdown.classList.add("classe-dropdown");
        dropdown.style = "display: none;";
        let dropdown_menu = document.createElement("ul");
        dropdown_menu.classList.add("classe-dropdown-list");
        for (let index = 1; index < site_fetch.length; index++) {
          const title = site_fetch[index].title;
          const link = site_fetch[index].tools[0].url;
          let _a = document.createElement("a");
          _a.setAttribute("href", link);
          _a.textContent = title;
          _a.style = "width:100%;";

          let _li = document.createElement("li");
          _li.appendChild(_a);

          if (title == "課題") {
            const _kadai_status = await getKadaiStatus(id);
            if (_kadai_status > 0) {
              _li.appendChild(_makeKadaiStatusElem(_kadai_status));
              copy.appendChild(_makeKadaiIconElem(_kadai_status));
            }
          }

          _li.style = "list-style: none; width:100%; margin: 5px;";
          dropdown_menu.appendChild(_li);
        }

        dropdown.appendChild(dropdown_menu);
        copy.appendChild(dropdown);

        copy.addEventListener(
          "mouseover",
          function () {
            copy.querySelector(".classe-dropdown").style =
              "display: block; z-index: 1; position: relative;width: 80%; background-color: white; border: 1px solid; border-radius:10px;";
          },
          false
        );
        copy.addEventListener(
          "mouseout",
          function () {
            copy.querySelector(".classe-dropdown").style = "display: none;";
          },
          false
        );

        let is_syuutyuu = true;
        for (let j = 0; j < periods.length; j++) {
          if (title.includes(periods[j])) {
            classes[j] = copy;
            is_syuutyuu = false;
          }
        }
        if (is_syuutyuu) {
          classes.push(copy);
        }
      })
    );

    return classes;
  }
  async function getKadaiStatus(id) {
    //0: 無し 1:1週間以上 2:1週間以内 3:1日以内
    //
    let kadai_status = 0;
    const kadai_fetch = await fetch(
      `https://panda.ecs.kyoto-u.ac.jp/direct/assignment/site/${id}/pages.json`
    )
      .then((response) => response.json())
      .catch(() => new Response());

    const kadai_list = kadai_fetch["assignment_collection"];
    for (let index = 0; index < kadai_list.length; index++) {
      const kadai_info = kadai_list[index];
      if (kadai_info.status == "OPEN") {
        if (_getKadaiLimitID(kadai_info.dropDeadTimeString) > kadai_status) {
          kadai_status = _getKadaiLimitID(kadai_info.dropDeadTimeString);
        }
      }
    }
    return kadai_status;
  }

  function _getKadaiLimitID(date) {
    let res = 1;
    const ts = Date.parse(date);
    const limit = new Date(ts);
    const now = new Date();
    const delta = (limit - now) / 86400000;
    if (delta < 1) {
      res = 3;
    } else if (delta < 7) {
      res = 2;
    } else {
      res = 1;
    }
    return res;
  }

  function _makeKadaiStatusElem(kadai_status) {
    let _kadai_status_elm = document.createElement("span");
    switch (kadai_status) {
      case 0:
        _kadai_status_elm.textContent = "";
        break;
      case 1:
        _kadai_status_elm.textContent = "課題あり";
        _kadai_status_elm.style.color = "#FF4500";
        _kadai_status_elm.style.marginLeft = "10px";
        break;
      case 2:
        _kadai_status_elm.textContent = "<1週間以内>";
        _kadai_status_elm.style.color = "#FF0000";
        _kadai_status_elm.style.marginLeft = "10px";
        break;
      case 3:
        _kadai_status_elm.textContent = "<<<24時間以内>>>";
        _kadai_status_elm.style.color = "#8B0000";
        _kadai_status_elm.style.marginLeft = "10px";
        break;
      default:
        _kadai_status_elm.textContent = "";
        break;
    }
    return _kadai_status_elm;
  }

  function _makeKadaiIconElem(kadai_status) {
    let _kadai_icon_elm = document.createElement("span");
    switch (kadai_status) {
      case 0:
        _kadai_icon_elm.textContent = "";
        break;
      case 1:
        _kadai_icon_elm.textContent = "●";
        _kadai_icon_elm.style.color = "#FF4500";
        _kadai_icon_elm.style.marginLeft = "10px";
        break;
      case 2:
        _kadai_icon_elm.textContent = "●";
        _kadai_icon_elm.style.color = "#DC143C";
        _kadai_icon_elm.style.marginLeft = "10px";
        break;
      case 3:
        _kadai_icon_elm.textContent = "●";
        _kadai_icon_elm.style.color = "#8B0000";
        _kadai_icon_elm.style.marginLeft = "10px";
        break;
      default:
        _kadai_icon_elm.textContent = "";
        break;
    }
    return _kadai_icon_elm;
  }
})();
