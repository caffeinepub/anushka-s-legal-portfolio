import type { LucideIcon } from "lucide-react";
import { BookOpen, FileText, Gavel, Scale, Shield } from "lucide-react";

export interface Definition {
  term: string;
  explanation: string;
}

export interface LegalProvision {
  section: string;
  description: string;
}

export interface Document {
  id: number;
  title: string;
  teaser: string;
  introLine: string;
  icon: LucideIcon;
  pdfLink: string;
  synopsis: string;
  definitions: Definition[];
  provisions: LegalProvision[];
}

export const documents: Document[] = [
  {
    id: 1,
    title: "Non-Disclosure Agreement",
    teaser: "XYZ Ltd. & ABC Inc. | Confidentiality & Trade Secrets",
    introLine:
      "Where trust is built in writing and confidences are kept in law.",
    icon: Shield,
    pdfLink: "/assets/uploads/NDA-between-XYZ-and-ABC-1.pdf",
    synopsis:
      "This Confidentiality and Non-Disclosure Agreement (NDA) was executed on 13 March 2026 between XYZ Ltd. (New Delhi) and ABC Inc. (Mumbai), two companies incorporated under Indian law. The agreement governs the mutual exchange of proprietary and confidential information shared in connection with a potential business transaction. It is a bilateral NDA, meaning both parties simultaneously act as Disclosing and Receiving Parties. The agreement carries a five-year term and includes a notable two-year standstill clause that prohibits either party from acquiring, making unsolicited offers for, or otherwise seeking control over the other party's securities or assets during that period. Remedies include injunctive relief for breach. Governing law is India with jurisdiction at New Delhi courts.",
    definitions: [
      {
        term: "Confidential Information",
        explanation:
          "All non-public information disclosed orally, electronically, visually or in writing — including business plans, financial projections, products, IP (patents, trademarks, trade secrets), marketing strategies, and operational data. Excludes information that is already public, was already in possession of the Receiving Party, comes from a third party without confidentiality obligations, or is independently developed.",
      },
      {
        term: "Disclosing Party",
        explanation: "The party sharing confidential information.",
      },
      {
        term: "Receiving Party",
        explanation:
          "The party receiving and obligated to protect confidential information.",
      },
      {
        term: "Transaction",
        explanation:
          "The potential business relationship or deal that the NDA facilitates.",
      },
      {
        term: "Standstill Period",
        explanation:
          "A two-year period from the Effective Date during which neither party may seek to acquire the other's securities, assets, or corporate control.",
      },
    ],
    provisions: [
      {
        section: "Clause 1",
        description: "Definition of Confidential Information",
      },
      {
        section: "Clause 2.1",
        description:
          "Non-Disclosure obligations; limited to directors, officers, legal counsel, advisors",
      },
      {
        section: "Clause 2.2",
        description:
          "Protection of Information: same standard of care as own confidential information, minimum reasonable care",
      },
      {
        section: "Clause 3",
        description:
          "Required Disclosure: notify the other party; seek protective treatment; disclose only what is legally required",
      },
      {
        section: "Clause 4",
        description:
          "Return or Destruction of Confidential Information upon written request",
      },
      {
        section: "Clause 5",
        description: "No License or Ownership Rights granted by disclosure",
      },
      {
        section: "Clause 6",
        description:
          "Standstill (2 years): prohibition on acquiring securities, making takeover attempts, soliciting proxies",
      },
      {
        section: "Clause 7",
        description:
          "Remedies: injunctive relief and equitable remedies available for breach",
      },
      {
        section: "Clause 8",
        description:
          "Term: 5 years; obligations survive for 5 years post-termination",
      },
      {
        section: "Clause 9",
        description: "Governing Law: India; Jurisdiction: New Delhi courts",
      },
    ],
  },
  {
    id: 2,
    title: "Bail Application",
    teaser: "State v. Manish Mittal | Tis Hazari Courts, Delhi",
    introLine:
      "In the pursuit of liberty, every word counts and every ground matters.",
    icon: Scale,
    pdfLink: "/assets/uploads/Bail-Application-2.pdf",
    synopsis:
      "This bail application was filed under Section 439 of the Code of Criminal Procedure, 1973 before the Court of Ms. Charu Aggarwal, ASJ-02, Central, Tis Hazari Courts, Delhi, on behalf of Accused No. 1, Manish Mittal, in FIR No. 42/2020 registered at PS Sarai Rohilla. The accused faces charges under Sections 354D (stalking), 506 (criminal intimidation), and 509 (outraging modesty of a woman) of the Indian Penal Code, as well as Sections 3(1)(r), 3(1)(s), 3(1)(w-ii), and 3(2Va) of the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act. The application strongly asserts the accused's innocence, challenges the veracity of the allegations as oral and unsubstantiated, highlights the accused's co-operation with police, and undertakes compliance with bail conditions including non-contact with witnesses.",
    definitions: [
      {
        term: "Bail",
        explanation:
          "Provisional release of an accused from custody upon furnishing security and undertaking to appear before the court.",
      },
      {
        term: "Anticipatory Bail",
        explanation:
          "Pre-arrest bail granted under Section 438 CrPC in anticipation of arrest; already obtained by the accused in this case.",
      },
      {
        term: "Chargesheet",
        explanation:
          "A formal document filed by the police before the court containing the charges against the accused after investigation; already filed in this case.",
      },
      {
        term: "Surety",
        explanation:
          "A person who provides a financial guarantee to the court for the accused's appearance.",
      },
      {
        term: "Framing of Charges",
        explanation:
          "The formal stage in a criminal trial where the court frames specific charges against the accused before trial proceeds.",
      },
    ],
    provisions: [
      {
        section: "Section 439 CrPC",
        description:
          "Power of Sessions Court/High Court to grant bail in non-bailable offences (now under BNSS)",
      },
      {
        section: "Section 354D IPC",
        description:
          "Stalking: follows a woman and contacts her to foster personal interaction despite clear disinterest; punishable with imprisonment",
      },
      {
        section: "Section 506 IPC",
        description:
          "Criminal Intimidation: threatening another person with injury to cause alarm; punishable with imprisonment",
      },
      {
        section: "Section 509 IPC",
        description:
          "Word, gesture or act intended to insult the modesty of a woman",
      },
      {
        section: "Sections 3(1)(r), 3(1)(s), 3(1)(w-ii), 3(2Va) SC/ST Act",
        description:
          "Offences of intentional insult, intimidation, and sexual abuse against members of SC/ST communities",
      },
    ],
  },
  {
    id: 3,
    title: "Writ Petition",
    teaser: "Ms. X v. MCD & Delhi Jal Board | Right to Clean Water",
    introLine:
      "When the State fails its citizens, the Constitution stands as the last shield.",
    icon: Gavel,
    pdfLink: "/assets/uploads/Writ-Petition-3.pdf",
    synopsis:
      "This Writ Petition was filed under Article 226 of the Constitution of India before the Delhi High Court by Ms. X, a 34-year-old resident of Janakpuri, West Delhi, against the Municipal Corporation of Delhi (MCD) and the Delhi Jal Board (DJB). Since November 2024, residents of her locality have been receiving visibly discoloured and foul-smelling water unfit for drinking or domestic use. Despite multiple written complaints made to authorities on 15 December 2024, 10 May 2025, and 20 January 2026, no remedial action has been taken for over 16 months. The petition seeks a Writ of Mandamus directing the respondents to immediately inspect, test, and restore safe drinking water supply. It invokes the fundamental right to life under Article 21 (which includes the right to clean water as recognised by the Supreme Court) and Article 14 (equality and protection against arbitrary state action).",
    definitions: [
      {
        term: "Writ Petition",
        explanation:
          "A formal written application to a High Court (under Article 226) or the Supreme Court (under Article 32) seeking enforcement of fundamental or legal rights.",
      },
      {
        term: "Writ of Mandamus",
        explanation:
          "A judicial order commanding a public authority or government body to perform a specific legal duty that it has failed or refused to perform.",
      },
      {
        term: "Petitioner",
        explanation:
          "The person who files the writ petition; here, Ms. X, the affected resident.",
      },
      {
        term: "Respondent",
        explanation:
          "The authority against whom the writ is sought; here, MCD and Delhi Jal Board.",
      },
      {
        term: "Potable Water",
        explanation: "Water that is safe and suitable for human consumption.",
      },
      {
        term: "Fundamental Rights",
        explanation:
          "Rights guaranteed to Indian citizens under Part III of the Constitution (Articles 12-35), enforceable by courts.",
      },
    ],
    provisions: [
      {
        section: "Article 21",
        description:
          "Right to Life and Personal Liberty, interpreted to include the right to access clean drinking water and a healthy environment (Subhash Kumar v. State of Bihar, 1991 1 SCC 598)",
      },
      {
        section: "Article 14",
        description:
          "Equality before the law; prohibition on arbitrary state action",
      },
      {
        section: "Article 226",
        description:
          "Power of High Courts to issue writs, including mandamus, for enforcement of fundamental and legal rights",
      },
      {
        section: "Section 9, Delhi Jal Board Act 1998",
        description:
          "Statutory duty of the Delhi Jal Board to ensure safe water supply",
      },
      {
        section: "Section 42, Delhi Municipal Corporation Act 1957",
        description:
          "Duty of MCD to ensure sanitation and protection of public health",
      },
      {
        section: "Subhash Kumar v. State of Bihar (1991) 1 SCC 598",
        description:
          "Right to life includes right to pollution-free water and air",
      },
      {
        section:
          "A.P. Pollution Control Board v. Prof. M.V. Nayudu (1999) 2 SCC 718",
        description:
          "Access to clean drinking water is fundamental to life; State duty to protect water resources",
      },
      {
        section: "Narmada Bachao Andolan v. Union of India (2000) 10 SCC 664",
        description:
          "Water as a basic human necessity; essential for enjoyment of Article 21 rights",
      },
    ],
  },
  {
    id: 4,
    title: "Advertising & Marketing Agreement",
    teaser: "GroupM Worldwide v. Murphy's Marketing | Master Services",
    introLine:
      "Every campaign begins with a contract — the blueprint of a brand's promise.",
    icon: FileText,
    pdfLink: "/assets/uploads/Advertising-Agreement-4.pdf",
    synopsis:
      "This Master Marketing Agreement, dated March 2026, is between GroupM Worldwide Inc. (operating as Modi Media, Mumbai) as the Agency, and Murphy's Marketing Services Inc. (Papa Murphy's, New Delhi) as the Company — a take-and-bake pizza and food products business operating through corporate and franchised retail stores in North India. The agreement establishes a framework for the Agency to provide advertising and marketing services on a non-exclusive, project basis governed by individual Work Orders and Change Orders. Key features include 30-day invoice payment terms (with 1.5% per month interest on late payment), ownership of all deliverables by the Company as works made for hire under Section 17 of the Copyright Act, 1957, mutual indemnification obligations, a 1-year auto-renewing term with 90-day notice for termination, and a 2-year post-termination confidentiality obligation.",
    definitions: [
      {
        term: "Services",
        explanation:
          "All advertising and/or marketing projects authorised by the Company under mutually executed Work Orders and Change Orders.",
      },
      {
        term: "Work Order",
        explanation:
          "A written authorisation issued by the Company to the Agency specifying the scope of services, timetable, deliverables, and compensation for a particular project.",
      },
      {
        term: "Change Order",
        explanation:
          "A written modification to an existing Work Order that changes, amends, or supplements the agreed services or compensation.",
      },
      {
        term: "Deliverables",
        explanation:
          "All outputs produced by the Agency for the Company, including media plans, brochures, ad materials, videos, email campaigns, and other marketing content — owned by the Company as works made for hire upon full payment.",
      },
      {
        term: "Agency Elements",
        explanation:
          "Pre-existing know-how, tools, software, templates, and methodologies owned exclusively by the Agency prior to or independent of the agreement.",
      },
      {
        term: "Confidential Information",
        explanation:
          "All non-public financial, operational, and technical information shared between parties; obligations survive for 2 years post-termination.",
      },
      {
        term: "Indemnifying Party",
        explanation:
          "The party obligated to defend and hold harmless the other against third-party claims arising from that party's breach, IP infringement, or gross negligence.",
      },
    ],
    provisions: [
      {
        section: "Clause 1",
        description:
          "Services, Work Orders, Change Orders: non-exclusive basis; Agreement terms prevail over Work Orders unless expressly stated otherwise",
      },
      {
        section: "Clause 2",
        description:
          "Invoices and Payments: 30-day payment cycle; 1.5% per month interest on overdue amounts beyond 10 days; right to suspend services for non-payment",
      },
      {
        section: "Clause 3",
        description:
          "Independent Contractor: no partnership, joint venture, employment, or agency relationship created",
      },
      {
        section: "Clause 4",
        description:
          "Termination: 1-year auto-renewing term; 90-day written notice to terminate; 30-day cure period for material breach",
      },
      {
        section: "Clause 5",
        description:
          "Deliverables: works made for hire under Section 17, Copyright Act, 1957; IP ownership transfers to Company upon full payment",
      },
      {
        section: "Clause 7",
        description:
          "Indemnification: mutual indemnification for IP infringement, breach, and gross negligence",
      },
      {
        section: "Clause 9",
        description:
          "Limitation of Liability: no consequential, punitive, or indirect damages; liability capped at fees paid; 1-year claims limitation",
      },
      {
        section: "Clause 10",
        description:
          "Confidentiality: 2-year post-termination obligation; return or destruction of confidential information",
      },
      {
        section: "Clause 12",
        description:
          "Force Majeure: excludes payment obligations; covers acts of God, war, cyber attacks, natural disasters",
      },
    ],
  },
  {
    id: 5,
    title: "Case Brief: Harish Rana v. UOI",
    teaser: "Supreme Court of India | Right to Die with Dignity",
    introLine:
      "When medicine reaches its limits, the law must define the boundary of dignity.",
    icon: BookOpen,
    pdfLink: "/assets/uploads/Case-Brief-Harish-Rane-vs-UOI-5.pdf",
    synopsis:
      "This case brief documents the landmark Supreme Court judgment delivered on 11 March 2026 in Harish Rana v. Union of India and Ors., decided by a bench comprising Justice J.B. Pardiwala and Justice K.V. Viswanathan. Harish Rana suffered a severe head injury in an accidental fall in 2013, which left him in a permanent vegetative state with complete neurological impairment for over 13 years, with no possibility of recovery as confirmed by independent medical boards constituted by the Court. His family petitioned the Supreme Court seeking permission to withdraw life-sustaining treatment, arguing that continued artificial support merely prolonged biological existence without dignity. The Court allowed the withdrawal of life-sustaining treatment, reaffirming that Article 21 of the Constitution protects not just the right to live, but the right to live — and to die — with dignity. The judgment applied and strengthened the passive euthanasia framework established in Common Cause v. Union of India, subject to strict procedural safeguards including medical board evaluation and judicial oversight.",
    definitions: [
      {
        term: "Persistent Vegetative State (PVS)",
        explanation:
          "A medical condition in which a patient is alive but shows no signs of awareness or consciousness and has no meaningful interaction with the environment due to severe brain damage.",
      },
      {
        term: "Passive Euthanasia",
        explanation:
          "The withdrawal or withholding of life-sustaining medical treatment (such as artificial nutrition, hydration, or ventilation) with the intent to allow a terminally ill or irreversibly incapacitated patient to die naturally. Distinguished from active euthanasia, which is not permitted in India.",
      },
      {
        term: "Life-Sustaining Treatment",
        explanation:
          "Medical interventions such as mechanical ventilation, artificial nutrition and hydration, or cardiopulmonary resuscitation that artificially maintain biological functions when the body cannot do so independently.",
      },
      {
        term: "Ratio Decidendi",
        explanation:
          "The binding legal reasoning or principle of a court's judgment on which the decision is based; as distinct from obiter dicta (observations not forming part of the binding ratio).",
      },
      {
        term: "Living Will (Advance Directive)",
        explanation:
          "A legal document in which a person specifies in advance the medical treatments they do or do not wish to receive if they become incapacitated — recognised by the Supreme Court in Common Cause v. Union of India.",
      },
    ],
    provisions: [
      {
        section: "Article 21",
        description:
          "Right to Life and Personal Liberty; interpreted to include right to live and die with dignity",
      },
      { section: "Article 14", description: "Equality before law" },
      {
        section: "Aruna Ramchandra Shanbaug v. Union of India",
        description:
          "Recognised passive euthanasia in India under strict judicial supervision; family or hospital can petition court to withdraw treatment",
      },
      {
        section: "Common Cause v. Union of India (2018)",
        description:
          "Landmark ruling recognising the right to die with dignity as a fundamental right under Article 21; validated advance directives (living wills)",
      },
      {
        section: "Gian Kaur v. State of Punjab (1996)",
        description:
          "Distinguished the right to life under Article 21 from the right to die; clarified that right to life includes right to live with human dignity",
      },
    ],
  },
];
