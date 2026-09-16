import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './Pages/Main/Main';
import News from './Pages/News/News';
import Blog from './Pages/Blog/Blog';
import Podcasts from './Pages/Podcasts/Podcasts';
import Resources from './Pages/Resources/Resources';
import Contact from './Pages/Contact/Contact';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index path="/" element={<Main />} />
                    <Route index path="/news" element={<News />} />
                    <Route path="/news/blog/:id" element={<Blog />} />
                    <Route path="/podcasts" element={<Podcasts />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
