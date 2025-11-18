import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./routes/AppRouter";

const App = () => (
  <>
    <Header />
    <main>
      <AppRouter />
    </main>
    <Footer />
  </>
);

export default App;
