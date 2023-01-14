/**
 * Get the URL parameter value
 *
 * @param  name {string} パラメータのキー文字列
 * @return  url {url} 対象のURL文字列（任意）
 */
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function override_ogp() {
  const projectKey = getParam("projectKey");
  const uniqueKey = getParam("uniqueKey");
  //   var param = location.search.substring(1).split("&");
  //   var params = [];
  //   var paramVal = "";
  //   for (var i = 0; i < param.length; i++) {
  //     params[i] = param[i].split("=");
  //   }
  //   for (var i = 0; i < params.length; i++) {
  //     if (params[i][0] == "page") {
  //       paramVal = parseFloat(params[i][1]);
  //     }
  //   }

  const ogUrl =
    "https://news-app-b57be.web.app/" +
    "?projectKey=" +
    projectKey +
    "&uniqueKey=" +
    uniqueKey;

  const ogImageUrl =
    "https://us-central1-generic-ogp-server.cloudfunctions.net/onRequest?projectKey=" +
    projectKey +
    "&uniqueKey=" +
    uniqueKey;

  var metaData = [
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:description",
      content: "「JavaScriptでOGPを書き換える」のデモページです。",
    },
    {
      property: "og:title",
      content: "Sandbox page for Generic OGP Rendering Server",
    },
    {
      property: "og:url",
      content: ogUrl,
    },
    {
      property: "og:image",
      content: ogImageUrl,
    },
    {
      property: "og:site_name",
      content: "Sandbox page for Generic OGP Rendering Server",
    },
    {
      property: "og:locale",
      content: "ja_JP",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:description",
      content: "Sandbox page for Generic OGP Rendering Server",
    },
    {
      name: "twitter:title",
      content: "Sandbox page for Generic OGP Rendering Server",
    },
    {
      name: "twitter:image",
      content: ogImageUrl,
    },
  ];

  for (var i = 0; i < metaData.length; i++) {
    var meta = document.createElement("meta");
    for (var prop in metaData[i]) {
      meta.setAttribute(prop, metaData[i][prop]);
    }
    document.head.appendChild(meta);
  }
}
