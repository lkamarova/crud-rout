import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import PostsPage from './components/PostsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" end element={<PostsPage />} />
          <Route path="posts/:postId" element={<PostPage />} />          
          <Route path="posts/new" element={<NewPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);