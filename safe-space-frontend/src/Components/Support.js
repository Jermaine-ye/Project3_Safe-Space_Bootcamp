import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mantine/core";
import {
  IconSettings,
  IconSpy,
  IconAlertTriangle,
  IconInbox,
} from "@tabler/icons";

export default function Support() {
  const navigate = useNavigate();
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
        <br />
        <br />
        <Button
          variant="light"
          onClick={(e) => navigate(`/therapist/dashboard`)}
        >
          Back
        </Button>
      </Container>
    </div>
  );
}
