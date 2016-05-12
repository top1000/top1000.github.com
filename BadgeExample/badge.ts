/// <reference path="colors.ts"/>

function getParameter(name: string) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    const regexS = `[\\?&]${name}=([^&#]*)`;
    const regex = new RegExp(regexS);
    const results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

declare var require: any;

interface IData {
    place: number;
    name: string;
}

//"./calls.json"
/*function getData(path: string) : IData {
    var json = require(path);
    var data: IData = JSON.parse(json);
    return data;
}*/


function getData(path: string) : IData {
    var request = new XMLHttpRequest();

    function levelRequestListener() {
        var data = JSON.parse(this.responseText);
        return data;
    }

    request.onload = levelRequestListener;
    request.open("get", path, true);
    request.send();
    var json = request.responseText;
    var data: IData = JSON.parse(json);
    return data;
}

// ReSharper disable once InconsistentNaming
declare function SVG(name: string): any;

var repoName = getParameter("repo");
//var place = "125";
var place = getData("data.json");
var r = 3;
var h = 20;
var textSize = 11;
var draw = SVG("mysvg").size(200, h);
var str = repoName + " is #" + place;
var test = "test";
var fontFamily = "Verdana";

var txtRepoName = draw.text(str);
txtRepoName.size(textSize);
txtRepoName.x(5);
txtRepoName.fill(Colors.get(Color.Black));
//txtRepoName.fill(whiteColor);
txtRepoName.font({
    family: fontFamily,
    y: 0
});

var txtRepoNameShadow = draw.text(str);
txtRepoNameShadow.size(textSize);
txtRepoNameShadow.x(5);
txtRepoNameShadow.fill(Colors.get(Color.White));
//txtRepoNameShadow.fill(grayColor);
txtRepoNameShadow.font({
    family: fontFamily,
    y: 1
});

var rectRepoName = draw.rect(txtRepoName.length() + 10, h);
rectRepoName.attr({ fill: Colors.get(Color.Silver) });
rectRepoName.radius(r);

var txt = draw.text(test);
txt.x(rectRepoName.width());
txt.y(7);
txt.fill("#855");
txt.font({
    background: "#155",
    family: "Verdana",
    size: 11
});

txtRepoNameShadow.front();
txtRepoName.front();
txt.front();


