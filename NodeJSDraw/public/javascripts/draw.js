tool.minDistance = 20;
tool.maxDistance = 50;

function onMouseDrag(event) {
    var radius = event.delta.length / 2;
    var circle = new Path.Circle(event.middlePoint, radius);
    circle.fillColor = 'black';
}

// Returns an object specifying a semi-random color
// The color will always have a red value of 0
// and will be semi-transparent (the alpha value)
function randomColor() {
    
    return {
        red: 0,
        green: Math.random(),
        blue: Math.random(),
        alpha: ( Math.random() * 0.25 ) + 0.05
    };
}

// every time the user drags their mouse
// this function will be executed
function onMouseDrag(event) {
    // Take the click/touch position as the centre of our circle
    var x = event.middlePoint.x;
    var y = event.middlePoint.y;
    // The faster the movement, the bigger the circle
    var radius = event.delta.length / 2;
    // Generate our random color
    var color = randomColor();
    // Draw the circle 
    drawCircle( x, y, radius, color );
    // Pass the data for this circle
    // to a special function for later
    emitCircle( x, y, radius, color );
} 
 
function drawCircle( x, y, radius, color ) {
    // Render the circle with Paper.js
    var circle = new Path.Circle( new Point( x, y ), radius );
    circle.fillColor = new RgbColor( color.red, color.green, color.blue, color.alpha );
    // Refresh the view, so we always get an update, even if the tab is not in focus
    view.draw();
} 
 
function emitCircle( x, y, radius, color ) {
    // We'll do something interesting with this shortly...
}