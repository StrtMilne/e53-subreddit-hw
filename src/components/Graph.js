import React from "react";
import Chart from "react-google-charts";

const Graph = ({items}) => {

    let arrayInfo = () => {
        const array = [['Rank', 'Comments', 'Downvotes', 'Author', 'Score']];
        for (let i = 0; i < items.length; i++) {
            let arr = [
                String(i + 1),
                items[i].data.num_comments,
                items[i].data.downs,
                items[i].data.author,
                items[i].data.score
            ];
            array.push(arr);
        }
        console.log(array)
        return array;
    }

    return(
        <div className="chart">
            <Chart className="container"
                width={"100%"}
                height={'300px'}
                chartType="BubbleChart"
                data={arrayInfo()}
                options={{
                title:
                    'Stats: correlation between downvotes, comments and score for top 10',
                hAxis: { title: 'Comments' },
                vAxis: { title: 'Downvotes' },
                bubble: { textStyle: { fontSize: 11 } },
                }}
            />
        </div>
    )    
}

export default Graph;