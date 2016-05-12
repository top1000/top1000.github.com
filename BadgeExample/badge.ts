function getParameter(name: any) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    const regexS = `[\\?&]${name}=([^&#]*)`;
    const regex = new RegExp(regexS);
    const results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

// ReSharper disable once InconsistentNaming
declare function SVG(name: string): any;

var repoName = getParameter("repo");
var place = "125";
var radius = 3;
var height = 20;
var textSize = 11;
var fontFamily = "Verdana";
var draw = SVG("mysvg").size(200, height);
var str = repoName + " is #" + place;
var test = "test";
var txtRepoName = draw.text(str);
txtRepoName.font({
    background: "#555",
    family: "Verdana",
    fill: "#FFF",
    y: 0
});
txtRepoName.size(textSize);
txtRepoName.x(5);
var txtRepoNameShadow = draw.text(str);
txtRepoNameShadow.font({
    background: "#555",
    family: "Verdana",
    size: 11,
    x: 5,
    y: 1
});
var rectRepoName = draw.rect(txtRepoName.length() + 10, 20);
rectRepoName.attr({ fill: "#555" });
rectRepoName.radius(3);
var txt = draw.text(test);
txt.x(rectRepoName.width());
txt.y(7);
txt.font({
    background: "#155",
    family: "Verdana",
    size: 11
});
txt.fill("#855");
txtRepoNameShadow.front();
txtRepoName.front();
txt.front();


