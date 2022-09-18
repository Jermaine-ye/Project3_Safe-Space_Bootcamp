import React from 'react';
import { Button, Card, Text, Title, Grid, Container } from '@mantine/core';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Services() {
  return (
    <div className="Page-body">
      <NavBar />
      <div className="Content-container">
        <Container className="Content-body" size="md" px="xs">
          Services <h2>Read About Our Services:</h2>
          <Grid>
            <Grid.Col span={4}>
              <ul>
                <li>Individual Therapy</li>
                <li>Couples Therapy</li>
                <li>Trauma Therapy</li>
                <li>Hypnotherapy</li>
                <li>Art Therapy</li>
              </ul>
            </Grid.Col>
          </Grid>
          <h2>Individual Therapy</h2>
          <p>
            In an individual therapy session, an individual interacts one-to-one
            with their therapist in a safe, confidential, and non-judgemental
            space. Sessions are focused on helping the individual manage their
            struggles and work towards their personal goals, and the therapeutic
            process is tailored to suit their unique needs and concerns. Through
            further exploration of their feelings, thoughts, and behaviours with
            their therapist, the individual develops emotional resilience and
            cognitive skills to alleviate distress, better cope with their
            issues, and achieve their potential.
          </p>
          <h2>Couples Therapy</h2>
          <p>
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
          </p>
          <h2>Trauma Therapy</h2>
          <p>
            Trauma therapy is a specialist service that is effective in helping
            clients cope with their emotional and behavioural responses to
            distressing or disturbing experiences. The service recognises how
            trauma can manifest in different ways and how traumatic experiences
            can affect various aspects of one’s functioning (psychological,
            social, physical etc). Trauma can include a wide range of situations
            and can be experienced as a single event, or numerous or repeated
            events. Each individual’s trauma or reaction to trauma is unique.
            Trauma therapy tends to be highly individualised. Besides taking
            into account the type of trauma the client is dealing with, the
            therapist has to consider the client’s trauma symptoms and
            responses, their needs, culture and their demographic information in
            order to provide suitable support. Sessions also require deep
            commitment. The are many different types of trauma therapy and
            techniques that a therapist can employ to help clients manage their
            trauma symptoms, process and heal from difficult memories, and
            enhance their coping skills, including Eye Movement Desensitization
            and Reprocessing (EMDR) , Trauma-Focused Cognitive Behavioural
            Therapy (TF-CBT), and Schema Therapy.
          </p>
          <h2>Hypnotherapy</h2>
          <p>
            Hypnosis is the state of mind achieved when one is highly relaxed,
            yet intensely focused. Hypnotherapy is a type of therapy that uses
            hypnosis to help clients access their subconscious mind where their
            core beliefs, thinking patterns and emotions such as fear, anxiety
            or anger are embedded. Sessions are guided by a certified
            hypnotherapist and are usually more intensive – the work done is
            typically heavier and deeper, for both the client and Therapist.
            Hypnotherapy also uses advanced techniques such as age regression
            and forgiveness work. These are very efficacious, as they help
            uncover the root of erroneous or distorted thinking patterns and
            self-limiting beliefs the client faces in a time-efficient manner,
            thereby reducing symptoms of distress and empowering clients to live
            fulfilling lives.
          </p>
          <h2>Art Therapy</h2>
          <p>
            Art therapy is the use of art for the purpose of treating
            psychological issues and improving mental health. It is centred on
            the belief that creative expression can enhance one’s mental health
            and support them in their journey of healing. The process of
            creating art is itself a process of self-discovery. By jointly
            examining the artworks created by the individual, the therapist
            guides the individual in extracting and exploring the themes and
            emotions that surface, and illuminates the ways the latter’s life
            experiences may have influenced them. Some benefits of art therapy
            include a reduction in symptoms related to chronic or acute mental
            health conditions and an improvement in the individual’s cognitive
            and sensory-motor functions. What happens over the course of an art
            therapy treatment plan is very much flexible, especially in terms of
            the activities the individual chooses to engage in: storytelling,
            painting or doodling, knitting, woodwork, or photography.
          </p>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
