import { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [posts, setPost] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    fetch(`https:/www.reddit.com/r/${text}.json`).then(res => {
      if (res.status != 200){
        console.log('error')
        return;
      }

      res.json().then(data => {
        if(data != null){
          setPost(data.data.children)
        }
      })
    })
  }, [text])

  console.log(posts)

  return (
    <div className="App">
      <input placeholder="search for subreddits" value={text} onChange={(e) => setText(e.target.value)} type="text" className="text-input"/>

    <div className="posts-container">
      {posts.map((item) => (
        item.data.url != null ? 
        <Post title={item.data.title} image={item.data.url} link={item.data.permalink}/>
        : ''
      ))}
    </div>

    </div>
  );
}

export default App;
