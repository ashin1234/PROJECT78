images=["img1.jpg","img2.jpg"];
names=["Myfamily","familyonatrip"];
var i=0;
function next(){
    document.getElementById("family_img").src=images[i];
    document.getElementById("family_name").innerHTML=names[i];
    i++;
    if (i==2){
        i=0;
    }
}


