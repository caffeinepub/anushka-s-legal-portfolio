# Anushka's Legal Portfolio

## Current State
New project, no existing code.

## Requested Changes (Diff)

### Add
- A full-stack legal portfolio website for Anushka Sharma
- Homepage with centrally aligned content, red and white monochromatic palette
- Hero section: "Anushka's Legal Portfolio" heading, intro paragraph, original work attribution
- 5 large clickable document cards on homepage
- Each card navigates to a dedicated detail page with synopsis, key definitions, legal provisions, and a link to the actual PDF
- Smooth page transitions and interactive hover effects

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Documents & Content

1. **NDA (XYZ Ltd. v ABC Inc.)** - PDF: /assets/uploads/NDA-between-XYZ-and-ABC-1.pdf
   - Synopsis: A Confidentiality and Non-Disclosure Agreement executed on 13 March 2026 between XYZ Ltd. (New Delhi) and ABC Inc. (Mumbai), governing mutual exchange of proprietary and confidential information in connection with a potential business transaction. The agreement has a 5-year term with a 2-year standstill clause prohibiting acquisition of each other's securities.
   - Key Definitions: Confidential Information, Disclosing Party, Receiving Party, Transaction, Standstill Period
   - Key Sections: Section 1 (Definition of Confidential Information), Section 2 (Non-Disclosure & Protection), Section 3 (Required Disclosure), Section 4 (Return/Destruction), Section 6 (Standstill - 2 years), Section 7 (Remedies - injunctive relief), Section 8 (Term - 5 years), Section 9 (Governing Law - India, New Delhi courts)

2. **Bail Application (State v. Manish Mittal)** - PDF: /assets/uploads/Bail-Application-2.pdf
   - Synopsis: A bail application filed under Section 439 CrPC before the Court of ASJ-02, Tis Hazari Courts, Delhi, on behalf of Accused No. 1 Manish Mittal in FIR No. 42/2020, PS Sarai Rohilla. The accused is charged under Sections 354D (stalking), 506 (criminal intimidation), 509 (outraging modesty) IPC and Sections 3(1)(r)(s)(w-ii)(2Va) of the SC/ST (Prevention of Atrocities) Act. The application asserts innocence, absence of evidence, and willingness to comply with bail conditions.
   - Key Definitions: Bail, Anticipatory Bail, Chargesheet, Surety, Framing of Charges
   - Key Sections: Section 439 CrPC (power of High Court/Sessions Court to grant bail), Section 354D IPC (stalking), Section 506 IPC (criminal intimidation), Section 509 IPC (word/gesture to insult modesty of woman), Sections 3(1)(r)(s)(w-ii)(2Va) SC/ST Act

3. **Writ Petition (Ms. X v. MCD & Delhi Jal Board)** - PDF: /assets/uploads/Writ-Petition-3.pdf
   - Synopsis: A Writ Petition filed under Article 226 of the Constitution before the Delhi High Court on behalf of Ms. X, a resident of West Delhi, against the Municipal Corporation of Delhi and Delhi Jal Board for continued supply of contaminated and non-potable water for over 16 months since November 2024. The petitioner seeks a Writ of Mandamus directing respondents to inspect, rectify, and ensure clean water supply.
   - Key Definitions: Writ of Mandamus, Petitioner, Respondent, Fundamental Rights, Potable Water
   - Key Sections: Article 21 (Right to Life including clean water - Subhash Kumar v. State of Bihar 1991), Article 14 (Equality before law), Article 226 (High Court writ jurisdiction), Section 9 Delhi Jal Board Act 1998, Section 42 Delhi Municipal Corporation Act 1957; Cases: Subhash Kumar v. State of Bihar (1991) 1 SCC 598, A.P. Pollution Control Board v. Prof. M.V. Nayudu (1999) 2 SCC 718, Narmada Bachao Andolan v. Union of India (2000) 10 SCC 664

4. **Master Marketing Agreement (GroupM / Murphy's)** - PDF: /assets/uploads/Advertising-Agreement-4.pdf
   - Synopsis: A Master Marketing Agreement dated March 2026 between GroupM Worldwide Inc. (d/b/a Modi Media, Mumbai) as Agency and Murphy's Marketing Services Inc. (Papa Murphy's, New Delhi) as Company, for non-exclusive advertising and marketing services. Covers work orders, change orders, payment terms (30-day invoicing), IP ownership (deliverables as works made for hire under Section 17 Copyright Act 1957), indemnification, and a 1-year auto-renewing term with 90-day termination notice.
   - Key Definitions: Services, Work Order, Change Order, Deliverables, Agency Elements, Confidential Information, Indemnifying Party
   - Key Sections: Clause 1 (Services/Work Orders/Change Orders), Clause 2 (Invoices - 30 days; interest at 1.5%/month on late payment), Clause 4 (Term - 1 year auto-renew, 90-day notice), Clause 5 (Deliverables - works made for hire, Section 17 Copyright Act 1957), Clause 7 (Indemnification), Clause 9 (Limitation of Liability), Clause 10 (Confidentiality - 2 years post-termination), Clause 12 (Force Majeure)

5. **Case Brief - Harish Rana v. Union of India** - PDF: /assets/uploads/Case-Brief-Harish-Rane-vs-UOI-5.pdf
   - Synopsis: A case brief of the Supreme Court judgment dated 11 March 2026 (Bench: Justice J.B. Pardiwala and Justice K.V. Viswanathan) in Harish Rana v. Union of India and Ors. The case concerns a man who had been in a persistent vegetative state since 2013 after an accidental fall. The Supreme Court permitted withdrawal of life-sustaining treatment (passive euthanasia), reaffirming that Article 21 protects the right to live and die with dignity.
   - Key Definitions: Persistent Vegetative State, Passive Euthanasia, Life-Sustaining Treatment, Ratio Decidendi, Living Will
   - Key Sections: Article 21 (Right to life with dignity), Article 14 (Equality before law); Cases: Aruna Ramchandra Shanbaug v. Union of India (passive euthanasia under judicial supervision), Common Cause v. Union of India (right to die with dignity; validity of living wills), Gian Kaur v. State of Punjab (scope of Article 21 in end-of-life decisions)

### Frontend
- Homepage: Red/white monochromatic theme, centered layout
- Header: "Anushka's Legal Portfolio"
- Intro paragraph as specified by user
- Attribution line: all documents are Anushka's original work
- 5 large interactive document cards with icons, smooth hover animations
- Each card routes to a dedicated detail page
- Detail page: Synopsis section, Key Definitions section (expandable), Legal Provisions & Sections, and a prominent "Open Full Document" button linking to the PDF
- Smooth CSS transitions throughout
- No backend data needed - all content is static in frontend
