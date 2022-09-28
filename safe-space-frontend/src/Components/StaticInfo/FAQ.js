import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import {
  Card,
  Text,
  Title,
  Grid,
  Container,
  Image,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCirclePlus } from '@tabler/icons';
import pic1 from '../../images/illustration/DrawKit Vector Illustration Mental Health 4.png';
import pic2 from '../../images/illustration/DrawKit Vector Illustration Mental Health 5.png';

export default function FAQ() {
  return (
    <div className="Page-body ">
      <NavBar />
      <div className="Content-container">
        <Container className="Content-body" size="md" px="xs">
          <Title color="blue" order={1} weight={500} align="center">
            FAQ
          </Title>
          <Card className="FAQ-list" radius="md" shadow="sm" p="md">
            <Grid grow>
              <Grid.Col span={4}>
                <List
                  left
                  withPadding
                  spacing="xs"
                  size="md"
                  icon={
                    <ThemeIcon color="blue" size={20} radius="xl">
                      <IconCirclePlus size={16} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>How do I select a suitable Therapist?</List.Item>
                  <List.Item>
                    What are the different services offered?
                  </List.Item>
                  <List.Item>How long is each session?</List.Item>
                  <List.Item>
                    Are my sessions with my Therapist confidential?
                  </List.Item>
                  <List.Item>
                    How often should I have therapy sessions?
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={2}>
                {' '}
                <div
                  style={{
                    width: 400,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <Image
                    src={pic1}
                    alt="forumtipsicon"
                    className="consultation"
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Card>
          <br />
          <br />
          <Title color="blue" order={3} weight={500} align="center">
            How do I select a suitable Therapist?
          </Title>
          <br />
          <Text align="justify" size="md">
            You may use the evaluation form on our website to shortlist
            Therapists who best suit your needs. We will recommend Therapists on
            the basis of issues you would like to seek support for, and any
            preferences you may have in terms of gender, language, service type,
            medium, and country. You may wish to go through their individual
            profiles to learn more about their practice, background and approach
            to therapy.
          </Text>
          <br />
          <br />
          <Title color="blue" order={4} weight={500} align="center">
            What are the different services offered?
          </Title>
          <br />
          <Text align="justify" size="md">
            We offer individual, couples counselling services at the moment. The
            services each Therapist offers are indicated on their profile. Based
            on your evaluation preferences and results, we will recommend 3-5
            Therapists who might best suit your needs.
          </Text>
          <br />
          <br />
          <Title color="blue" order={4} weight={500} align="center">
            Are my sessions with my Therapist confidential?
          </Title>
          <br />
          <Text align="justify" size="md">
            Yes, what you share during your sessions will be kept between you
            and your Therapist only,
            <br />
            unless: You request for a change of Therapist, and give your consent
            for the new Therapist to have access to your previous Therapist’s
            session notes.
            <br />
            There is a legal obligation to disclose anything that is discussed.
            For example, where the client is assessed to be at risk to self or
            others, external parties (eg the police, crisis service providers)
            may be informed of the situation.
          </Text>
          <br />
          <br />
          <Title color="blue" order={4} weight={500} align="center">
            How often should I have therapy sessions?
          </Title>
          <br />
          <Text align="justify" size="md">
            For a start, individuals can consider going for therapy once a week.
            Weekly sessions instil regularity which is highly beneficial to
            clients, particularly at the beginning of the therapeutic journey.
            Please refer to the Pricing page where we elaborate on
            research-based findings on the benefits of having regular sessions.
          </Text>
          <div
            style={{
              width: 300,
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Image src={pic2} alt="forumtipsicon" className="consultation" />
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
