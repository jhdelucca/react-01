import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavComponent } from './nav';
import { CabsComponent } from './cabs';
import { ArticleComponent } from './article';
import { AssideComponent } from './asside';
import { FooterComponent } from './footer';

function App() {
  return (
    <div className="App">
     <header>
      <CabsComponent />
      <NavComponent />
    </header>

    <article>
        <ArticleComponent />
    </article>

    <aside>
      <AssideComponent />
    </aside>

    <footer>
      <FooterComponent />
    </footer>




     
    </div>
  );
}

export default App;
