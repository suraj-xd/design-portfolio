import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ContactNotificationEmailProps {
  name?: string;
  email?: string;
  message: string;
}

export const ContactNotificationEmail = ({
  name,
  email,
  message,
}: ContactNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form message from your portfolio</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <div style={logoContainer}>
            <Img
              style={img}
              src="/flower.jpg"
              alt="logo"
              width={64}
              height={64}
            />
          </div>
          <Heading style={h1}>New Contact Message from Portfolio</Heading>
          <Text style={subtitle}>
            Someone reached out through your portfolio contact form
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Content */}
        <Section style={content}>
          {name && (
            <div style={field}>
              <Text style={label}>From</Text>
              <Text style={value}>{name}</Text>
            </div>
          )}

          {email && (
            <div style={field}>
              <Text style={label}>Email</Text>
              <Link href={`mailto:${email}`} style={emailLink}>
                {email}
              </Link>
            </div>
          )}

          <div style={field}>
            <Text style={label}>Message</Text>
            <div style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </div>
          </div>
        </Section>

        <Hr style={hr} />

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>Sent from your portfolio contact form</Text>
          <Text style={footerSubtext}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactNotificationEmail;

const img = {
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const header = {
  textAlign: "center" as const,
  padding: "32px 0",
};

const logoContainer = {
  margin: "0 auto 24px",
  width: "64px",
  height: "64px",
};

const logo = {
  backgroundColor: "#1f2937",
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
};

const h1 = {
  color: "#1f2937",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "16px 0 8px",
  padding: "0",
  lineHeight: "1.3",
};

const subtitle = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "1.4",
  margin: "0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "32px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
};

const field = {
  marginBottom: "24px",
};

const label = {
  color: "#374151",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const value = {
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0",
};

const emailLink = {
  color: "#3b82f6",
  fontSize: "16px",
  lineHeight: "1.5",
  textDecoration: "none",
  fontWeight: "500",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
};

const messageText = {
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  textAlign: "center" as const,
  padding: "24px 0",
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0 0 8px 0",
};

const footerSubtext = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
};
