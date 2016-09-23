function testing() {
	alert("TEST");
}

function generateProducts() {
	// Products = [ id | name | desc | price | image location ]
	var products = [[1, "Naughty Gnome", "Gnome 1 Desc", 34.55, "img/002.jpg"],
					[2, "Surprised Gnome", "Gnome 2 Desc", 48.47, "img/003.jpg"],
					[3, "Pair of Gnomes", "Gnome 3 Desc", 68.37, "img/004.jpg"],
					[4, "Naughty Gnomes", "Gnome 4 Desc", 88.56, "img/005.jpg"],
					[5, "Happy Gnome", "Gnome 5 Desc", 128.19, "img/006.jpg"],
					[6, "Dead Gnome", "Gnome 6 Desc", 18.28, "img/007.jpg"],
					[7, "Terrorist Gnome", "Gnome 7 Desc", 324.51, "img/008.jpg"]];
	
	var testString = "";
	var imgSrc = "";
	var addToCart = "";
	for (i = 0; i < products.length; i++) {
		
		imgSrc = "<img src='" + products[i][4] + "'width='50%' height='50%'>";
		
		//addToCart = "<a href="javascript:;" onclick='simpleCart.add({name:'baby lion', price: 34.95,size:'tiny',thumb:'e.png'});' >add to cart</a>"
		
		productDiv = "<div>" + 
					 "<h3>" + products[i][1] + "</h3>" +
					 "<p>" + products[i][2] + "</p>" + 
					 "<p>&pound;" + products[i][3] +"</p>" + 
					 imgSrc +
					 "<br>" +
					 "<button type='button' class='addToCart' onclick='alert()'>Add to Cart</button>" +
					 "</div>";
					 
		//testString = testString + products[i][0] + "....." + products[i][1] + "....." + products[i][2] + "....." + products[i][3] + "<br>";
		testString = testString + productDiv + "<br>";
	}
	
	document.getElementById('prod').innerHTML =  testString;
}