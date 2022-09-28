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
import pic1 from '../../images/illustration/DrawKit Vector Illustration Mental Health 8.png';
import pic2 from '../../images/illustration/DrawKit Vector Illustration Mental Health & Psychology 10.png';

export default function Services() {
  return (
    <div className="Page-body">
      <NavBar />
      <div className="Content-container">
        <Container className="Content-body" size="md" px="xs">
          <Title color="blue" order={1} weight={500} align="center">
            Read About Our Services:
          </Title>
          <Card radius="md" shadow="sm" p="md">
            <Grid>
              <Grid.Col span={6}>
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
                  <List.Item>Individual Therapy</List.Item>
                  <List.Item>Couples Therapy</List.Item>
                  <List.Item>Trauma Therapy</List.Item>
                  <List.Item>Hypnotherapy</List.Item>
                  <List.Item>Art Therapy</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={1}>
                <div
                  style={{
                    width: 300,
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
          <Card radius="md" shadow="sm" p="md">
            <Title color="blue" order={3} weight={500} align="center">
              Individual Therapy{' '}
            </Title>
            <br />
            <Text align="justify" size="md">
              In an individual therapy session, an individual interacts
              one-to-one with their therapist in a safe, confidential, and
              non-judgemental space. Sessions are focused on helping the
              individual manage their struggles and work towards their personal
              goals, and the therapeutic process is tailored to suit their
              unique needs and concerns. Through further exploration of their
              feelings, thoughts, and behaviours with their therapist, the
              individual develops emotional resilience and cognitive skills to
              alleviate distress, better cope with their issues, and achieve
              their potential.
            </Text>
            <br />
            <br />
            <Title color="blue" order={4} weight={500} align="center">
              Couples Therapy
            </Title>
            <br />
            <Text align="justify" size="md">
              In a couples therapy session, both partners interact with their
              Therapist in a safe, confidential, and non-judgemental space.
              Sessions are focused on helping both partners attain a deeper
              understanding of their relationship and improve relationship
              satisfaction. Through raising the stressors in the relationship or
              potential points of conflicts with their therapist, both partners
              acquire skills to discern underlying problems and address their
              differences as they work towards building a healthy and positive
              relationship. It is also helpful to note that couples therapy is
              beneficial across the different stages of a relationship, whether
              couples are looking to resolving immediate conflicts or conceiving
              long-term goals.{' '}
            </Text>
            <br />
            <br />
            <Title color="blue" order={4} weight={500} align="center">
              Trauma Therapy
            </Title>
            <br />
            <Text align="justify" size="md">
              Trauma therapy is a specialist service that is effective in
              helping clients cope with their emotional and behavioural
              responses to distressing or disturbing experiences. The service
              recognises how trauma can manifest in different ways and how
              traumatic experiences can affect various aspects of one’s
              functioning (psychological, social, physical etc). Trauma can
              include a wide range of situations and can be experienced as a
              single event, or numerous or repeated events. Each individual’s
              trauma or reaction to trauma is unique. Trauma therapy tends to be
              highly individualised. Besides taking into account the type of
              trauma the client is dealing with, the therapist has to consider
              the client’s trauma symptoms and responses, their needs, culture
              and their demographic information in order to provide suitable
              support. Sessions also require deep commitment. The are many
              different types of trauma therapy and techniques that a therapist
              can employ to help clients manage their trauma symptoms, process
              and heal from difficult memories, and enhance their coping skills,
              including Eye Movement Desensitization and Reprocessing (EMDR) ,
              Trauma-Focused Cognitive Behavioural Therapy (TF-CBT), and Schema
              Therapy.
            </Text>
            <br />
            <br />
            <Title color="blue" order={4} weight={500} align="center">
              Hypnotherapy
            </Title>
            <br />
            <Text align="justify" size="md">
              Hypnosis is the state of mind achieved when one is highly relaxed,
              yet intensely focused. Hypnotherapy is a type of therapy that uses
              hypnosis to help clients access their subconscious mind where
              their core beliefs, thinking patterns and emotions such as fear,
              anxiety or anger are embedded. Sessions are guided by a certified
              hypnotherapist and are usually more intensive – the work done is
              typically heavier and deeper, for both the client and Therapist.
              Hypnotherapy also uses advanced techniques such as age regression
              and forgiveness work. These are very efficacious, as they help
              uncover the root of erroneous or distorted thinking patterns and
              self-limiting beliefs the client faces in a time-efficient manner,
              thereby reducing symptoms of distress and empowering clients to
              live fulfilling lives.
            </Text>
            <br />
            <br />
            <Title color="blue" order={4} weight={500} align="center">
              Art Therapy{' '}
            </Title>
            <br />
            <Text align="justify" size="md">
              Art therapy is the use of art for the purpose of treating
              psychological issues and improving mental health. It is centred on
              the belief that creative expression can enhance one’s mental
              health and support them in their journey of healing. The process
              of creating art is itself a process of self-discovery. By jointly
              examining the artworks created by the individual, the therapist
              guides the individual in extracting and exploring the themes and
              emotions that surface, and illuminates the ways the latter’s life
              experiences may have influenced them. Some benefits of art therapy
              include a reduction in symptoms related to chronic or acute mental
              health conditions and an improvement in the individual’s cognitive
              and sensory-motor functions. What happens over the course of an
              art therapy treatment plan is very much flexible, especially in
              terms of the activities the individual chooses to engage in:
              storytelling, painting or doodling, knitting, woodwork, or
              photography.
            </Text>
            <div
              style={{
                width: 300,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Image src={pic2} alt="forumtipsicon" className="consultation" />
            </div>
          </Card>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
