// src/components/Skills/canvass.jsx
import React, { useEffect, useRef } from "react"

const Canvass = (props) => {
  const ref = useRef("")
  useEffect(()=> {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    const rate = 0.2; // APPROX Number of rotations per second
const numCircles = 100;
const perspectiveRange = 300;  // dist between front and back planes
const ringRadius = 70;         // in pixels
const circleRadius = 1;       // in pixels. Radius of circle at z === 0
const colors = [["#B11", "#F22"], ["#DB0", "#FF0"]];
const text = ["HTML 5", "CSS3", "JAVASCRIPT"];
var frame = 0;    // counts frames

function drawCircles(angle, rotY) {  // rotZ rotates around Y axis (in and out of screen)
var i = 0;
// The transform for y rotation
const dx = Math.cos(rotY);
const dy = Math.sin(rotY);
ctx.fillStyle = "#FF0";
ctx.font = "50px Helvetica";
ctx.fillText = ("HTML 5", dx, dy, 80)
const step = (2 * Math.PI) / numCircles;
const circles = [];
const textPosition = [];



// get 3D location of each circle
while (i < numCircles) {
     const x = ringRadius * Math.cos(angle + i * step);
     const y = ringRadius * Math.sin(angle + i * step);
     circles.push({x: x * dx, y, z: x * dy, colIdx: i % 2});
     textPosition.concat(text[i]);
     i++;
     
}


// sort circles from back to front
circles.sort((a, b) => b.z - a.z);
textPosition.sort((a, b)=> b.z -a.z);

// center on canvas
ctx.setTransform(1,0,0,1, ctx.canvas.width / 2, ctx.canvas.height / 2);


// draw 3D circles with perspective
for (const c of circles) {
     const col = colors[c.colIdx];
     // Calculate perspective scale. The further from the front the
     // smaller the perspective scale
     const p = (perspectiveRange - c.z) / perspectiveRange;

     // Scale radius, x, y pos and line with by perspective scale
     const r = Math.abs(p * circleRadius);
     const x = p * c.x;
     const y = p * c.y;
     ctx.lineWidth = 1.5 * p;

     // shaded color
     ctx.fillStyle = col[0];
     ctx.beginPath();
     ctx.arc(x, y, r, 0, 2 * Math.PI);
     ctx.fill();
     ctx.stroke();

     // highlight color
     ctx.fillStyle = col[1];
     ctx.beginPath();
     ctx.arc(x - r * 0.1, y - r * 0.1, r * 0.8, 0, 2 * Math.PI);
     ctx.fill();

     ctx.fillStyle = "#FFFA";
     ctx.beginPath();
     ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.3, 0, 2 * Math.PI);
     ctx.fill();


}

// reset canvas transform
ctx.setTransform(1,0,0,1,0, 0);
}


requestAnimationFrame(renderLoop);  // rAF to start animation

function renderLoop() {  // rAF callback
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

const time = frame++ * (1000 / 60);   // Assumes 60 fps
const ang = ((time * Math.PI * 2) / 1000) * rate
drawCircles(ang, ang / 2);

requestAnimationFrame(renderLoop);  // request next frame
}
      

    
    
    
  },[])
    
  return (
    <canvas ref={ref} {...props} />
  )
}


export default Canvass