
var $overlay = $('<div class="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');
var $leftArrow = $("<button id='leftArrow'>");
var $rightArrow = $("<button id='rightArrow'>");
var $closeLightbox = $("<button id='closeLightbox'><button style='clear:both'>");

//image to overlay
$overlay.append($image);

$image.before($closeLightbox);
$image.before($leftArrow);
$image.after($rightArrow);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//1. Capture the click event on a link to an image 
$("#imageGallery a").click(function(event){
  event.preventDefault();
  getCurrentImage(this);

//Show the overlay.
$overlay.show();
});

$leftArrow.click(function(){
  getPrevImage();
});

$rightArrow.click(function(){
  getNextImage();
});

function getCurrentImage (currentImage) {  
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr("href");
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //Get child's alt attribute and set caption
    var captionText = $(currentImage).children("img").attr("alt");
    $caption.text(captionText);
  }

function getPrevImage() {
    imageParent = $(thisImage).parent().prev();
    if(imageParent.length!==0){
      thisImage = $(imageParent).children("a");
    }
      getCurrentImage(thisImage);
    }

function getNextImage() {
    imageParent = $(thisImage).parent().next();
    if(imageParent.length!==0){
    thisImage = $(imageParent).children("a");
  }
    getCurrentImage(thisImage);
  }

//When X is clicked
$closeLightbox.click(function(){
  //Hide the overlay
  $overlay.hide();
});

//*****************************

//SEARCH BAR
$(document).ready(function(){
    $('#search').keyup(function(){

        // Retrieve the input field text
        var filter = $(this).val();

        // Loop through the comment list
        $(".imageGallery img").each(function(){

            // If the list item does not contain the title attr, fade it out
            if ($(this).attr("alt").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

            // Show the list item if the phrase matches
            } else {
                $(this).fadeIn();
            }
        });
    });
});




