import "swagger-ui-react/swagger-ui.css"
import SwaggerUI from "swagger-ui-react";

function App() {
  return (
    <div className="App">
      <p>Minimal example: Vite.js and Swagger UI.</p>
      <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json"></SwaggerUI>
    </div>
  );
}

export default App;
