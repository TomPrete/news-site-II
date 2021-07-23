import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';


// ---- CLASS BASED COMPONENT
// class ArticlePage extends Component {
//   render() {
//     let article = News[this.props.match.params.articleID -1]
//     return (
//       <div>
//         <Article {...article} />
//       </div>
//     );
//   }
// }

// ---- FUNCTIONAL COMPONENT
const ArticlePage = (props) => {
  let article = News[props.match.params.articleID - 1]
  return (
    <div>
      <Article {...article} />
    </div>
  );
}

export default ArticlePage;