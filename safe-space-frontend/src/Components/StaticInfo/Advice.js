import NavBar from '../NavBar';
import Footer from '../Footer';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../constants.js';
import pic1 from '../../images/illustration/DrawKit Vector Illustration Mental Health 2.png';
import pic2 from '../../images/illustration/DrawKit Vector Illustration Mental Health 9.png';
import {
  Button,
  Card,
  Text,
  Title,
  Container,
  Image,
  Group,
  Modal,
} from '@mantine/core';

export default function Advice() {
  const [allArticles, setAllArticles] = useState('');
  const [opened, setOpened] = useState(false);

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
    <div className="Page-body">
      <NavBar />
      <div className="Content-container">
        <br />
        <Title color="blue" order={2} weight={500} align="center">
          Advice Articles
        </Title>
        <div
          style={{
            width: 400,
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 20,
          }}
        >
          <Image src={pic2} alt="forumtipsicon" className="consultation" />
        </div>
        <Container>
          <Text align="justify" size="md">
            This article provides a brief overview to mental health. The first
            section explains what mental health is, common signs and symptoms of
            mental health issues, and what constitutes an individual’s mental
            health. The second section introduces mental health services and
            treatment options, as well as mental health tips everyone can
            benefit from.
          </Text>
        </Container>
        <br />
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
              width: 500,
              marginTop: 10,
              marginLeft: 'auto',
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            <Image src={pic1} alt="forumtipsicon" className="consultation" />
          </div>
          <br />
        </Container>
      </div>

      <Footer />
    </div>
  );
}
