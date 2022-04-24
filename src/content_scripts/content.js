(function () {
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
