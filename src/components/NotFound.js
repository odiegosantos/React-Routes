import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="principal">
    <h3>404</h3>
    <p>
      Página não encontrada ou removida. 
    </p>
    <p>
      <Link to="/">Ir para Home Page</Link>
    </p>
  </main>
);
export default NotFound;