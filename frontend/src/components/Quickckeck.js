import { useState } from "react";

const [state,setstate] = useState(initialvalue);
// App.jsx
import React from "react";

function App() {
  const username = "SibuCodeLab";

  return <Parent username={username} />;
}

function Parent({ username }) {
  return <Child username={username} />;
}

function Child({ username }) {
  return <GrandChild username={username} />;
}

function GrandChild({ username }) {
  return <h2>Hello, {username}!</h2>;
}

export default App;


// ❓ Why Can’t We Handle the Request Body in the Frontend?
// Actually, we can send a request body from the frontend — and we often do, especially with POST, PUT, or PATCH requests (e.g. using fetch() or axios).

// BUT...

// 🧨 What We Can’t Do:
// The frontend cannot directly "handle" the incoming request body (like a server does) — because the frontend:

// Doesn’t receive HTTP requests.

// Isn’t a server.

// Is only sending data, not processing incoming requests.

// 🧠 Think of it like this:
// Role	Can Do What
// Frontend	Sends the request body using fetch() or axios
// Backend	Handles the request body using frameworks like Express, Django, etc.




