import React from 'react';
import './App.css';

const Navbar = () => {
  const handleDropdownClick = (event) => {
    event.preventDefault();
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.classList.toggle('show');
  };

  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <div className="dropdown">
        <a href="#news" onClick={handleDropdownClick}>News</a>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#about" onClick={handleDropdownClick}>About</a>
        <div className="dropdown-content">
          <a href="#">Link A</a>
          <a href="#">Link B</a>
          <a href="#">Link C</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#services" onClick={handleDropdownClick}>Services</a>
        <div className="dropdown-content">
          <a href="#">Service 1</a>
          <a href="#">Service 2</a>
          <a href="#">Service 3</a>
        </div>
      </div>
    </nav>
  );
};

const Banner = () => {
  const [index, setIndex] = React.useState(0);
  const banners = [
    { image: 'image1.jpg', title: 'Eye Sea' },
    { image: 'image2.jpg', title: 'Calm Ocean' },
    { image: 'image3.jpg', title: 'Light Sun ' },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner" style={{ backgroundImage: `url(/images/${banners[index].image})` }}>
      <div className="content">
        <h1>{banners[index].title}</h1>
        <a href="#">Welcome</a>
      </div>
    </div>
  );
};

const HorizontalBlocks = () => {
  const blocks = [
    { title: 'Block 1', id: 1 },
    { title: 'Block 2', id: 2 },
    { title: 'Block 3', id: 3 },
    { title: 'Block 4', id: 4 },
    { title: 'Block 5', id: 5 },
    { title: 'Block 6', id: 6 },
    { title: 'Block 7', id: 7 },
    { title: 'Block 8', id: 8 },
  ];

  const [scrollX, setScrollX] = React.useState(0);

  const handleScrollRight = () => {
    const container = document.getElementById('blocks-container');
    if (container) {
      setScrollX(scrollX - 1000); // Adjust this value for desired scroll distance
    }
  };

  const handleScrollLeft = () => {
    const container = document.getElementById('blocks-container');
    if (container) {
      setScrollX(scrollX + 1000); // Adjust this value for desired scroll distance
    }
  };

  return (
    <div className="horizontal-scroll">
      <div className="arrow left" onClick={handleScrollLeft}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="blocks-container" id="blocks-container" style={{ transform: `translateX(${scrollX}px)` }}>
        {blocks.map((block) => (
          <div key={block.id} className="block">
            <div className="block-content">{block.title}</div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={handleScrollRight}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <HorizontalBlocks />
    </div>
  );
}

export default App;
