function buildChart(sampledata){
        d3.json("data/samples.json").then((data)=>
        {
                // only get OTU _ids for sample passed in, need filter
                var results = data.samples.filter(item => item.id == sampleData)
                var theData = {
                        x: results.otu_ids,
                        y: results.sample_values,
                        mode: 'markers',
                        text: results.otu_labels,
                        marker: {
                          size: results.sample_values,
                          color: results.otu_ids
                        }
                      };
                      
                      // var data = [trace1];
                      
                      var layout = {
                        title: 'Marker Size',
                        showlegend: false,
                        height: 600,
                        width: 600
                      };
                      
                      Plotly.newPlot('Bubble', theData, layout);
        }
}

function init(){
        var dataSelect = d3.select("#selDataset")
        d3.json("data/samples.json").then((data)=> 
        {
                var sampleNames = data.names;
                sampleNames.forEach((sample)=>
                {
                        selector.append("option")
                        .text(sample)
                        .property("value", sample)
                })
        buildChart(sampleNames[0])
        })
                
}