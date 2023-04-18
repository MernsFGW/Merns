import { VegaLite } from 'react-vega';
import './graph.css';

export const MyChart = () => {
  const data = [
    { "Type": "Anonymous", "Ideas": 23 },
    { "Type": "Non-Anonymous", "Ideas": 32 },
  ]

  const data2 = [
    { "Term": "Spring", "Ideas": 23 },
    { "Term": "Summner", "Ideas": 32 },
    { "Term": "Fall", "Ideas": 17 },
    { "Term": "Winter", "Ideas": 28 },
  ]

  const data3 = [
    { "Category": "Meeting", "Ideas": 16 },
    { "Category": "Greeting", "Ideas": 24 },
    { "Category": "Teaching", "Ideas": 17 },
    { "Category": "Technology", "Ideas": 28 },
    { "Category": "Science", "Ideas": 10 },
    { "Category": "Machine Learning", "Ideas": 7 },
  ]

  const data4 = [
    { "Department": "IT", "Ideas": 16 },
    { "Department": "Graphic", "Ideas": 24 },
    { "Department": "Business", "Ideas": 17 },
    { "Department": "Marketing", "Ideas": 28 },
    { "Department": "Digital", "Ideas": 10 },
  ]

  const data5 = [
    { "Department": "IT", "Users": 16 },
    { "Department": "Graphic", "Users": 24 },
    { "Department": "Business", "Users": 17 },
    { "Department": "Marketing", "Users": 28 },
    { "Department": "Digital", "Users": 10 },
  ]

  const spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Number of post per Term",
    "title": {"text": "Number of Ideas per Term", "orient": "bottom"},
    "width": 630,
    "height": 318,
    "data": {
      "values": data2,
    },
    "mark": "bar",
    "encoding": {
      "y": {"field": "Term", "type": "nominal", "axis": {"labelAngle": 0}},
      "x": {"field": "Ideas", "type": "quantitative"}
    }
  };

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text": "Anonymous and Non-Anonymous Ideas", "orient": "bottom"},
    "description": "Pie Chart with percentage_tooltip",
    "width": 230,
    "height": 350,
    "data": {
      "values": data,
    },
    "mark": { "type": "arc", "outerRadius": 120, "tooltip": true },
    "encoding": {
      "theta": { "field": "Ideas", "type": "quantitative", "stack": "normalize" },
      "color": { "field": "Type", "type": "nominal" }
    }
  };

  const spec3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Number of post per Term",
    "title": {"text": "Number of Ideas per Category", "orient": "bottom"},
    "width": 1000,
    "height": 318,
    "data": {
      "values": data3,
    },
    "mark": "bar",
    "encoding": {
      "y": {"field": "Category", "type": "nominal", "axis": {"labelAngle": 0}},
      "x": {"field": "Ideas", "type": "quantitative"}
    }
  }

  const spec4 = { 
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Number of post per Department",
    "title": {"text": "Number of Ideas per Department", "orient": "bottom"},
    "width": 630,
    "height": 318,
    "data": {
      "values": data4,
    },
    "mark": "bar",
    "encoding": {
      "y": {"field": "Department", "type": "nominal", "axis": {"labelAngle": 0}},
      "x": {"field": "Ideas", "type": "quantitative"}
    }
  };

  const spec5 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text": "User percentage per Department", "orient": "bottom"},
    "description": "Pie Chart with percentage_tooltip",
    "width": 230,
    "height": 350,
    "data": {
      "values": data5,
    },
    "mark": { "type": "arc", "outerRadius": 120, "tooltip": true },
    "encoding": {
      "theta": { "field": "Users", "type": "quantitative", "stack": "normalize" },
      "color": { "field": "Department", "type": "nominal" }
    }
  };
  
  return (
    <div className='dashboard-container'>
      <div className='dashboard-row'>
        <div className='dashboard-column'>
          <VegaLite padding={20} actions={false} spec={spec3} />
        </div>
      </div>
      <div className='dashboard-row'>
        <div className='dashboard-column'>
          <VegaLite padding={20} actions={false} spec={spec} />
        </div>
        <div className='dashboard-column'>
          <VegaLite padding={20} actions={false} spec={spec2} />
        </div>
      </div>
      <div className='dashboard-row'>
        <div className='dashboard-column'>
          <VegaLite padding={20} actions={false} spec={spec4} />
        </div>
        <div className='dashboard-column'>
          <VegaLite padding={20} actions={false} spec={spec5} />
        </div>
      </div>
    </div>
  )
} 
