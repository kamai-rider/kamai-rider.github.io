# POONAM TECHNOLOGY – WhatsApp Automation for Restaurants & Cloud Kitchens

This is a lightweight static site for POONAM TECHNOLOGY's WhatsApp automation SaaS for restaurants and cloud kitchens. It includes feature sections, pricing with a monthly/yearly toggle, a WhatsApp demo form, responsive styles, and legal pages required for Facebook Business verification.

## Features
- WhatsApp ordering, chatbot, broadcasts, notifications, multi‑outlet, and integrations.
- Pricing cards with monthly/yearly switch (JS only, no backend).
- Demo form that opens WhatsApp with a prefilled message.
- Legal pages: Privacy, Terms, Cookie Policy, Refunds & Cancellation, Contact.
- Facebook domain verification meta placeholder in `index.html`.
- Fully responsive, dark theme, no external build steps.

## Getting Started
1. Open `index.html` in any modern browser. The page is fully static.
2. Ensure `styles.css` and `script.js` are in the same folder as `index.html`.
3. For Facebook Business verification, replace the token in `index.html`:
   - Find: `<meta name="facebook-domain-verification" content="REPLACE_WITH_FB_TOKEN">`
   - Replace with your token from Facebook Business Manager.

## Customization
- Brand name and copy: Edit the text in `index.html` (headings, paragraphs, FAQ).
- Colors/Theme: Adjust CSS variables at the top of `styles.css`.
- Pricing amounts: Update `data-monthly` and `data-yearly` in the pricing cards.
- WhatsApp targets: In `script.js`, replace the `wa.me` URLs with your number, e.g. `https://wa.me/15551234567?text=...`.
- Legal texts: Update `privacy.html`, `terms.html`, `cookie.html`, `refunds.html`, and `contact.html` with your official addresses, corporate entity details, and contact emails.

## Deployment
- GitHub Pages: Commit and push, then enable Pages for the repository root.
- Netlify/Vercel: Drag-and-drop the folder or set the project to deploy the root.
- Nginx/Apache: Serve the folder as a static site; no server-side code required.

## Notes on Compliance
- Built on Meta’s official WhatsApp Business API (messaging claims), ensure your production flows and BSP remain compliant with opt-in/opt-out.
- This landing page collects no data itself; the demo form opens WhatsApp only. For real lead capture, add a backend or a form service.

## License
MIT

# KamaiRider - Landing Page

🛵 **कमाई भी, भाईचारा भी 💙**

A beautiful, modern landing page for KamaiRider - a community platform for delivery riders in India.

## About KamaiRider

KamaiRider is a movement to create a supportive community for delivery partners from Swiggy, Zomato, Blinkit, Rapido, and other platforms. Founded by Prateek, a software engineer who wants to help delivery riders with:

- 💰 Daily offers & discounts
- 📚 Earning tips and guidance
- 🍱 Lunch/snack benefits
- 🛡️ Insurance & rewards
- 🤝 Strong community support
- 💙 Brotherhood and mutual help

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI**: Clean, beautiful interface with smooth animations
- **Hindi/Hinglish**: Content in both Hindi and English for better reach
- **Fast Loading**: Optimized for performance
- **Accessibility**: Follows web accessibility standards

## Tech Stack

- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript
- Google Fonts (Poppins)

## File Structure

```
lander_page/
├── index.html       # Main HTML file
├── styles.css       # All styles and animations
├── script.js        # Interactive features
└── README.md        # This file
```

## Getting Started

1. **Clone or download** the repository
2. **Open** `index.html` in your web browser
3. That's it! No build process required.

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #FF6B35;    /* Orange */
    --secondary-color: #004E89;  /* Blue */
    --accent-color: #FFD23F;     /* Yellow */
}
```

### Content

Edit the text directly in `index.html`. The content is organized in sections:
- Hero Section
- Founder Message
- Vision Timeline
- Features Grid
- Community Examples
- Stats
- Call to Action

### WhatsApp Group Link

The WhatsApp community group link is already integrated:
- **Main CTA Button**: Click "Join WhatsApp Community" to join
- **Footer Link**: WhatsApp link in the Connect section
- **Group Link**: [https://chat.whatsapp.com/HaQQZPTs3o28IHWfJws2lx](https://chat.whatsapp.com/HaQQZPTs3o28IHWfJws2lx)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies except Google Fonts
- Optimized CSS with minimal animations
- Lazy-loaded images (when added)
- Fast First Contentful Paint (FCP)

## Future Enhancements

- [x] Add WhatsApp group link
- [ ] Integrate social media links (Instagram, Facebook)
- [ ] Add testimonials section
- [ ] Create blog section for tips
- [ ] Add multi-language support
- [ ] Integrate analytics
- [ ] Add contact form
- [ ] Create admin dashboard

## Contributing

This is a project for the delivery rider community. If you have suggestions or want to contribute:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Made with ❤️ for all delivery riders.

## Contact

For questions or suggestions, please reach out through the website.

---

**Har naye rider ke जुड़ने से hum sab ki ताकत बढ़ती है 💪**

