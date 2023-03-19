import { VegaLite } from 'react-vega';

export const MyChart = () => {

  const data = [
    { "Department": "Marketing", "Members": 23 },
    { "Department": "Sales", "Members": 32 },
    { "Department": "Human Resources", "Members": 17 },
    { "Department": "Finance", "Members": 28 },
    { "Department": "Operations", "Members": 40 },
    { "Department": "Linh", "Members": 40 },
    { "Department": "Doan", "Members": 40 }
  ]

  const spec = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A basic bar chart example, with value labels shown upon mouse hover.",
    "width": 500,
    "height": 200,
    "padding": 5,

    "data": [
      {
        "name": "table",
        "values": data
      }
    ],

    "signals": [
      {
        "name": "tooltip",
        "value": {},
        "on": [
          { "events": "rect:mouseover", "update": "datum" },
          { "events": "rect:mouseout", "update": "{}" }
        ]
      }
    ],

    "scales": [
      {
        "name": "xscale",
        "type": "band",
        "domain": { "data": "table", "field": "Department" },
        "range": "width",
        "padding": 0.5,
        "round": true
      },
      {
        "name": "yscale",
        "domain": { "data": "table", "field": "Members" },
        "nice": true,
        "range": "height"
      }
    ],

    "axes": [
      { "orient": "bottom", "scale": "xscale", "labelColor": {"value": "#fff"} },
      { "orient": "left", "scale": "yscale", "labelColor": {"value": "#fff"} }
    ],

    "marks": [
      {
        "type": "rect",
        "from": { "data": "table" },
        "encode": {
          "enter": {
            "x": { "scale": "xscale", "field": "Department" },
            "width": { "scale": "xscale", "band": 1 },
            "y": { "scale": "yscale", "field": "Members" },
            "y2": { "scale": "yscale", "value": 0 }
          },
          "update": {
            "fill": { "value": "steelblue" }
          },
          "hover": {
            "fill": { "value": "#FF4401" }
          }
        }
      },
      {
        "type": "text",
        "encode": {
          "enter": {
            "align": { "value": "center" },
            "baseline": { "value": "bottom" },
            "fill": { "value": "#fff" }
          },
          "update": {
            "x": { "scale": "xscale", "signal": "tooltip.Department", "band": 0.5 },
            "y": { "scale": "yscale", "signal": "tooltip.Members", "offset": -2 },
            "text": { "signal": "tooltip.Members" },
            "fillOpacity": [
              { "test": "datum === tooltip", "value": 0 },
              { "value": 1 }
            ]
          }
        }
      }
    ]
  };
  

  return (
    <VegaLite spec={spec} />
  )
} 
