/**
 * Tag Canvas
 * Look for examples
 * http://www.goat1000.com/tagcanvas-examples.php
 */


window.onload = function() {
    try {
        TagCanvas.Start('myCanvas','tags',{
            textColour: '#ff0000',
            outlineColour: '#ff00ff',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05
        });
    } catch(e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
};