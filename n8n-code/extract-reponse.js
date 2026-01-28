const groqResponse = $input.first().json;
let aiReport = groqResponse.choices[0].message.content;

aiReport = aiReport.replace(/\\n/g, '\n');

const styledHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 650px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      line-height: 1.6;
    }
    .container {
      background-color: white;
      padding: 35px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    h1 {
      color: #2c3e50;
      border-bottom: 4px solid #3498db;
      padding-bottom: 12px;
      margin-bottom: 25px;
    }
    h2 {
      color: #2c3e50;
      margin-top: 25px;
      margin-bottom: 15px;
      padding-left: 10px;
      border-left: 4px solid #3498db;
    }
    h3 {
      color: #34495e;
      margin-top: 15px;
      font-size: 16px;
    }
    strong {
      color: #34495e;
    }
    .footer {
      margin-top: 35px;
      padding-top: 20px;
      border-top: 2px solid #ecf0f1;
      font-size: 12px;
      color: #95a5a6;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📋 Daily Weather & Air Quality Report - Lodz</h1>
    ${aiReport}
    <div class="footer">
      Generated on ${new Date().toLocaleString()}<br>
      Powered by OpenWeatherMap & Groq AI
    </div>
  </div>
</body>
</html>
`;

return [{
  json: {
    report: styledHtml
  }
}];
