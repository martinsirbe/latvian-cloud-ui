import './App.css'
import {QueryClient, QueryClientProvider} from 'react-query';
import Jokes from "./components/Jokes/Jokes.tsx";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Jokes />
        </QueryClientProvider>
    )
}

export default App
