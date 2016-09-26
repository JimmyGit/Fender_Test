var filter = [];


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
}
};

// Filtering Products
function filteredProducts() {
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
}
};

$('document').ready(function(){
  var el = $('.products');
  buildProducts();
  imageListener();

//Filters Start

//ProductType Filters Start
$('.guitar').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.productType == "Guitars";
  });
  filteredProducts(filter);
  imageListener();
});

$('.guitar_and_bass_parts').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.productType == "Guitar and Bass Parts";
  });
  filteredProducts(filter);
  imageListener();
});
//ProductType Filters End


//Series Filters Start
$('.standard').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.series == "Standard";
  });
  filteredProducts(filter);
  imageListener();
});

$('.artist').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.series == "Artist";
  });
  filteredProducts(filter);
  imageListener();
});

$('.mounting_hardware').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.series == "Mounting Hardware";
  });
  filteredProducts(filter);
  imageListener();
});

$('.miscellaneous_parts').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.series == "Miscellaneous Parts";
  });
  filteredProducts(filter);
  imageListener();
});

$('.vintage_modified_models').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.series == "Vintage Modified Models";
  });
  filteredProducts(filter);
  imageListener();
});

$('.classic').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.series == "Classic";
  });
  filteredProducts(filter);
  imageListener();
});

$('.american_standard').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.series == "American Standard";
  });
  filteredProducts(filter);
  imageListener();
});

$('.knobs_kits_pickup_covers').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.seriesId == "knobs_kits_pickup_covers";
  });
  filteredProducts(filter);
  imageListener();
});

$('.pickguards_backplates').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.seriesId == "pickguards_backplates";
  });
  filteredProducts(filter);
  imageListener();
});

$('.plates_covers').on('click', function(){
  el.empty();
  filter =
  doc.documents.filter(function(item) {
    return item.seriesId == "plates_covers";
  });
  filteredProducts(filter);
  imageListener();
});

//Series Filters End

$('.all').on('click', function(){
  el.empty();
  buildProducts(doc);
  imageListener();
})


//Modal
function imageListener() {
$('img').on('click',function(){
  var id = this.getAttribute('data-id');

  for (var i=0; i < doc.documents.length; i++) {
    if (doc.documents[i].productNo == id) {
      var modal = doc.documents[i];
      console.log(modal);
      document.getElementById('modal_image').setAttribute('src', modal.images[0]);
      document.getElementById('myModalLabel').innerHTML = modal.skuDisplayName_en[0].split(',')[0];
      document.getElementById('prodSeries').innerHTML = modal.series;
      document.getElementById('prodType').innerHTML = modal.productType;
      document.getElementById('brand').innerHTML = modal.brand;
    }
  }
})
}






});
