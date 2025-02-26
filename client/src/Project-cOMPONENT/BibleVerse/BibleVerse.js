import React, { Component } from "react";
import "./BibleVerse.css";

class BibleVerse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verse: "Loading...",
    };
  }

  componentDidMount() {
    this.fetchRandomVerse();
  }

  fetchRandomVerse = () => {
    const apiKey = "4aadec14f2aaf5cf0aa141835ab19535880110d0"; // Replace with your API key

    // List of books with max chapters
    const books = {
      Genesis: 50,
      Psalms: 150,
      Proverbs: 31,
      Matthew: 28,
      John: 21,
      Romans: 16,
    };

    // Pick a random book
    const bookNames = Object.keys(books);
    const randomBook = bookNames[Math.floor(Math.random() * bookNames.length)];
    const maxChapters = books[randomBook];

    // Pick a random chapter
    const randomChapter = Math.floor(Math.random() * maxChapters) + 1;

    // Construct the passage query
    const passage = `${randomBook} ${randomChapter}`;

    fetch(`https://api.esv.org/v3/passage/text/?q=${passage}&include-footnotes=false&include-headings=false&include-verse-numbers=true`, {
      headers: { Authorization: `Token ${apiKey}` },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.passages && data.passages.length > 0) {
          this.setState({ verse: data.passages[0] });
        } else {
          this.setState({ verse: "No verse found. Try again!" });
        }
      })
      .catch((error) => {
        console.error("Error fetching verse:", error);
        this.setState({ verse: "Error loading verse. Please try again." });
      });
  };

  render() {
    return (
      <div className="verse-container">
        <h2>Random Bible Verse</h2>
        <p className="verse-text">{this.state.verse}</p>
        <button className="fetch-button" onClick={this.fetchRandomVerse}>
          Get New Verse
        </button>
      </div>
    );
  }
}

export default BibleVerse;
