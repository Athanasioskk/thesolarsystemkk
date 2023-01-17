// init part, set your own values
var sat1 = {
    elt: null
    , a: 0         // in radian
    , r: 3         // radius
    , da: 0.01     // in radian
    , x: 0
    , y: 0
    // Center is actualy center (100, 100) minus
    // half the size of the orbiting object 15x15
    , center: { x: (3 - 0.5), y: (3 - 0.5) }
}
sat1.move = function () {
    // each modification
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    //console.log(this.x, this.y);
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat1.elt = document.getElementById('hid');
var loopTimer = setInterval(function () {
    sat1.move();
}
    , 50);


var sat2 = {
    elt: null
    , a: 0         // in radian
    , r: 5         // radius
    , da: 0.009     // in radian
    , x: 0
    , y: 0
    , center: { x: (5 - 0.75), y: (5 - 0.75) }
}
sat2.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat2.elt = document.getElementById('aid');
var loopTimer = setInterval(function () {
    sat2.move();
}
    , 50);


var sat3 = {
    elt: null
    , a: 0         // in radian
    , r: 7.5         // radius
    , da: 0.008     // in radian
    , x: 0
    , y: 0
    , center: { x: (7.5 - 0.75), y: (7.5 - 0.75) }
}
sat3.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat3.elt = document.getElementById('eid');
var loopTimer = setInterval(function () {
    sat3.move();
}
    , 50);



var sat4 = {
    elt: null
    , a: 0         // in radian
    , r: 10         // radius
    , da: 0.007     // in radian
    , x: 0
    , y: 0
    , center: { x: (10 - 0.6), y: (10 - 0.6) }
}
sat4.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat4.elt = document.getElementById('mid');
var loopTimer = setInterval(function () {
    sat4.move();
}
    , 50);



var sat5 = {
    elt: null
    , a: 0         // in radian
    , r: 12.5         // radius
    , da: 0.003     // in radian
    , x: 0
    , y: 0
    , center: { x: (12.5 - 1), y: (12.5 - 1) }
}
sat5.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat5.elt = document.getElementById('jid');
var loopTimer = setInterval(function () {
    sat5.move();
}
    , 50);




var sat6 = {
    elt: null
    , a: 0         // in radian
    , r: 15         // radius
    , da: 0.002     // in radian
    , x: 0
    , y: 0
    , center: { x: (15 - 0.9), y: (15 - 0.9) }
}
sat6.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat6.elt = document.getElementById('cid');
var loopTimer = setInterval(function () {
    sat6.move();
}
    , 50);



var sat7 = {
    elt: null
    , a: 0         // in radian
    , r: 17.5         // radius
    , da: 0.001     // in radian
    , x: 0
    , y: 0
    , center: { x: (17.5 - 0.8), y: (17.5 - 0.8) }
}
sat7.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat7.elt = document.getElementById('uid');
var loopTimer = setInterval(function () {
    sat7.move();
}
    , 50);



var sat8 = {
    elt: null
    , a: 0         // in radian
    , r: 20         // radius
    , da: 0.0009     // in radian
    , x: 0
    , y: 0
    , center: { x: (20 - 0.75), y: (20 - 0.75) }
}
sat8.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat8.elt = document.getElementById('nid');
var loopTimer = setInterval(function () {
    sat8.move();
}
    , 50);


var sat9 = {
    elt: null
    , a: 0         // in radian
    , r: 1.25         // radius
    , da: 0.1     // in radian
    , x: 0
    , y: 0
    , center: { x: (1.25 - 0.25), y: (1.25 - 0.25) }
}
sat9.move = function () {
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "vmax";
    this.elt.style.left = this.x + "vmax";
}
sat9.elt = document.getElementById('moid');
var loopTimer = setInterval(function () {
    sat9.move();
}
    , 50);


