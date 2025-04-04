import LoginPage from "./pages/LoginPage.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <LoginPage/>
    </div>
  );
}

export default App;
