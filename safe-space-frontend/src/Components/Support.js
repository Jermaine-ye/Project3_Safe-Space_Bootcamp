import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Image,
  Avatar,
  Modal,
  Group,
} from '@mantine/core';
import {
  IconSettings,
  IconSpy,
  IconAlertTriangle,
  IconInbox,
} from '@tabler/icons';

export default function Support() {
  return (
    <div className="Support-page">
      <Container size="xs" px="xs">
        <Button fullWidth size="md" leftIcon={<IconSettings />}>
          Account Settings
        </Button>
        <br />

        <Button fullWidth size="md" leftIcon={<IconSpy />}>
          Privacy and Security
        </Button>
        <br />

        <Button fullWidth size="md" leftIcon={<IconAlertTriangle />}>
          Report a Problem
        </Button>
        <br />

        <Button fullWidth size="md" leftIcon={<IconInbox />}>
          Support Inbox
        </Button>
      </Container>
    </div>
  );
}
