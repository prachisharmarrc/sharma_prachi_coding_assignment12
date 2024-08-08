import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import Card from './components/Card/Card';
import Label from './components/Label/Label';
import Button from './components/Button/Button';
import Text from './components/Text/Text';

function App() {
  const dropdownOptions = [
    { value: 'cms', label: 'CMS Project' },
    { value: 'portfolio', label: 'Freelancing Portfolio Websites' },
    { value: 'other', label: 'Other Projects' }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Prachi Sharma</h2>
        </div>
        <div className="navbar-menu">
          <Dropdown options={dropdownOptions} disabled={false} />
        </div>
      </nav>

      <section className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a Full Stack Web Developer Student, actively learning and improving. Explore my projects below!</p>
      </section>

      <section className="portfolio-section">
        <Card
          title="CMS Project"
          description="This is a content management system project."
          imageUrl="path/to/cms-project.jpg"
          disabled={false}
        />
        <Card
          title="Freelancing Portfolio Websites"
          description="Various portfolio websites built for freelance clients."
          imageUrl="path/to/portfolio-project.jpg"
          disabled={false}
        />
        <Card
          title="Other Projects"
          description="A collection of other projects I've worked on."
          imageUrl="path/to/other-projects.jpg"
          disabled={false}
        />
        <div className="portfolio-item skills">
          <Label className="portfolio-label">My Skills</Label>
          <Button disabled={false} className="portfolio-button">
            Explore More
          </Button>
        </div>
      </section>

      <footer className="footer">
        <Text>Designed and developed with ❤️ by Prachi Sharma</Text>
      </footer>
    </div>
  );
}

export default App;
