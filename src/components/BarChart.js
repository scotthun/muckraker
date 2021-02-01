// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


var data =[
  {
    "country": "AD",
    "hot dog": 103,
    "hot dogColor": "hsl(242, 70%, 50%)",
    "burger": 94,
    "burgerColor": "hsl(193, 70%, 50%)",
    "sandwich": 177,
    "sandwichColor": "hsl(73, 70%, 50%)",
    "kebab": 88,
    "kebabColor": "hsl(190, 70%, 50%)",
    "fries": 90,
    "friesColor": "hsl(234, 70%, 50%)",
    "donut": 42,
    "donutColor": "hsl(156, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 76,
    "hot dogColor": "hsl(2, 70%, 50%)",
    "burger": 199,
    "burgerColor": "hsl(38, 70%, 50%)",
    "sandwich": 109,
    "sandwichColor": "hsl(95, 70%, 50%)",
    "kebab": 191,
    "kebabColor": "hsl(116, 70%, 50%)",
    "fries": 77,
    "friesColor": "hsl(305, 70%, 50%)",
    "donut": 53,
    "donutColor": "hsl(225, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 142,
    "hot dogColor": "hsl(153, 70%, 50%)",
    "burger": 140,
    "burgerColor": "hsl(329, 70%, 50%)",
    "sandwich": 76,
    "sandwichColor": "hsl(298, 70%, 50%)",
    "kebab": 6,
    "kebabColor": "hsl(164, 70%, 50%)",
    "fries": 96,
    "friesColor": "hsl(91, 70%, 50%)",
    "donut": 124,
    "donutColor": "hsl(279, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 161,
    "hot dogColor": "hsl(81, 70%, 50%)",
    "burger": 121,
    "burgerColor": "hsl(116, 70%, 50%)",
    "sandwich": 56,
    "sandwichColor": "hsl(329, 70%, 50%)",
    "kebab": 93,
    "kebabColor": "hsl(209, 70%, 50%)",
    "fries": 7,
    "friesColor": "hsl(213, 70%, 50%)",
    "donut": 96,
    "donutColor": "hsl(250, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 80,
    "hot dogColor": "hsl(49, 70%, 50%)",
    "burger": 89,
    "burgerColor": "hsl(137, 70%, 50%)",
    "sandwich": 5,
    "sandwichColor": "hsl(57, 70%, 50%)",
    "kebab": 18,
    "kebabColor": "hsl(13, 70%, 50%)",
    "fries": 105,
    "friesColor": "hsl(171, 70%, 50%)",
    "donut": 189,
    "donutColor": "hsl(297, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 56,
    "hot dogColor": "hsl(213, 70%, 50%)",
    "burger": 6,
    "burgerColor": "hsl(44, 70%, 50%)",
    "sandwich": 5,
    "sandwichColor": "hsl(224, 70%, 50%)",
    "kebab": 6,
    "kebabColor": "hsl(301, 70%, 50%)",
    "fries": 89,
    "friesColor": "hsl(296, 70%, 50%)",
    "donut": 53,
    "donutColor": "hsl(330, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 9,
    "hot dogColor": "hsl(259, 70%, 50%)",
    "burger": 84,
    "burgerColor": "hsl(277, 70%, 50%)",
    "sandwich": 163,
    "sandwichColor": "hsl(252, 70%, 50%)",
    "kebab": 54,
    "kebabColor": "hsl(9, 70%, 50%)",
    "fries": 111,
    "friesColor": "hsl(153, 70%, 50%)",
    "donut": 126,
    "donutColor": "hsl(352, 70%, 50%)"
  }
]

var pieData = [
  {
    "id": "sass",
    "label": "sass",
    "value": 231,
    "color": "hsl(204, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 560,
    "color": "hsl(104, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 580,
    "color": "hsl(315, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 140,
    "color": "hsl(207, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 236,
    "color": "hsl(104, 70%, 50%)"
  }
]

const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

var bar = MyResponsiveBar(data);

export {bar}
export {data}
export {pieData}