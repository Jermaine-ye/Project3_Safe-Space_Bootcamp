import axios from 'axios';
import React, { useState, useEffect } from 'react';
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

import { BACKEND_URL } from '../constants.js';
export default function EvaluationFormPreference() {
  const [drugIssues, setdrugIssues] = useState('');
  const [relationshipIssues, setRelationshipIssues] = useState('');
  const [anxietyIssues, setAnxietyIssues] = useState('');
  const [hopelessIssues, setHopelessIssues] = useState('');
  const [eatingIssues, setEatingIssues] = useState('');
  const [harmIssues, setHarmIssues] = useState('');

  // Are you facing drug addiction problems?
  //  Y = drug
  // N = others

  // 2. Are you facing issues with your marriage life or relationship with your loved ones?
  // Y = marriage/relationship
  // N = others
  // 3. Do you find yourself being often anxious that you are unable to perform normal daily tasks?
  // Y = clinical/mental
  // N = others
  // 4. Do you often feel worthless or hopeless?
  // Y = clinical/mental
  // N = others
  // 5. Are you eating irregularly that you are experiencing rapid weight loss?
  //  Y  = Eating disorder
  // N = others
  // 6.  Do you have obsessive thoughts of self harm or hurting others close to you and struggle to control these thoughts?
  // Y = Personality disorder/mental disorder
  // N = others

  return <div>EvaluationFormPreference</div>;
}
