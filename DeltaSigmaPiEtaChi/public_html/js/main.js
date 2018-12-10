var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; //your urls
var caption = ["Street", "Spirit", "Watermelon", "Obey", "ObeyYellow", "WellConnected"];
var description = [
    "Street Wear Letters",
    "Purple Spirit Shirt DSP",
    "Watermelon Deltasig",
    "DSP Obey",
    "DSP Yellow Obey",
    "Well-Connected"
];
console.log(images);
var url; //assign later, make scope global to script
var rowDiv = document.getElementById("rowID");
for (var i = 0; i < images.length; i++) //establish for, 6 items, last index place is 5, if you recall
{
    console.log("image in iteration is " + images[i]);
    console.log(caption[i]);
    console.log(description[i]);
    url = "http://localhost:8383/DeltaSigmaPiEtaChi/" + images[i]; //append to https://s3-us-west-2.amazonaws.com/newbucket3110fall18/phase2/
    //cpt = caption[i];
    urlOfDetailPage = "detailPage-v4.html?" + "img=" + url + "&cpt=" + caption[i] + "&des=" + description[i]; //where you will navigate, once you press the image, will send the detail page the img to analyze
//https://github.com/stefanbund/311/blob/16b1bb98a9f3c7a10663c2a4f87651bbf3508e17/prior%20terms/spring%202018%20materials/unit%202%20URL%20parameters/urlOrigin.html#L31   var imgDiv = document.createElement("div"); //divs to house img


    

    var sizeDiv = document.createElement("div");
    sizeDiv.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");

    var sectionElement = document.createElement("section"); //class card
    sectionElement.setAttribute("class", "card mb-5");
    sectionElement.setAttribute("id", caption[i]);
    sectionElement.setAttribute("style", "#555555");

    var imgElement = document.createElement("img");
    imgElement.setAttribute("class", "card-img img-fluid");
    imgElement.setAttribute("src", url);
    var link = document.createElement("a");
    link.setAttribute("href", urlOfDetailPage);
    
    link.appendChild(imgElement);

    var contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "card-body");


    var favorite = document.createElement("input");
    favorite.setAttribute("id", [i]);
    favorite.setAttribute("class", "favButton");
    favorite.setAttribute("class", "btn btn-primary");



    var textid = caption[i];
    var captionTitle = document.createElement("h5");
    captionTitle.setAttribute("class", "card-title");
    var captiontext = document.createTextNode(caption[i]);
    captionTitle.appendChild(captiontext);
    contentDiv.appendChild(captionTitle);

    // so you'll navigate to the url
    //link.appendChild(imgInDiv); //make the image the link
    //totalDiv.appendChild(link);//place the link inside of each div
    //imgDiv.appendChild(favorite);
    console.log(textid);
    $(favorite).attr({
        "type": "button",
        "id": [i],
        "value": "Make Favorite",
        "name": caption[i],
        "onclick": "console.log(i)"
    });


    var unfavorite = document.createElement("input");
    unfavorite.setAttribute("type", "button");
    unfavorite.setAttribute("id", "unfav");
    unfavorite.setAttribute("class", "btn btn-primary");
    $(unfavorite).attr({
        "type": "button",
        "id": "unfav" + [i],
        "value": "Unfavorite"
    });
    $(contentDiv).append(favorite, unfavorite);

    sectionElement.appendChild(link);
    sectionElement.appendChild(contentDiv);

    sizeDiv.appendChild(sectionElement);

    rowDiv.appendChild(sizeDiv);
    
    



    //document.body.appendChild(gridDiv);//then appd to body, document.body.appendChild


}