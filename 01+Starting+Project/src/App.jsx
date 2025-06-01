import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Im learning & Mastering GitHub Actions</h1>
        <h2>Im figuring out why the action fails when the pull request is completed</h2>
        <h3>it seems like the code event step was causing the problem</h3>
      </header>
      <MainContent />
    </>
  );
}

export default App;
