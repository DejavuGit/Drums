$(function () {
$("[data-radial]").each(function() {
 var percentageRadial = $(this).data("radial");
 console.log(percentageRadial);
 //get the number of all the data-radial defined in the page
 var height, width, radius;

 height = 210;
 width = 210;
 radius = Math.min(width, height) / 2;

 var radialGraph = 
     d3.select("[data-radial='"+percentageRadial+"']");
 //get the number of all the data-radial defined in the page
 var svg = radialGraph.append("svg")
 .attr('viewBox', '0 0 ' + width + ' ' + height)
 .attr('preserveAspectRatio', 'none');

 var g = svg.append('g')
 .attr('transform', 
       'translate(' + (width / 2) + ',' + (height / 2) + ')');


 function perTOdeg(per) {
     'use strict';
     return 360 * per / 100;
 }

 function degTOrad(deg) {
     'use strict';
     return deg * (Math.PI / 180);
 }

 function drawArc(percentageRadial){
     var visArc = d3.svg.arc()
     .innerRadius(radius / 1.45)
     .outerRadius(radius)
     .cornerRadius(0)
     .startAngle(0) //converting from degs to radians
     .endAngle(degTOrad(perTOdeg(percentageRadial))); //just radians
     g.append("path")
     .attr("d", visArc)
     .attr('class', 'percentage-radial-bar');
 }
  


 drawArc(percentageRadial);

 var path = radialGraph.select('path');;
 var totalLength = path.node().getTotalLength();
 console.log(totalLength );
 path.attr("stroke-dasharray", totalLength + " " + totalLength)
 .attr("stroke-dashoffset", totalLength)
 .transition()
 .duration(2000)
 .ease("linear")
 .attr("stroke-dashoffset", 0);

 radialGraph.on("click", function(){
     path
     .transition()
     .duration(2000)
     .ease("linear")
     .attr("stroke-dashoffset", totalLength);
 });


});
});