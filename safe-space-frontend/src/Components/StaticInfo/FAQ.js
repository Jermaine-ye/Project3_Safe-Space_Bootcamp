import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Button, Card, Text, Title, Grid, Container } from '@mantine/core';

export default function FAQ() {
  return (
    <div className="Page-body ">
      <NavBar />
      <div className="Content-container">
        <Container className="Content-body" size="md" px="xs">
          <h2>FAQ</h2>
          <ul>
            <li>How do I select a suitable Therapist?</li>
            <li>What are the different services offered?</li>
            <li>How long is each session?</li>
            <li>Are my sessions with my Therapist confidential?</li>
            <li>How often should I have therapy sessions?</li>
          </ul>
          <br />
          <h2>How do I select a suitable Therapist?</h2>
          <p>
            You may use the evaluation form on our website to shortlist
            Therapists who best suit your needs. We will recommend Therapists on
            the basis of issues you would like to seek support for, and any
            preferences you may have in terms of gender, language, service type,
            medium, and country. You may wish to go through their individual
            profiles to learn more about their practice, background and approach
            to therapy. <br /> This allows you to gauge if they are a good fit
            before you book a session with them. A Therapist who may be right
            for one person, may not be as suitable for another. Please note that
            therapy can be a long term commitment. As such, having a Therapist
            who you feel you can open up to easily is important, as the quality
            of therapeutic alliance is a reliable predictor of positive outcomes
            for the client.
          </p>
          <br />
          <h2>What are the different services offered?</h2>
          <p>
            We offer individual, couples counselling services at the moment. The
            services each Therapist offers are indicated on their profile. Based
            on your evaluation preferences and results, we will recommend 3-5
            Therapists who might best suit your needs.
          </p>
          <br />
          <h2>How long is each session?</h2>
          <p>
            Each session is an hour long. This applies to all our sessions, be
            it the individual, couples, or in-person session.
          </p>
          <br />
          <h2>Are my sessions with my Therapist confidential?</h2>
          <p>
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
          </p>
          <br />
          <h2>How often should I have therapy sessions?</h2>
          <p>
            For a start, individuals can consider going for therapy once a week.
            Weekly sessions instil regularity which is highly beneficial to
            clients, particularly at the beginning of the therapeutic journey.
            Please refer to the Pricing page where we elaborate on
            research-based findings on the benefits of having regular sessions.
          </p>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
