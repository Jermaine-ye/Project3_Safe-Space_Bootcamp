import React from 'react';

import { Button, Card, Text, Title, Grid, Container } from '@mantine/core';
import { IconDatabase } from '@tabler/icons';

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default function Support() {
  return (
    <div>
  <H4>Account Settings</H4>
  <H4>Login and Password</H4>
  <H4>Privacy and Security</H4>
  <H4>Report a Problem</H4>
  <H4>Support Inbox</H4>
  <IconDatabase />
    </div>
  );
}
