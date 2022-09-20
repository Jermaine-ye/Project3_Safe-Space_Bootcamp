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

export default function JournalSingle(props) {
  return <div>{props.data.title}</div>;
}
