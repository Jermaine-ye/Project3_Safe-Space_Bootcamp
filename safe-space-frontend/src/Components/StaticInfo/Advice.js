import NavBar from '../NavBar';
import Footer from '../Footer';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Form,
  Input,
  Textarea,
} from '@mantine/core';

export default function Advice() {
  const [articleId, setArticleId] = useState();
  const [allArticles, setAllArticles] = useState();

  const getAllArticles = async () => {
    let response = await axios.get(`${BACKEND_URL}/articles/`);
    console.log('articles: ', response);
    console.log('articles.data: ', response.data);
    setAllArticles(response.data);
  };

  useEffect(() => {
    getAllArticles();
  }, []);







  return (
    <div>
      <NavBar />
      Advice
     

{allArticles && allArticles.length ? (allArticles.map((article,index)=> (<div key={article.id}> <Label>Article 1 #{article.id}</Label> {article.title} {article.author} {article.content})): "no articles listed")}







      <Footer />
    </div>
  );
}
