import { Chat } from "./components/Chat";
import { UserProvider } from "./contexts/UserContext";

const App = () => (
  <UserProvider>
    <Chat className="h-screen mx-32 py-16" />
  </UserProvider>
);

export default App;
