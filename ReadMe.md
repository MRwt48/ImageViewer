# Image Viewer Js #
---
## Description
This is project still in development phase.The aim is to make a image viwer library with little to no setup and ease of use.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Although this is __STILL UNDER DEVELOPMENT__.

### Prerequisites
For this you'll need  _jQuery_, the _main.js_ and _main.css_ files. Put the _main.css_ and _main.js_ files in any directory you like and you could also rename them but remember to link the correctly in your HTML document.

In the following text I will be referring to the file structure as can be seen in the code.

### Linking in HTML
You can download _jQuery_ and link it or get a CDN.
Link the _main.js_ at end of the body.
````
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>

        <link rel="stylesheet" href="css/main.css" />  
    </head>     
    <body>
        //your code//
        <script src="js/main.js"></script>
    <body>
</html>
````

### Adding Image Viewer
Now add a DIV to the body where you want to display the images. The class of the DIV __should be 'display'__. 
````
<body>
    <div class="display">
        
    </div>
    <script src="js/main.js"></script>
<body>
````
Add images you want to display.
````
<body>
    <div class="display">
        <img src="...">
        <img src="...">
        <img src="...">
        <img src="...">
        ...
    </div>
    <script src="js/main.js"></script>
<body>
````
### Changing the Display Size
It can be done in two ways:

__1. SCSS__

If you are familiar with scss or even if you are not it is really easy. You will need a scss compiler for this. If you have it then you are ready to change the size of the viewport.

Just change the following in the main.scss file.
````
$height: <your dimension>;  
$width: <your dimension>;
````
* These are the variables that control viewport dimensions
* By default the values are 500px
    
__2. CSS__

To change the height and width in main.css file you need to change all the places manually wherever there is __'500px'__, to your desired dimensions.

### Changing the Background Color
It can done in two ways:

__1. SCSS__

Just change the variable value in main.scss
````
$imgBack: <your value>;
````
* By default the value is #000000.

__2. CSS__

To change it using the main.css file, you have to change the *background* property.
````
.dislay .image img{
    background: <your value>;
}
````

And that's it, you are all set to use the Image Viewer.
### Deployment
Nothing extra is needed for deployment in your live system.
### Author
[Mukul Rawat](https://github.com/MRwt48)
