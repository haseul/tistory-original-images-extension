var browser = chrome;
if (!chrome){
	browser = browser;
}

browser.webRequest.onBeforeRequest.addListener(details => {
    if (details.url.includes("daumcdn") || details.url.includes("tistory")) {
        var url = details.url; 
        if (url.includes("daumcdn") && url.includes("fname=")) {
            url = unescape(url.split("fname=")[1]);          
        }
        
        if (url.includes("daumcdn") && !url.match(/\?original$/)) {
            if (url.includes("?")) {
                url = url.substring(0, filename.lastIndexOf("?"));
            }
            url = url + "?original";
        } else if (url.includes("tistory.com") && url.includes("/image/")) {
            url = url.replace("/image/", "/original/");
        }
    
        return {redirectUrl: url}
    }  
},
{
    urls: ["<all_urls>"]
},
          ["blocking"])