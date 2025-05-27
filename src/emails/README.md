# Email Templates

Beautiful, modern email templates for your design portfolio contact form.

## Templates

### 1. Contact Notification Email (`contact-notification.tsx`)
- **Purpose**: Sent to you when someone contacts through your portfolio
- **Features**: 
  - Clean, professional design
  - Displays sender's name, email, and message
  - Easy-to-read layout with proper typography
  - Clickable email link for quick replies

### 2. Thank You Email (`thank-you.tsx`)
- **Purpose**: Confirmation email sent to people who contact you
- **Features**:
  - Warm, welcoming tone
  - Quotes their original message
  - Call-to-action button to view your portfolio
  - Social media links
  - Professional signature

## Design Features

- **Modern & Minimal**: Clean design that reflects your design sensibilities
- **Responsive**: Works perfectly on all email clients and devices
- **Professional Branding**: Consistent with your portfolio aesthetic
- **Cross-Client Compatible**: Tested across major email clients
- **Accessible**: Proper contrast ratios and readable typography

## Customization

### Update Personal Information
1. Edit the social links in `thank-you.tsx`:
   ```tsx
   <Link href="https://linkedin.com/in/surajgaud" style={socialLink}>
     LinkedIn
   </Link>
   ```

2. Update the portfolio URL:
   ```tsx
   <Button
     style={button}
     href="https://surajgaud.com" // Replace with your URL
   >
     View Portfolio
   </Button>
   ```

3. Customize the logo/branding:
   ```tsx
   const logo = {
     // Update colors, gradients, or replace with an image
   };
   ```

### Styling
- All styles are inline for maximum email client compatibility
- Colors use a consistent design system
- Typography follows modern email best practices

## Development

### Preview Templates
1. **In Browser**: Visit `/email-preview` to see both templates
2. **React Email Dev Server**: Run `npm run email:dev` for advanced preview

### Testing
- Test with real email addresses
- Check across different email clients (Gmail, Outlook, Apple Mail)
- Verify mobile responsiveness

## Technical Details

- Built with **React Email** for component-based email development
- **TypeScript** for type safety
- **Server-side rendering** compatible
- **Modular design** for easy maintenance

## Usage in API

The templates are automatically used in your contact form API (`/api/send-email`):

```typescript
import { render } from "@react-email/render";
import { ContactNotificationEmail } from "~/emails/contact-notification";
import { ThankYouEmail } from "~/emails/thank-you";

// Generate HTML
const notificationEmailHtml = await render(
  ContactNotificationEmail({ name, email, message })
);

const thankYouEmailHtml = await render(
  ThankYouEmail({ name, message })
);
```

## Best Practices

1. **Keep it Simple**: Email clients have limited CSS support
2. **Test Thoroughly**: Always test across different email clients
3. **Mobile First**: Ensure templates work on mobile devices
4. **Accessibility**: Use proper contrast and readable fonts
5. **Personalization**: Use the recipient's name when available

---

*These templates are designed to make a great first impression and maintain professional communication with your portfolio visitors.* 