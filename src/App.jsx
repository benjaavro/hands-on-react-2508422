function App() {
  const string = "Ola k ase";
  const testStyles = {color: "lightblue"};
  return (
    <div className="container">
      <article>
        <hgroup>
        <h1>Meet the StarGazers</h1>
        <h2 style={testStyles}>{string}</h2>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      </hgroup>
      </article>
    </div>
  )
}
export default App
