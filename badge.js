class Greeter {
    constructor(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }
    stop() {
        clearTimeout(this.timerToken);
    }
}
window.onload = () => {
    var el = document.getElementById("content");
    var greeter = new Greeter(el);
    greeter.start();
};
var Color;
(function (Color) {
    Color[Color["Gold"] = 0] = "Gold";
    Color[Color["Silver"] = 1] = "Silver";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["White"] = 3] = "White";
    Color[Color["Gray"] = 4] = "Gray";
})(Color || (Color = {}));
var Colors;
(function (Colors) {
    const silver = "#C0C0C0";
    const gray = "#808080";
    const white = "#FFF";
    const black = "#000";
    const gold = "#FFD700";
    function get(color) {
        switch (color) {
            case Color.Gold:
                return gold;
            case Color.Silver:
                return silver;
            case Color.Black:
                return black;
            case Color.White:
                return white;
            case Color.Gray:
                return gray;
            default:
                return null;
        }
    }
    Colors.get = get;
})(Colors || (Colors = {}));
/// <reference path="colors.ts"/>
function getParameter(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    const regexS = `[\\?&]${name}=([^&#]*)`;
    const regex = new RegExp(regexS);
    const results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}
var repoName = getParameter("repo");
var place = "125";
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
//# sourceMappingURL=badge.js.map