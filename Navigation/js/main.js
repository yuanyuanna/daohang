// 书签
$(function () {
  var bookmark = {
    data: [{
        name: "今日热榜",
        link: "https://tophub.today/",
        box_shadow: "#F2584A",
        icon: "img/headline.png",
      },
      {
        name: "知乎",
        link: "https://www.zhihu.com/",
        box_shadow: "#0078D8",
        icon: "img/zhihulogo.png",
      },
      {
        name: "虫部落",
        link: "https://www.chongbuluo.com/",
        box_shadow: "#60bc44",
        icon: "img/chongbuluo.png",
      },
      {
        name: "在线游戏",
        link: "https://www.yikm.net/",
        box_shadow: "#1095C9",
        icon: "img/yik-logo.png",
      },
      {
        name: "下厨房",
        link: "http://www.xiachufang.com/",
        box_shadow: "#D30E0B",
        icon: "img/xiachufang.png",
      },
      {
        name: "bilibili",
        link: "https://www.bilibili.com/",
        box_shadow: "#23AEE5",
        icon: "img/bilibili.jpg",
      },
      {
        name: "酷安",
        link: "https://www.coolapk.com",
        box_shadow: "#12c274",
        icon: "img/coolapk.png",
      },

    ],
  };
  for (var i = 0; i < bookmark.data.length; i++) {
    var addList =
      '<li class="folder-item col-xs-3 col-sm-2"><a target="_blank" href="' +
      bookmark.data[i].link +
      '"><div class="folder-item-box"><img class="folder-item-img" style="box-shadow:' +
      bookmark.data[i].box_shadow +
      ' 0 14px 12px -8px" src="' +
      bookmark.data[i].icon +
      '" /><p>' +
      bookmark.data[i].name +
      "</p></div></a></li>";
    $("#folder ul").append(addList);
  }
});

// 搜索引擎
$(function () {
  var search = {
    data: [{
        name: "baidu",
        icon: "img/baidu-xs.png",
        searchlink: "https://www.baidu.com/s",
        searchname: "wd",
        color: "#3245df",
        placeholder: "百度一下...",
      },
      {
        name: "google",
        icon: "img/google-xs.png",
        searchlink: "https://www.google.com/search",
        searchname: "q",
        color: "#4285f4",
        placeholder: "咕噜咕噜...",
      },
      {
        name: "bing",
        icon: "img/bing-xs.png",
        searchlink: "https://cn.bing.com/search",
        searchname: "q",
        color: "#00868B",
        placeholder: "Bing搜索...",
      },
      {
        name: "yahoo",
        icon: "img/yahoo-xs.png",
        searchlink: "https://search.yahoo.com/search",
        searchname: "p",
        color: "#5f01d1",
        placeholder: "Yahoo~",
      },
    ],
  };
  for (var i = 0; i < search.data.length; i++) {
    var addList =
      '<li class="folder-item2 col-xs-3 col-sm-2"> <a href="#"> <div class="folder-item-box2"> <img id="' +
      search.data[i].name +
      '" class="folder-item-img2" src="' +
      search.data[i].icon +
      '" /><p>' +
      search.data[i].name +
      "</p></div></a></li>";
    $(".nav ul").append(addList);
  }
  // 搜索引擎的切换
  $(document).click(function (e) {
    console.log(e.target);
    var id = e.target.id;
    for (var i = 0; i < search.data.length; i++) {
      if (id === search.data[i].name) {
        $("#state").html(
          "<a href='folder://'><img style='width:300px;' src='img/" +
          search.data[i].name +
          ".png'></a>"
        );
        $("#submitButton").css("background-color", search.data[i].color); //按钮bg
        $("#select").css("color", search.data[i].color); //选择器
        $("#inputText").attr("placeholder", search.data[i].placeholder);
        $("#form").attr("action", search.data[i].searchlink);
      }
    }
  });
});

// 书签和搜索引擎页面的切换
function select() {
  $("#folder").css("display") === "block" ?
    ($("#folder").css("display", "none"),
      $("#nav").css("display", "block"),
      $("#select").html("<hr><span class='checkBtn'>搜索引擎</span> ")) :
    ($("#nav").css("display", "none"),
      $("#folder").css("display", "block"),
      (document.getElementById("select").innerHTML =
        "<hr><span class='checkBtn'>书签</span> "));
}

// 关闭\显示壁纸