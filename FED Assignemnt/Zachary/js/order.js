// JavaScript source code
function date() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").setAttribute("min", today);
}

function time(){
    var today = new Date();
    var day = today.getDay();
    if (day == 0) {
        document.getElementById("time").setAttribute("min","11:00")
        document.getElementById("time").setAttribute("max","15:00");
    }
    if (day == 6) {
        document.getElementById("time").setAttribute("min","11:00");
        document.getElementById("time").setAttribute("max","16:00");
    }
}

function lul() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 2);
    function frame() {
        if (elem.style.left == window.innerWidth + 'px') {
            elem.style.visibility = "hidden";
            clearInterval(id);
            alert("Your ordered has been delivered")
            location.reload(true);
        } else {
            pos+=3;
            elem.style.left = pos + 'px';
        }
    }
}

var a = 1;
function myFunction() {
    if (a < 7) {
        var x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.getElementById("orderitem").appendChild(x);

        //create menuitem droplist//
        var b = document.createElement("select");
        b.setAttribute("id", "select"+a);
        b.setAttribute("class", "select");
        var menu = ["Croissants $31", "Grilled Chicken & Cheese Burger $78", "Basil Pesto Mushroom Toast $59", "Pulled Pork & Avocado Eggs Benedict $84", "Bangers & Mash $67", "Blackened Grass-Fed Sirloin $106", "Coffee Kahlua Barbeque Pork Ribs $89", "Pressed Foei Gras $129", "Decadence D’Or Cupcake $750", "Golden Opulence Sundae $1,000", "The Golden Phoenix Cupcake$1,000", "Frozen Chocolate Haute $25,000", "Capuccino $14", "Café Latte Espresso $22", "Hacienda La Esmeralda $112", "Ruby Rose Cocktail $40,000"];
        var itemprice=[31,78,59,84,67,106,89,129,750,1000,1000,25000,14,22,112,40000]
        for (i = 0; i < menu.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", itemprice[i]);
            option.text = menu[i];
            b.add(option);
        }

        //for quantity//
        var quantity = document.createElement("input");
        quantity.setAttribute("id", "quantity"+a);
        quantity.setAttribute("class", "quantity");
        quantity.setAttribute("type", "number");
        quantity.setAttribute("min", 1);
        quantity.setAttribute("value", 1);

        // create special request text box//
        var request = document.createElement("input");
        request.setAttribute("type", "text");
        request.setAttribute("placeholder", "Example:No Vegetables");
        request.setAttribute("row", "3");

        //puts a paragraph into a div//
        var div = document.createElement("div")
        div.setAttribute("class", "mydiv");
        var c = document.createTextNode("Enter your order:");
        var d = document.createTextNode(" Quantity:");
        var e = document.createTextNode(" Enter Special Request:")
        //Enter your order//
        var div1 = document.createElement("div")
        div1.setAttribute("class", "mydiv");
        div1.appendChild(c);
        //Droplist//
        var div2 = document.createElement("div")
        div2.setAttribute("class", "mydiv");
        div2.appendChild(b);
        //Quantity//
        var div3 = document.createElement("div")
        div3.setAttribute("class", "mydiv");
        div3.appendChild(d);
        //Number input//
        var div4 = document.createElement("div")
        div4.setAttribute("class", "mydiv");
        div4.appendChild(quantity);
        //Special Request//
        var div5 = document.createElement("div")
        div5.setAttribute("class", "mydiv");
        div5.appendChild(e);
        //special request text box//
        var div6 = document.createElement("div")
        div6.setAttribute("class", "mydiv");
        div6.appendChild(request);


        var y = document.createElement("TR");
        y.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(y);

        var z = document.createElement("TD");
        var t = document.createTextNode("order " + a);
        z.appendChild(t);
        z.appendChild(div1);
        z.appendChild(div2);
        z.appendChild(div3);
        z.appendChild(div4);
        z.appendChild(div5);
        z.appendChild(div6);
        document.getElementById("myTr").appendChild(z);
        a += 1;
    }
}

function price() {
    var totalprice = 0;
    for (i = 1; i < a; i++) {
        var itemprice = parseInt(document.getElementById("select" + i).value);
        var quantity = parseInt(document.getElementById("quantity" + i).value);
        totalprice += itemprice * quantity;
    }
    document.getElementById("price").innerHTML = "Total Price:$" + totalprice;
}
