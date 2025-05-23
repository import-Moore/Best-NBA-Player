var current_data;
var w = 700;
var h = 320;
var padding = 40;
var axisspace = padding;
var leftpadding = padding;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "mysvg");

var xticklabel;
var parseTime = d3.timeParse("%y");
var colorScale;
function deliverBarChart(dataset) {
    console.log("Delivering bar chart with dataset:", dataset);
    var xScale = d3.scaleBand()
        .domain(xticklabel)
        .rangeRound([leftpadding, w - padding])
        .paddingInner(0.05);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
		.range([h - padding, padding]);
	
	colorScale = d3.scaleLinear()
	.domain([d3.min(dataset), d3.max(dataset)])
	.range([0.4, 1]);
    console.log("COLORSCALE :from",d3.min(dataset),"to",d3.max(dataset));
    var xAxis = d3.axisBottom().scale(xScale).ticks(5);
    var yAxis = d3.axisLeft().scale(yScale).ticks(5);

    svg.selectAll("rect")
        .data(dataset)
        .join(
            enter => enter.append("rect")
                .attr("x", (d, i) => xScale(xticklabel[i]))
                .attr("y", h - padding)
                .attr("width", xScale.bandwidth())
                .attr("height", 0)
                .attr("fill", function (d) {
                    console.log("enterfill d=", d);
                    return "rgba(0, 0, " + Math.round(colorScale(d) * 255) + ",0.65)"
                })
                .on("mouseover", function(event, d) {
                    d3.select(this).attr("fill", "orange");
                    console.log("mouseoverd=", d);
                })
                .on("mouseout", function (event, d) {
                    console.log("mouseoutd=", d);
                    console.log("COLORSCALE :from",d3.min(dataset),"to",d3.max(dataset));
                    console.log("colorfilled=", Math.round(colorScale(d) * 255));
                    d3.select(this).transition().duration(250)
                        .attr("fill", "rgba(0, 0, " + Math.round(colorScale(d) * 255) + ",0.65)");
                })
                .transition()
                .duration(750)
                .attr("y", d => yScale(d))
                .attr("height", d => h - padding - yScale(d)),

            update => update.transition()
                .duration(750)
                .attr("x", (d, i) => xScale(xticklabel[i]))
                .attr("y", d => yScale(d))
                .attr("width", xScale.bandwidth())
                .attr("height", d => h - padding - yScale(d))
                .attr("fill", d => "rgba(0, 0, " + Math.round(colorScale(d) * 255) + ",0.65)"),

            exit => exit.transition()
                .duration(10)
                .attr("y", h - padding)
                .attr("height", 0)
                .remove()
        );

    svg.selectAll("text.label")
        .data(dataset)
        .join(
            enter => enter.append("text")
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("x", (d, i) => xScale(xticklabel[i]) + xScale.bandwidth() / 2)
                .attr("y", h - padding)
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white")
                .text(d => d)
                .transition()
                .duration(1000)
                .attr("y", d => {
                    if (h - padding - yScale(d) < 14) {
                        return yScale(d) - 3;
                    }
                    return yScale(d) + 14;
                }),

            update => update.transition()
                .duration(1000)
                .attr("x", (d, i) => xScale(xticklabel[i]) + xScale.bandwidth() / 2)
                .attr("y", d => {
                    if (h - padding - yScale(d) < 14) {
                        return yScale(d) - 3;
                    }
                    return yScale(d) + 14;
                })
                .text(d => d),

            exit => exit.transition()
                .duration(1000)
                .attr("y", h - padding)
                .remove()
        );

    svg.select(".x-axis").remove();
    svg.select(".y-axis").remove();

    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + (h - axisspace) + ")")
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .attr("text-anchor", "end")
        .attr("dx", "-0.8em")
        .attr("dy", "0.20em");

    svg.append("g")
        .attr("class", "y-axis")
        .attr("transform", "translate(" + leftpadding * 0.9999 + ",0)")
        .call(yAxis);
}

function manipulateChart() {
    var elem = document.getElementById("Type-Selector");
    var data_type = elem.options[elem.selectedIndex].value;

    var player_data = alldata[player];
    xticklabel = player_data["Season"];
    current_data = player_data[data_type];

    console.log("Selected data type:", data_type);
    console.log("Current data:", current_data);

    deliverBarChart(current_data);

    animation_type = 'animate__animated animate__backInDown';
    function updateText(newText) {
        const paragraph = d3.select('#description-parah');
        paragraph.classed(animation_type, false);
        paragraph.text(newText);
        setTimeout(() => {
            paragraph.classed(animation_type, true);
        }, 0.001);
    }
    updateText(metrics.find(m => m.value == data_type).description);
}


var description_parah = d3.select('body')
    .append('p')
    .attr('id', 'description-parah')
manipulateChart();
