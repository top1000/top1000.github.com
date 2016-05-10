function getParameter(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
} 

var repoName = getParameter('repo')
var place = getParameter('place')

var draw = SVG('mysvg').size(200, 200)

var txt = draw.text(repoName + place)
txt.font({
    background: '#ff0000',
    family:   'Helvetica', 
    size:     14, 
    fill: '#ff0000',
})

var rect = draw.rect(txt.length(), 30)
rect.radius(5)

txt.front()


