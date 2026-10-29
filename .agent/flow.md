# Product and visitor flow

## Marketing journey

1. **Arrival:** introduce Children Choice Publication Pvt. Ltd. and its books.
2. **Browse:** four collection cards lead to Hindi Medium, English Medium, Spiritual Books, and Lab Manuals series pages.
3. **Order request:** selecting a series opens its order form. The form currently validates in the browser only; it does not transmit or store submissions.
4. **Publisher and impact:** visitors can browse the school-logo carousel, company group, and publisher-provided impact figures, then reach the About page or WhatsApp sample-kit contact.

## Current route flow

- `/`: hero collage → subject collection cards → school logo carousel → company group → impact figures → footer.
- `/books/[category]`: searchable series list for the selected collection, followed by the shared site footer. Hindi Medium lists Aryavrat, KidsBerry, Splendid, and Saarthi; each card opens its matching order form PDF in the same tab and includes a separate download button. English Medium lists Brainzo.ai, Clario.ai, Keylinks, Modak, Blackberry, DeepDive, Eureka, Footprints, Click!, and BlueRay; each card also opens its matching PDF in the same tab and includes a separate download button. Lab Manuals lists Keylinks, Blackberry, and Monopoly, in that order; each card opens its matching lab manual order form in the same tab and includes a separate download button. Spiritual Books lists Bharat Ki Khoj, Bal Ramayana, and Bal Mahabharata with their covers; all three cards open and download the supplied Keylinks Religious Books order form.
- `/books/[category]/[series]`: series-specific order form with name, school, phone, optional email, quantity, and delivery address for series without a matching order-form PDF.
- `/about`: publisher story, leadership and team profiles, impact figures, and footer.

The category and series routes use the same fixed branded header and navigation as the home page, including a responsive mobile menu.

The home, About, and book category routes use `SiteFooter`. The layout provides the fixed WhatsApp sample-kit button. The footer’s Contact us link opens WhatsApp at +91 7618181877. Order-form submissions need an approved destination or backend before they can be delivered.

## Assets and motion

The live home route uses six supplied kit covers in an evenly spaced circular hero display. The English Medium collection card layers Brainzo.ai, Clario.ai, and Eureka covers, with Eureka in front; the Hindi Medium card layers KidsBerry, Saarthi, and Aryavart, with Aryavart in front. The Spiritual Books card layers Bharat Ki Khoj, Bal Ramayana, and Bal Mahabharata, while the Lab Manuals card layers Keylinks, Blackberry, and Monopoly lab manual covers. All four cards use the same 3D layered cover treatment and hover lift, with every cover kept visible. The school carousel shows four logos at desktop widths within a large glass panel and advances automatically; hover and keyboard focus pause it, while reduced-motion preference disables automatic movement. Framer Motion owns local interface transitions, the reduced-motion-aware global blue background ambience, and the count-up impact figures.

The home hero uses the six current kit cover images directly. Spiritual Books series use the supplied Bharat Ki Khoj, Bal Ramayana, and Bal Mahabharata book covers. Old animation sequences and scroll-driven book prototypes are not part of the current project.
