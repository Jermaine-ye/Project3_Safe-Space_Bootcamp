import React, { useContext, useEffect } from "react";

import { Button, Card, Text, Title } from "@mantine/core";
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import { useContext, useEffect, useState } from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";
import { AuthContext } from "../../App";

export default function About() {
  // const hello = useContext(AuthContext);

  // useEffect(() => {
  //   console.log(hello);
  // });

  return (
    <div>
      <NavBar />
      <h2> About</h2>
      <h1>Who We Are</h1>
      <p>
        Safe Space is a Singapore-based online counselling platform. We bring
        together empathetic and passionate mental health professionals into a
        single space. Our experts are well-qualified Therapists (ie
        psychologists or counsellors). They come from diverse backgrounds and
        have wide-ranging areas of expertise, allowing clients to select an
        expert who best suits their needs.
      </p>
      <h2>What We Do</h2>
      <p>
        Safe Space provides online counselling services in Singapore that are
        private, convenient, and of high quality. Clients can access counselling
        at a time that is convenient to them, from a place that is accessible to
        them, and at a cost that is more affordable for them. Clients can expect
        full confidentiality in their interactions with their Therapist. We are
        also upfront and transparent with our pricing plans so that decision
        making is a little easier for you. We also provide services directly to
        Singapore businesses and organisations who are looking for more ways to
        support their people. This could be by subsidising their counselling
        sessions, or by organising webinars on a topic related to personal
        development, professional development or mental health and wellbeing in
        general.
      </p>
      We are determined to provide our clients with the right support, and
      promise to take their feedback seriously, be it about how they have found
      the sessions, whether the fit was right for them, or whether they found
      the platform useful and easy to use. Our vision is simple. We want to help
      our clients achieve their potential.
      <h2>Our Commitment</h2>
      <p>
        We are determined to provide our clients with the right support, and
        promise to take their feedback seriously, be it about how they have
        found the sessions, whether the fit was right for them, or whether they
        found the platform useful and easy to use. Our vision is simple. We want
        to help our clients achieve their potential.
      </p>
      <br />
      <h4>
        If you are in crisis, or another person may be in danger, do not use
        this site. Please refer to <a href="/support"> these</a> resources
        instead.
      </h4>
      <Footer />
    </div>
  );
}
