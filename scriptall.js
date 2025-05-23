function pic1(){
    const data = {
        "Magic": { "Age": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "Rebounds PerGame": [7.7, 8.6, 9.6, 8.6, 7.3, 6.2, 5.9, 6.3, 6.2, 7.9, 6.6, 7, null, null, null, null, 5.7], "Assists PerGame": [7.3, 8.6, 9.5, 10.5, 13.1, 12.6, 12.6, 12.2, 11.9, 12.8, 11.5, 12.5, null, null, null, null, 6.9], "Steals PerGame": [2.4, 3.4, 2.7, 2.2, 2.2, 1.5, 1.6, 1.7, 1.6, 1.8, 1.7, 1.3, null, null, null, null, 0.8], "Blocks PerGame": [0.5, 0.7, 0.4, 0.6, 0.7, 0.3, 0.2, 0.5, 0.2, 0.3, 0.4, 0.2, null, null, null, null, 0.4], "Points PerGame": [18, 21.6, 18.6, 16.8, 17.6, 18.3, 18.8, 23.9, 19.6, 22.5, 22.3, 19.4, null, null, null, null, 14.6] },
        "LeBron": { "Age": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], "Rebounds PerGame": [5.5, 7.4, 7, 6.7, 7.9, 7.6, 7.3, 7.5, 7.9, 8, 6.9, 6, 7.4, 8.6, 8.6, 8.5, 7.8, 7.7, 8.2, 8.3, 7.3], "Assists PerGame": [5.9, 7.2, 6.6, 6, 7.2, 7.2, 8.6, 7, 6.2, 7.3, 6.3, 7.4, 6.8, 8.7, 9.1, 8.3, 10.2, 7.8, 6.2, 6.8, 8.3], "Steals PerGame": [1.6, 2.2, 1.6, 1.6, 1.8, 1.7, 1.6, 1.6, 1.9, 1.7, 1.6, 1.6, 1.4, 1.2, 1.4, 1.3, 1.2, 1.1, 1.3, 0.9, 1.3], "Blocks PerGame": [0.7, 0.7, 0.8, 0.7, 1.1, 1.1, 1, 0.6, 0.8, 0.9, 0.3, 0.7, 0.6, 0.6, 0.9, 0.6, 0.5, 0.6, 1.1, 0.6, 0.5], "Points PerGame": [20.9, 27.2, 31.4, 27.3, 30, 28.4, 29.7, 26.7, 27.1, 26.8, 27.1, 25.3, 25.3, 26.4, 27.5, 27.4, 25.3, 25, 30.3, 28.9, 25.7] },
        "Curry": { "Age": [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "Rebounds PerGame": [4.5, 3.9, 3.4, 4.0, 4.3, 4.3, 5.4, 4.5, 4.5, 4.8, 4.0, 5.5, 4.5, 5.2, 4.6], "Assists PerGame": [5.9, 5.8, 5.3, 6.9, 8.5, 7.7, 6.7, 6.6, 6.1, 6.3, 4.7, 6.7, 6.1, 6.7, 6.3], "Steals PerGame": [1.9, 1.5, 1.5, 1.6, 1.6, 2.0, 2.1, 1.8, 1.6, 1.6, 1.0, 1.6, 1.3, 1.5, 1.3], "Blocks PerGame": [0.2, 0.3, 0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "Points PerGame": [17.5, 18.6, 14.7, 22.9, 24.0, 23.8, 30.1, 25.3, 26.4, 27.3, 24.5, 32.0, 27.0, 29.7, 28.6] },
        "Jabbar": { "Age": [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41], "Rebounds PerGame": [14.5, 16, 16.6, 16.1, 14.5, 14, 16.9, 13.3, 12.9, 12.8, 10.8, 10.3, 8.7, 7.5, 7.3, 7.9, 6.1, 6.7, 6, 4.5], "Assists PerGame": [4.1, 3.3, 4.6, 5, 4.8, 4.1, 5, 3.9, 4.3, 5.4, 4.5, 3.4, 3, 2.5, 2.6, 3.2, 3.5, 2.6, 1.7, 1], "Steals PerGame": ["", "", "", "", 1.4, 1, 1.5, 1.2, 1.7, 1, 1, 0.7, 0.8, 0.8, 0.7, 0.8, 0.8, 0.6, 0.6, 0.5], "Blocks PerGame": ["", "", "", "", 3.5, 3.3, 4.1, 3.2, 3, 4, 3.4, 2.9, 2.7, 2.2, 1.8, 2.1, 1.6, 1.2, 1.2, 1.1], "Points PerGame": [28.8, 31.7, 34.8, 30.2, 27, 30, 27.7, 26.2, 25.8, 23.8, 24.8, 26.2, 23.9, 21.8, 21.5, 22, 23.4, 17.5, 14.6, 10.1] },
        "Duncan": { "Age": [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], "Rebounds PerGame": [11.9, 11.4, 12.4, 12.2, 12.7, 12.9, 12.4, 11.1, 12.7, 10.6, 11.3, 10.7, 10.1, 8.9, 9, 9.9, 9.7, 9.1, 7.3], "Assists PerGame": [2.7, 2.4, 3.2, 3, 3.7, 3.9, 3.1, 2.7, 3.2, 3.4, 2.8, 3.5, 3.2, 2.7, 2.3, 2.7, 3, 3, 2], "Steals PerGame": [0.7, 0.9, 0.9, 0.9, 0.7, 0.7, 0.9, 0.7, 0.9, 0.8, 0.8, 0.5, 0.6, 0.7, 0.7, 0.7, 0.6, 0.8, 0.8], "Blocks PerGame": [2.5, 2.5, 2.2, 2.3, 2.5, 2.9, 2.7, 2.6, 2, 2.4, 2.4, 1.7, 1.5, 1.9, 1.5, 2.1, 1.9, 2, 1.3], "Points PerGame": [21.1, 21.7, 23.2, 22.2, 25.5, 23.3, 22.3, 20.3, 18.6, 20, 19.3, 19.3, 17.9, 13.4, 15.4, 17.8, 15.1, 13.9, 8.6] },
        "Jordan": { "Age": [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], "Rebounds PerGame": [6.5, 3.6, 5.2, 5.5, 8, 6.9, 6, 6.4, 6.7, null, 6.9, 6.6, 5.9, 5.8, null, null, null, 5.7, 6.1], "Assists PerGame": [5.9, 2.9, 4.6, 5.9, 8, 6.3, 5.5, 6.1, 5.5, null, 5.3, 4.3, 4.3, 3.5, null, null, null, 5.2, 3.8], "Steals PerGame": [2.4, 2.1, 2.9, 3.2, 2.9, 2.8, 2.7, 2.3, 2.8, null, 1.8, 2.2, 1.7, 1.7, null, null, null, 1.4, 1.5], "Blocks PerGame": [0.8, 1.2, 1.5, 1.6, 0.8, 0.7, 1, 0.9, 0.8, null, 0.8, 0.5, 0.5, 0.5, null, null, null, 0.4, 0.5], "Points PerGame": [28.2, 22.7, 37.1, 35, 32.5, 33.6, 31.5, 30.1, 32.6, null, 26.9, 30.4, 29.6, 28.7, null, null, null, 22.9, 20] },
        "O'Neal": { "Age": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "Rebounds PerGame": [13.9, 13.2, 11.4, 11, 12.5, 11.4, 10.7, 13.6, 12.7, 10.7, 11.1, 10.4, 9.2, 7.4, 9.1, 8.4, 6.7, 4.8], "Assists PerGame": [1.9, 2.4, 2.7, 2.9, 3.1, 2.4, 2.3, 3.8, 3.7, 3, 3.1, 2.7, 1.9, 2, 1.5, 1.7, 1.5, 0.7], "Steals PerGame": [0.7, 0.9, 0.9, 0.6, 0.9, 0.7, 0.7, 0.5, 0.6, 0.6, 0.6, 0.5, 0.4, 0.2, 0.5, 0.7, 0.3, 0.4], "Blocks PerGame": [3.5, 2.9, 2.4, 2.1, 2.9, 2.4, 1.7, 3, 2.8, 2, 2.4, 2.3, 1.8, 1.4, 1.4, 1.4, 1.2, 1.1], "Points PerGame": [23.4, 29.3, 29.3, 26.6, 26.2, 28.3, 26.3, 29.7, 28.7, 27.2, 27.5, 22.9, 20, 17.3, 13.6, 17.8, 12, 9.2] },
        "Kobe": { "Age": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], "Rebounds PerGame": [1.9, 3.1, 5.3, 6.3, 5.9, 5.5, 6.9, 5.5, 5.9, 5.3, 5.7, 6.3, 5.2, 5.4, 5.4, 4.3, 5.7, 3.7, 5.6, 6.3, 3.1], "Assists PerGame": [1.3, 2.5, 3.8, 4.9, 5, 5.5, 5.9, 5.1, 6, 4.5, 5.4, 5.4, 4.9, 4.7, 4.6, 6.3, 5.6, 2.8, 6, 5.5, 5.4], "Steals PerGame": [0.7, 0.9, 1.4, 1.6, 1.7, 1.5, 2.2, 1.7, 1.3, 1.8, 1.4, 1.8, 1.5, 1.2, 1.2, 1.3, 1.3, 0.9, 1.4, 1.6, 1.4], "Blocks PerGame": [0.3, 0.5, 1, 0.9, 0.6, 0.4, 0.8, 0.4, 0.8, 0.4, 0.5, 0.5, 0.3, 0.1, 0.3, 0.2, 0.2, 0.2, 0.3, 0.2, 0.4], "Points PerGame": [7.6, 15.4, 19.9, 22.5, 28.5, 25.2, 30, 24, 27.6, 35.4, 31.6, 28.3, 26.8, 27.9, 25.3, 27.9, 27.3, 13.8, 22.3, 17.6] }
        };

        const players = Object.keys(data);
        const metrics = ["Points PerGame", "Rebounds PerGame", "Assists PerGame", "Steals PerGame", "Blocks PerGame"];
        const colors = d3.scaleOrdinal(d3.schemeCategory10).domain(players);

        const width = 480;
        const height = 300;
        const marginTop = 50;
        const marginRight = 25;
        const marginBottom = 30;
        const marginLeft = 30;

    // Create chart for each metric
    metrics.forEach(metric => {
        const dataset = prepareData(metric);

        const x = d3.scaleLinear()
            .domain(d3.extent(dataset, d => d.age))
            .range([marginLeft, width - marginRight]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(dataset, d => d.value)]).nice()
            .range([height - marginBottom, marginTop]);

        const svg = d3.select("#chart1").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; overflow: visible; font: 10px sans-serif;")
            
        // Add the horizontal axis.
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).ticks(width / 20).tickSizeOuter(0))
            .call(g => g.append("text")
                .attr("x", width - 30)
                .attr("y", 3)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(`-> Age `));
        // Add the vertical axis.
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", width - marginLeft - marginRight)
                .attr("stroke-opacity", 0.1))
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 30)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(`↑ ${metric} `))
        svg.append("text")
            .attr("x", width / 2) // 标题位置
            .attr("y", 30) // 标题高度
            .attr("text-anchor", "middle") // 标题居中对齐
            .style("font-size", "24px") // 字体大小
            .style('Roboto', "sans-serif") // 字体
            .style("font-weight", "bold") // 粗体
            .style("fill", "blue") // 字体颜色
            .style("stroke", "grey") // 边框颜色
            .style("stroke-width", "1px") // 边框宽度
            .text(`${metric}`);
        // Compute the points in pixel space as [x, y, z], where z is the name of the series.
        const points = dataset.map((d) => [x(d.age), y(d.value), d.player, d.value]);

        // Group the points by series.
        const groups = d3.rollup(points, v => Object.assign(v, {z: v[0][2]}), d => d[2]);
        
        const colors = d3.scaleOrdinal(d3.schemeCategory10).domain(players);
        // Draw the lines.
        const line = d3.line();
        const path = svg.append("g")
            .selectAll("path")
            .data(groups.values())
            .join("path")
            .attr("fill", "none")
            .attr("stroke", d => colors(d.z)) // 根据球员名字应用颜色
            .attr("stroke-width", 2)
            .attr("d", d => line(d.map(p => [p[0], p[1]])));

        svg.append("g")
            .selectAll("circle")
            .data(points)
            .join("circle")
            .attr("cx", d => d[0])
            .attr("cy", d => d[1])
            .attr("r", 1.5) // 圆圈半径
            .attr("fill", "black");

        const numCols = 2; // 设置列数为2
        const itemHeight = 20; // 每个标签的高度
        const colWidth = 70; // 每列的宽度

        const colors1 = d3.scaleOrdinal(d3.schemeCategory10).domain(players);
        const legend = svg.append("g")
            .attr("transform", `translate(${width - marginRight - 100},${marginTop})`)
            .attr("class", "legend")
            .selectAll("g")
            .data(players)
            .join("g")
            .attr("transform", (d, i) => {
                const col = i % numCols; // 计算当前列
                const row = Math.floor(i / numCols); // 计算当前行
                return `translate(${col * colWidth},${row * itemHeight})`;
            });
        
        legend.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", d => colors1(d));       
        legend.append("text")
            .attr("x", 15)
            .attr("y", 10)
            .text(d => d);
            
        
        // Add an invisible layer for the interactive tip.
        const dot = svg.append("g")
            .attr("display", "none");

        dot.append("circle")
            .attr("r", 2.5);

        dot.append("text")
            .attr("text-anchor", "middle")
            .attr("y", -8);

        svg
            .on("pointerenter", pointerentered)
            .on("pointermove", pointermoved)
            .on("pointerleave", pointerleft)
            .on("touchstart", event => event.preventDefault());
        
        function pointermoved(event) {
            const [xm, ym] = d3.pointer(event);
            const i = d3.leastIndex(points, ([x, y]) => Math.hypot(x - xm, y - ym));
            const [x, y, k, w] = points[i];
            path.style("stroke", ({z}) => z === k ? null : "#d3d3d3").filter(({z}) => z === k).raise();
                
            dot.attr("transform", `translate(${x},${y})`);
            dot.select("text").text(k + " " + w);
        }

        function pointerentered() {
            path.style("mix-blend-mode", null).style("stroke", "#ddd").style("stroke-width", null);
            dot.attr("display", null);
        }

        function pointerleft() {
            path.style("mix-blend-mode", "multiply").style("stroke", null).style("stroke-width", null);
            dot.attr("display", "none");
        }
        });

        function prepareData(metric) {
        const dataset = [];
        players.forEach(player => {
            data[player][metric].forEach((value, i) => {
            if (value !== null && value !== "") {
                dataset.push({ age: data[player].Age[i], value, player: player });
            }
            });
        });
        return dataset;
        }
        
}

function pic2(){
    const data = {
        "LeBron": { "Total Points": 40017, "Total Rebounds": 11185, "Total Assists": 11009, "Points PerGame": 27.1, "Rebounds PerGame": 7.5, "Assists PerGame": 7.4 },
        "Jabbar": { "Total Points": 38387, "Total Rebounds": 17440, "Total Assists": 5660, "Points PerGame": 24.6, "Rebounds PerGame": 11.2, "Assists PerGame": 3.6 },
        "Magic": { "Total Points": 17707, "Total Rebounds": 6559, "Total Assists": 10141, "Points PerGame": 19.5, "Rebounds PerGame": 7.2, "Assists PerGame": 11.2 },
        "Jordan": { "Total Points": 32292, "Total Rebounds": 6672, "Total Assists": 5633, "Points PerGame": 30.1, "Rebounds PerGame": 6.2, "Assists PerGame": 5.3 },
        "Kobe": { "Total Points": 33643, "Total Rebounds": 7047, "Total Assists": 6306, "Points PerGame": 25.0, "Rebounds PerGame": 5.2, "Assists PerGame": 4.7 },
        "O'Neal": { "Total Points": 28596, "Total Rebounds": 13099, "Total Assists": 3026, "Points PerGame": 23.7, "Rebounds PerGame": 10.9, "Assists PerGame": 2.5 },
        "Duncan": { "Total Points": 26496, "Total Rebounds": 15091, "Total Assists": 4225, "Points PerGame": 19.0, "Rebounds PerGame": 10.8, "Assists PerGame": 3.0 },
        "Curry": { "Total Points": 23668, "Total Rebounds": 4509, "Total Assists": 6119, "Points PerGame": 24.8, "Rebounds PerGame": 4.7, "Assists PerGame": 6.4 }
    };
    
    
    const players = Object.keys(data);
    const stats = ["Total Points", "Total Rebounds", "Total Assists"];
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    
    // Set chart dimensions and margins
    const width = 500;
    const height = 300;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;
    
    // Create SVG container
    const svg = d3.select("#chart2")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("style", "max-width: 100%; height: auto;");
    
    // Scale for x-axis
    const x = d3.scaleBand()
        .domain(players)
        .range([marginLeft, width - marginRight - 50])
        .padding(0.4);
    
    // Scale for y-axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(players, player => d3.max(stats, stat => data[player][stat]))])
        .nice()
        .range([height - marginBottom, marginTop]);
    
    // Tooltip for interactivity
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
    
    // Draw bars for each statistic
    stats.forEach((stat, index) => {
        svg.selectAll(`.bar-${stat}`)
            .data(players)
            .enter().append("rect")
            .attr("class", `bar bar-${stat}`)
            .attr("x", d => x(d) + (index * (x.bandwidth() / stats.length)) - 20)
            .attr("y", d => y(data[d][stat]))
            .attr("height", d => y(0) - y(data[d][stat]))
            .attr("width", x.bandwidth() + 0.5/ stats.length)
            .attr("fill", d => colors(stat))
            .on("mouseover", function(event, d) {
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(`${d} - ${stat}: ${data[d][stat]}`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                tooltip.transition().duration(800).style("opacity", 0);
            });
    });
    
    // Add x-axis
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x));
    
    // Add y-axis
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y));
        
    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width - marginRight - 150},${marginTop})`);
    
    stats.forEach((stat, i) => {
        const legendRow = legend.append("g")
            .attr("transform", `translate(0, ${i * 20})`);
    
        legendRow.append("rect")
            .attr("x", 0)
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", colors(stat));
    
        legendRow.append("text")
            .attr("x", 20)
            .attr("y", 10)
            .attr("dy", "0.32em")
            .text(stat)
            .style("font-size", "12px")
            .style("text-anchor", "start");
    })
}

function pic3(){
    const data = {
        "LeBron": { "Total Points": 40017, "Total Rebounds": 11185, "Total Assists": 11009, "Points PerGame": 27.1, "Rebounds PerGame": 7.5, "Assists PerGame": 7.4 },
        "Jabbar": { "Total Points": 38387, "Total Rebounds": 17440, "Total Assists": 5660, "Points PerGame": 24.6, "Rebounds PerGame": 11.2, "Assists PerGame": 3.6 },
        "Magic": { "Total Points": 17707, "Total Rebounds": 6559, "Total Assists": 10141, "Points PerGame": 19.5, "Rebounds PerGame": 7.2, "Assists PerGame": 11.2 },
        "Jordan": { "Total Points": 32292, "Total Rebounds": 6672, "Total Assists": 5633, "Points PerGame": 30.1, "Rebounds PerGame": 6.2, "Assists PerGame": 5.3 },
        "Kobe": { "Total Points": 33643, "Total Rebounds": 7047, "Total Assists": 6306, "Points PerGame": 25.0, "Rebounds PerGame": 5.2, "Assists PerGame": 4.7 },
        "O'Neal": { "Total Points": 28596, "Total Rebounds": 13099, "Total Assists": 3026, "Points PerGame": 23.7, "Rebounds PerGame": 10.9, "Assists PerGame": 2.5 },
        "Duncan": { "Total Points": 26496, "Total Rebounds": 15091, "Total Assists": 4225, "Points PerGame": 19.0, "Rebounds PerGame": 10.8, "Assists PerGame": 3.0 },
        "Curry": { "Total Points": 23668, "Total Rebounds": 4509, "Total Assists": 6119, "Points PerGame": 24.8, "Rebounds PerGame": 4.7, "Assists PerGame": 6.4 }
    };
    
    const players = Object.keys(data);
    const stats = ["Points PerGame", "Rebounds PerGame", "Assists PerGame"];
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    
    // Set chart dimensions and margins
    const width = 500;
    const height = 300;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;
    
    // Create SVG container
    const svg = d3.select("#chart3")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("style", "max-width: 100%; height: auto;");
    
    // Scale for x-axis
    const x = d3.scaleBand()
        .domain(players)
        .range([marginLeft, width - marginRight])
        .padding(0.4);
    
    // Scale for y-axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(players, player => d3.max(stats, stat => data[player][stat]))])
        .nice()
        .range([height - marginBottom, marginTop]);
    
    // Tooltip for interactivity
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
    
    // Draw bars for each statistic
    stats.forEach((stat, index) => {
        svg.selectAll(`.bar-${stat}`)
            .data(players)
            .enter().append("rect")
            .attr("class", `bar bar-${stat}`)
            .attr("x", d => x(d) + (index * (x.bandwidth() / stats.length) - 20))
            .attr("y", d => y(data[d][stat]))
            .attr("height", d => y(0) - y(data[d][stat]))
            .attr("width", x.bandwidth() + 0.5 / stats.length)
            .attr("fill", d => colors(stat))
            .on("mouseover", function(event, d) {
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(`${d} - ${stat}: ${data[d][stat]}`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                tooltip.transition().duration(500).style("opacity", 0);
            });
    });
    
    // Add x-axis
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x));
    
    // Add y-axis
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y));
    
    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width - marginRight - 150},${marginTop})`);
        
    stats.forEach((stat, i) => {
        const legendRow = legend.append("g")
            .attr("transform", `translate(0, ${i * 20})`);
    
        legendRow.append("rect")
            .attr("x", 0)
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", colors(stat));
    
        legendRow.append("text")
            .attr("x", 20)
            .attr("y", 10)
            .attr("dy", "0.32em")
            .text(stat)
            .style("font-size", "12px")
            .style("text-anchor", "start");
    })
}

function pic4(){
    const data = {
        "Magic": { "MVP": 3, "FMVP": 3, "NBA Champion": 5, "All-NBA Team": 10, "All-Defensive Team": 0, "NBA All-Star": 12 },
        "LeBron": { "MVP": 4, "FMVP": 4, "NBA Champion": 4, "All-NBA Team": 20, "All-Defensive Team": 6, "NBA All-Star": 20 },
        "Curry": { "MVP": 2, "FMVP": 1, "NBA Champion": 4, "All-NBA Team": 10, "All-Defensive Team": 0, "NBA All-Star": 10 },
        "Jabbar": { "MVP": 6, "FMVP": 2, "NBA Champion": 6, "All-NBA Team": 15, "All-Defensive Team": 11, "NBA All-Star": 19 },
        "Duncan": { "MVP": 2, "FMVP": 3, "NBA Champion": 5, "All-NBA Team": 15, "All-Defensive Team": 15, "NBA All-Star": 15 },
        "Jordan": { "MVP": 5, "FMVP": 6, "NBA Champion": 6, "All-NBA Team": 11, "All-Defensive Team": 9, "NBA All-Star": 14 },
        "O'Neal": { "MVP": 1, "FMVP": 3, "NBA Champion": 4, "All-NBA Team": 14, "All-Defensive Team": 3, "NBA All-Star": 15 },
        "Kobe": { "MVP": 1, "FMVP": 2, "NBA Champion": 5, "All-NBA Team": 15, "All-Defensive Team": 12, "NBA All-Star": 18 }
    };

    const width = 260;
    const height = 260;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };

    const maxValue = Math.max(...Object.values(data).flatMap(player => Object.values(player)));

    const allAxis = Object.keys(data["LeBron"]);
    const total = allAxis.length;
    const radius = Math.min(width / 2, height / 2) - 50;
    const angleSlice = Math.PI * 2 / total;
    const individualScales = {};
    allAxis.forEach(axis => {
        const maxAxisValue = Math.max(...Object.values(data).map(d => d[axis]));
        individualScales[axis] = d3.scaleLinear().range([0, radius]).domain([0, maxAxisValue]);
    });
    /*const rScale = d3.scaleLinear()
        .range([0, radius])
        .domain([0, maxValue]);*/

    const radarLine = d3.lineRadial()
        .curve(d3.curveLinearClosed)
        .radius(d => individualScales[d.axis](d.value))
        .angle((d, i) => i * angleSlice);

    const playerData = Object.keys(data).map(player => ({
        name: player,
        values: allAxis.map(axis => ({ axis, value: data[player][axis] }))
    }));

    const colors = d3.scaleOrdinal(d3.schemeCategory10);;
    console.log(allAxis)
    playerData.forEach((player, idx) => {
        const svg = d3.select("#chart4").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${width / 2 + margin.left}, ${height / 2 + margin.top})`);

        svg.selectAll(".axis")
            .data(allAxis)
            .enter()
            .append("g")
            .attr("class", "axis")
            .attr("transform", (d, i) => `rotate(${i * 360 / total})`)
            .append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", -radius)
            .attr("stroke", "gray")
            .attr("stroke-width", 1);
        
        allAxis.forEach((axis, i) => {
            svg.select(".axis")
                .append("text")
                .attr("class", "legend")
                .attr("text-anchor", "middle")
                .attr("dy", "0.3em")
                .attr("x", 0)
                .attr("y", -radius - 30)
                .attr("transform", `rotate(${i * 360 / total}) translate(0, 15)`)
                .text(axis)
        });
        
        d3.selectAll(".legend")
            .style("font-size", "10px"); 

        const playerGroup = svg.append("g").attr("class", player.name);

        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background-color", "white")
            .style("border", "1px solid #ccc")
            .style("padding", "10px")
            .style("border-radius", "5px")
            .style("pointer-events", "none")
            .style("opacity", 0);

        playerGroup.append("path")
            .datum(player.values)
            .attr("class", "line")
            .attr("d", radarLine)
            .style("stroke", colors(idx))
            .style("fill", colors(idx))
            .style("fill-opacity", 0.1);

        playerGroup.selectAll(".circle")
            .data(player.values)
            .enter()
            .append("circle")
            .attr("class", "circle")
            .attr("r", 4)
            .attr("cx", d => individualScales[d.axis](d.value) * Math.cos(angleSlice * allAxis.indexOf(d.axis) - Math.PI / 2))
            .attr("cy", d => individualScales[d.axis](d.value) * Math.sin(angleSlice * allAxis.indexOf(d.axis) - Math.PI / 2))
            .style("fill", colors(idx))
            .style("stroke", "#fff")
            .style("stroke-width", 2)
            .on("mouseover", (event, d) => {
                tooltip.transition().duration(200).style("opacity", 1);
                tooltip.html(`${d.axis}: ${d.value}`)
                    .style("left", `${event.pageX + 5}px`)
                    .style("top", `${event.pageY - 28}px`);
            })
            .on("mouseout", () => {
                tooltip.transition().duration(500).style("opacity", 0);
            });

        svg.append("text")
            .attr("class", "title")
            .attr("text-anchor", "middle")
            .attr("x", 0)
            .attr("y", -radius - 30)
            .text(player.name)
            .style("font-size", "20px")
            .style("font-weight", "bold");
    });
    

}

pic1()
pic2()
pic3()
pic4()