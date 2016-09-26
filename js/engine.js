var filter = [];
var products = $('.products');


//Create product container
function buildProducts() {
var obj = doc.documents;
var inv = obj.length;
for (var i=0; i < inv; i++) {

  //Creating div with classes
  var div = document.createElement('div');
  div.className = "col-sm-4 prod text-center";

  //Creating img and getting src
  var img = document.createElement('img');
  img.setAttribute('src', obj[i].images[0]);
  img.setAttribute('data-toggle', 'modal');
  img.setAttribute('data-target', '#myModal');
  img.setAttribute("data-id", obj[i].productNo);
  div.appendChild(img);

  //Creating h2 and adding class
  var h3 = document.createElement('h3');
  h3.className = "u-font-12";
  var title = obj[i].skuDisplayName_en[0];
  var trimmedTitle = title.split(',')[0];
  h3.innerHTML = trimmedTitle;
  div.appendChild(h3);

  //Display on Page
  $('.products').append(div);
  imageListener();
}
};

//Modal
function imageListener() {
$('img').on('click',function(){
  var id = this.getAttribute('data-id');

  for (var i=0; i < doc.documents.length; i++) {
    if (doc.documents[i].productNo == id) {
      var modal = doc.documents[i];

      document.getElementById('modal_image').setAttribute('src', modal.images[0]);
      document.getElementById('myModalLabel').innerHTML = modal.skuDisplayName_en[0].split(',')[0];
      document.getElementById('prodSeries').innerHTML = modal.series;
      document.getElementById('prodType').innerHTML = modal.productType;
      document.getElementById('brand').innerHTML = modal.brand;
    }
  }
})
};


// Filtering Products
function filteredProducts() {
$('.products').empty();
var inv = filter.length;
for (var i=0; i < inv; i++) {

  //Creating div with classes
  var div = document.createElement('div');
  div.className = "col-sm-4 prod text-center";

  //Creating img and getting src
  var img = document.createElement('img');
  img.setAttribute('src', filter[i].images[0]);
  img.setAttribute('data-toggle', 'modal');
  img.setAttribute('data-target', '#myModal');
  img.setAttribute("data-id", filter[i].productNo);
  div.appendChild(img);

  //Creating h2 and adding class
  var h3 = document.createElement('h3');
  var title = filter[i].skuDisplayName_en[0];
  var trimmedTitle = title.split(',')[0];
  h3.innerHTML = trimmedTitle;
  div.appendChild(h3);

  //Display on Page
  $('.products').append(div);
  imageListener();
}
};

//Filter search Series and All
function filterSeries() {
  $('.series.filterLink').on('click', function(){
  var category = this.getAttribute('data-id');
  if (category == 'all') {
    buildProducts();
  }

  else
  {
    console.dir(category);
    filter = doc.documents.filter(function(item) {
      return item.series == category;
    });
    filteredProducts(filter);
  }

});
}

//Filter search Product Type
function filterProductType() {
  $('.product.filterLink').on('click', function(){
  var category = this.getAttribute('data-id');
    filter = doc.documents.filter(function(item) {
      return item.productType == category;
    });
    filteredProducts(filter);
});
}


$('document').ready(function(){
  buildProducts();
  filterSeries();
  filterProductType();
});
