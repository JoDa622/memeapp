import React from 'react';
import SliderImage from './components/SliderImage';
import MemeList from './components/MemeList';

const Main = () => {
  return (
    <main>
      <SliderImage />
      <article>
        {/* ... treść artykułu (tekst i obrazy) */}
      </article>
      <aside>
        <Votes /* handleUpvote, handleDownvote */ />
        {/* ... sekcja about author i linki */}
      </aside>
      <section id="meme-list">
        <MemeList />
      </section>
    </main>
  );
};

export default Main;
