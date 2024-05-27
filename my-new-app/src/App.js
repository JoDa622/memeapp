import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Votes from './components/Votes';
import SliderImage from './components/SliderImage';
import MemeList from './components/MemeList';
import Meme from './components/Meme';

const memes = [
  { id: 1, title: "Mem 1", upvotes: 6, downvotes: 0, img: "path/to/image1.png" },
  { id: 2, title: "Mem 2", upvotes: 1, downvotes: 2, img: "path/to/image2.png" },
  // ... więcej memów
];

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('/hot');
  const [memesList, setMemesList] = useState(memes);
  const [filteredMemes, setFilteredMemes] = useState([]);

  useEffect(() => {
    updateFilteredMemes();
  }, [memesList, currentRoute]);

  const handleUpvote = (memeId) => {
    setMemesList((prevMemes) =>
      prevMemes.map((m) => {
        if (m.id === memeId) {
          return { ...m, upvotes: m.upvotes + 1 };
        }
        return m;
      })
    );
  };

  const handleDownvote = (memeId) => {
    setMemesList((prevMemes) =>
      prevMemes.map((m) => {
        if (m.id === memeId) {
          return { ...m, downvotes: m.downvotes + 1 };
        }
        return m;
      })
    );
  };

  const updateFilteredMemes = () => {
    if (currentRoute === '/hot') {
      setFilteredMemes(memesList.filter((meme) => meme.upvotes - meme.downvotes > 5));
    } else {
      setFilteredMemes(memesList);
    }
  };

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
    updateFilteredMemes();
  };

  return (
    <div className="App">
      <Navigation currentRoute={currentRoute} onRouteChange={handleRouteChange} />
      <Header />
      <Main>
        <SliderImage />
        <article>
          {/* ... treść artykułu (tekst i obrazy) */}
        </article>
        <aside>
          <Votes /* handleUpvote, handleDownvote */ />
          {/* ... sekcja about author i linki */}
        </aside>
        <section id="meme-list">
          <MemeList memes={filteredMemes} onUpvote={handleUpvote} onDownvote={handleDownvote} />
        </section>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
for (const btn of document.querySelectorAll('.vote')) {
  btn.addEventListener('click', event => {
    event.currentTarget.classList.toggle('on');
  });
}

