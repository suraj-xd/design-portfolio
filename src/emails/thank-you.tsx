import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Button,
  Img
} from "@react-email/components";
import * as React from "react";
import { figmaProtoLink, socialLinkEnum } from "~/constants";
import { prodUrl } from "~/constants/app-info";

interface ThankYouEmailProps {
  name?: string;
  message: string;
}

export const ThankYouEmail = ({ name, message }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>
      {"Thank you for reaching out! I'll get back to you soon."}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <div style={logoContainer}>
          <Img style={img} src="/flower.jpg" alt="logo" width={64} height={64} />
          </div>
          <Heading style={h1}>Thank you for reaching out!</Heading>
          <Text style={subtitle}>
            I appreciate you taking the time to connect with me
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Main Content */}
        <Section style={content}>
          <Text style={greeting}>Hi {name ?? "there"} 👋</Text>

          <Text style={paragraph}>
            Thank you for taking the time to reach out through my portfolio. I
            truly appreciate your message and the opportunity to connect!
          </Text>

          <Text style={paragraph}>
            {`I've received your message and will get back to you as soon as
            possible. In the meantime, feel free to explore more of my work or
            connect with me on social media.`}
          </Text>

          {/* Message Quote */}
          <div style={messageQuote}>
            <Text style={quoteLabel}>Your message:</Text>
            <div style={quoteBox}>
              <Text style={quoteText}>{message}</Text>
            </div>
          </div>

          <Text style={paragraph}>
            {`If you have any additional thoughts or questions, please don't
            hesitate to reach out again.`}
          </Text>

          {/* CTA Section */}
          <Section style={ctaSection}>
            <Text style={ctaText}>
              While you wait, check out my latest work:
            </Text>
          </Section>
          <Section style={ctaSection}>
            <Button style={button} href={figmaProtoLink}>
              My Work
            </Button>
          </Section>
        </Section>

        <Hr style={hr} />

        {/* Social Links */}
        <Section style={socialSection}>
          <Text style={socialText}>Connect with me:</Text>
          <div style={socialLinks}>
            <Link href={socialLinkEnum.linkedin} style={socialLink}>
              LinkedIn
            </Link>
            <span style={socialDivider}>•</span>
            <Link href={socialLinkEnum.x} style={socialLink}>
              X
            </Link>
            <span style={socialDivider}>•</span>
            <Link href={socialLinkEnum.dribbble} style={socialLink}>
              Dribbble
            </Link>
            <span style={socialDivider}>•</span>
            <Link href={socialLinkEnum.behance} style={socialLink}>
              Behance
            </Link>
          </div>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={signature}>
            Best regards,
            <br />
            <strong>Ritu Gaur</strong>
          </Text>
          <Text style={footerText}>Student & Designer</Text>
          <Text style={footerSubtext}>
            {`This is an automated response. I'll personally reply to your message soon!`}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ThankYouEmail;

const img = {
  width: "64px",
  height: "64px",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  width: "100%",
};

const logoContainer = {
  margin: "0 auto 24px",
  width: "64px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const logo = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
  boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
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

const greeting = {
  color: "#1f2937",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 24px 0",
  lineHeight: "1.4",
};

const paragraph = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 20px 0",
};

const messageQuote = {
  margin: "32px 0",
};

const quoteLabel = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 12px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const quoteBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderLeft: "4px solid #667eea",
  borderRadius: "8px",
  padding: "20px",
};

const quoteText = {
  color: "#1f2937",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
  fontStyle: "italic",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "32px 0",
  padding: "24px",
  borderRadius: "8px",
};

const ctaText = {
  color: "#374151",
  fontSize: "16px",
  margin: "0 0 20px 0",
  fontWeight: "500",
};

const button = {
  backgroundColor: "#667eea",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  boxShadow: "0 2px 4px rgba(102, 126, 234, 0.2)",
  transition: "all 0.2s ease",
};

const socialSection = {
  textAlign: "center" as const,
  margin: "32px 0 0 0",
};

const socialText = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0 0 16px 0",
  fontWeight: "500",
};

const socialLinks = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
};

const socialLink = {
  color: "#667eea",
  fontSize: "14px",
  textDecoration: "none",
  fontWeight: "500",
  padding: "4px 8px",
  borderRadius: "4px",
  transition: "all 0.2s ease",
};

const socialDivider = {
  color: "#d1d5db",
  fontSize: "14px",
};

const footer = {
  textAlign: "center" as const,
  padding: "24px 0 0 0",
};

const signature = {
  color: "#1f2937",
  fontSize: "16px",
  margin: "0 0 8px 0",
  lineHeight: "1.5",
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0 0 16px 0",
};

const footerSubtext = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
  lineHeight: "1.4",
};
