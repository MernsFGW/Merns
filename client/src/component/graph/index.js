import { VegaLite } from 'react-vega';

const data = {
  values: [
    { department: 'Marketing', users: 10 },
    { department: 'Sales', users: 15 },
    { department: 'Engineering', users: 20 },
    { department: 'Product', users: 12 },
    { department: 'Design', users: 8 },
  ],
  total_users: null,
};

// Calculate the total number of users
data.total_users = data.values.reduce((total, { users }) => total + users, 0);

const pieSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple pie chart that shows the number of users in each department",
  "data": data,
  "mark": { "type": "arc", "innerRadius": 0, "outerRadius": 120 },
  "encoding": {
    "theta": { "field": "users", "type": "quantitative", "title": "Users" },
    "color": { "field": "department", "type": "nominal", "title": "Department" },
    "tooltip": [
      { "field": "users", "type": "quantitative", "title": "Users" },
      { "field": "percentage", "type": "quantitative", "title": "Percentage of Total Users", "format": ".1%" }
    ]
  }
};

const labelSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Labels for a pie chart",
  "data": data,
  "mark": {
    "type": "text",
    "radius": 120,
    "theta": "mid",
    "align": "center",
    "baseline": "middle",
    "dx": 5
  },
  "encoding": {
    "text": { "field": "department", "type": "nominal", "title": "Department" },
    "theta": {
      "field": "users",
      "type": "quantitative",
      "aggregate": "sum",
      "stack": true,
      "title": "Percentage",
      "format": ".1%"
    },
    "color": { "value": "black" },
    "tooltip": [
      { "field": "users", "type": "quantitative", "title": "Users" },
      { "as": "percentage", "calculate": "datum.users / data.total_users * 100", "format": ".1%", "title": "Percentage of Total Users" }
    ]
  }
};

const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "layer": [
    pieSpec,
    labelSpec
  ]
};

export const MyChart = () => <VegaLite spec={spec} />;
