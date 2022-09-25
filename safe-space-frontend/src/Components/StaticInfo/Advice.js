import NavBar from '../NavBar';
import Footer from '../Footer';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import pic1 from '../../images/illustration/DrawKit Vector Illustration Mental Health 10.png';
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
  Image,
  Group,
  Modal,
} from '@mantine/core';
import { parseWithOptions } from 'date-fns/esm/fp';
import AdvicePreview from './AdvicePreview';
import AdvicePreviewList from './AdvicePreviewList';

export default function Advice() {
  const [allArticles, setAllArticles] = useState('');
  const [photo, setPhoto] = useState('');
  const [opened, setOpened] = useState(false);

  const getAllArticles = async () => {
    let response = await axios.get(`${BACKEND_URL}/articles/`);
    console.log('articles: ', response);
    console.log('articles.data: ', response.data);
    setAllArticles(response.data);
  };

  // const getPhotos = async () => {
  //   let photos = await axios.get(
  //     `https://api.unsplash.com/photos/random/?topics=mentalhealth&client_id=${process.env.REACT_APP_APP_ACCESS_KEY}`
  //   );
  //   // console.log('photos: ', photos.data.results);
  //   console.log('photos: ', photos.data);
  //   // setPhoto(photos.data.results[0].urls.regular);
  //   setPhoto(photos.data.urls.regular);
  // };

  useEffect(() => {
    // getPhotos();
    getAllArticles();
  }, []);

  // modify it so that it only shows the title and article number, a model will show the full article
  return (
    <div className="Page-body">
      <NavBar />
      <div className="Content-container">
        <Container className="Content-body" size="sm" px="xs">
          <Card withBorder shadow="sm" radius="md">
            {allArticles && allArticles.length
              ? allArticles.map((article, index) => (
                  <div className="Articles-single" key={article.id}>
                    {' '}
                    <Text color="dimmed" align="center">
                      Article #{article.id}{' '}
                    </Text>
                    <Title size={20}>{article.title}</Title>
                    <Title size={12}>Written by: {article.author}</Title> <br />
                    <Modal
                      centered
                      opened={opened}
                      onClose={() => setOpened(false)}
                      title="Read Article"
                      size="xl"
                      overlayOpacity={0.3}
                      overlayBlur={3}
                      transition="fade"
                    >
                      <Text align="justify"> {article.content}</Text>
                    </Modal>
                    <Group position="center">
                      <Button variant="outline" onClick={() => setOpened(true)}>
                        Read Article
                      </Button>
                    </Group>
                    <br />
                  </div>
                ))
              : 'no articles listed'}
          </Card>
          <br />

          <div
            style={{
              width: 400,
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 30,
              marginBottom: 30,
            }}
          >
            <Image src={pic1} alt="forumtipsicon" className="consultation" />
          </div>

          <br />
          <br />
        </Container>
      </div>

      <Footer />
    </div>
  );
}

// <div className="Page-body">
//       <NavBar />
//       <div className="Content-container">
//         <Container className="Content-body" size="md" px="xs">
//           <Card withBorder shadow="sm" radius="md">
//             {allArticles && allArticles.length
//               ? allArticles.map((article, index) => (
//                   <div className="Articles-single" key={article.id}>
//                     {' '}
//                     <Text color="dimmed" align="justify">
//                       Article #{article.id}{' '}
//                     </Text>
//                     <Title size={20}>{article.title}</Title>
//                     <Title size={12}>
//                       Written by: {article.author}
//                     </Title> <br />{' '}
//                     <Text align="justify"> {article.content}</Text>
//                     <br />
//                   </div>
//                 ))
//               : 'no articles listed'}
//           </Card>
//           <br />

//           <div
//             style={{
//               width: 400,
//               marginTop: 50,
//               marginLeft: 'auto',
//               marginRight: 30,
//               marginBottom: 30,
//             }}
//           >
//             <Image src={pic1} alt="forumtipsicon" className="consultation" />
//           </div>
