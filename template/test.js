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

var orgName = getParameter('org')
var place = getParameter('place')

var draw = SVG('mysvg').size(200, 200)

var txt = draw.text(orgName + place)
txt.font({
    background: '#ff0000',
    family:   'Helvetica', 
    size:     20, 
    fill: '#ff0000',
})

var rect = draw.rect(txt.length(), 40)
rect.radius(10)

txt.front()


