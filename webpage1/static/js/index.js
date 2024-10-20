// Simple React component using Tailwind classes
function App() {
  return (
    <div className="p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-blue-600">Hello, React with Tailwind and Django!</h1>
      <p className="text-gray-700 mt-4">This is a React component styled with Tailwind CSS.</p>
    </div>
  );
}

// Rendering the component
ReactDOM.render(<App />, document.getElementById('root'));