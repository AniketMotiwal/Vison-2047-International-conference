/* Navigation Items Configuration */

interface DropdownSection {
  label?: string;
  items: { label: string; href: string; featured?: boolean }[];
}
interface NavItem {
  label: string;
  href?: string;        // ← already exists, this is correct
  sections?: DropdownSection[];
  isAction?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'About',
    sections: [
      {
        label: 'About the Conference',
        items: [
          { label: 'Overview', href: '/overview' },
          { label: 'Mission & Vision', href: '/mission-vision' },
          { label: 'Objectives', href: '/objectives' },
        ],
      },
    ],
  },
 {
  label: 'People',           // ← top-level NavItem, href is valid here
  href: '#people',
  sections: [
    {
      label: 'People',
      items: [
        { label: 'Patrons', href: '#patrons' },
        { label: 'Advisory Board', href: '#advisory-board' },
        { label: 'Organizing Committee', href: '#organizing-committee' },
      ],
    },
  ],
},
  {
    label: 'Program',
    sections: [
      {
        label: 'Program Overview',
        items: [
          { label: 'Themes', href: '#themes' },
          { label: 'Timeline', href: '#timeline' },
          { label: 'Who Should Attend', href: '#who-should-attend' },
        ],
      },
      {
        label: 'Content',
        items: [
          { label: 'Keynote Speakers', href: '#keynotes' },
          { label: 'Technical Sessions', href: '#sessions' },
          { label: 'Workshops', href: '#workshops' },
        ],
      },
    ],
  },
  {
    label: 'Register',
    sections: [
      {
        label: 'How to Register',
        items: [
          { label: 'Registration Form (Only for Attendee)', href: 'https://forms.gle/er6bf4gKrA2JMAvy8', featured: true },
          // { label: 'Registration Info', href: '/registration-info' },
         { label: 'Payment Instructions', href: '/payment-instructions' },
          { label: 'Fees & Categories', href: '/fees' },
        ],
      },
      {
        label: 'Payment',
        items: [
          { label: 'Pay Now (SBI Collect)', href: 'https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=365641', featured: true },
         
        ],
      },
    ],
  },
  {
    label: 'Sponsor / Exhibit',
    sections: [
      // {
      //   label: 'Sponsorship',
      //   items: [
      //     { label: 'Sponsorship Opportunities', href: '#sponsor' },
      //     { label: 'Sponsorship Packages', href: '#sponsor-packages' },
      //   ],
      // },
      {
        label: 'Exhibition',
        items: [
          // { label: 'Exhibit', href: '#exhibit' },
          { label: 'Brochure (PDF)', href: '#brochure', featured: true },
          // { label: 'Booth Registration', href: '#booth-registration' },
        ],
      },
      
    ],
  },
  {
  label: 'INDUSTRY-ACADEMIA CONCLAVE',
  href: '/ INDUSTRY-ACADEMIA CONCLAVE 2026 IITR-SSS-BBGIF AD.pdf', // yahan apna actual PDF path daalna
},
  {
    label: 'Venue / Travel',
    sections: [
      {
        label: 'Venue Information',
        items: [
          { label: 'How to Reach', href: '/how-to-reach' },
          { label: 'Venue Details', href: '/Venue ' },
        ],
      },
      // {
      //   label: 'Accommodation',
      //   items: [
      //     { label: 'Hotels Near Campus', href: '#hotels' },
      //     { label: 'Accommodation', href: '#accommodation' },
      //     { label: 'Travel Tips', href: '#travel-tips' },
      //   ],
      // },
    ],
  },
  {
    label: 'Policies',
    // sections: [
    //   {
    //     label: 'Conference Policies',
    //     items: [
    //       { label: 'Code of Conduct', href: '#code-of-conduct' },
    //       { label: 'Anti-Harassment', href: '#anti-harassment' },
    //       { label: 'Presentation Requirements', href: '#presentation-requirements' },
    //       { label: 'Co-Author Login', href: '#co-author-login' },
    //     ],
    //   },
    //   {
    //     label: 'Content & Proprietary',
    //     items: [
    //       { label: 'AI Use - ASME Content', href: '#ai-use-policy' },
    //       { label: 'Privacy Policy', href: '#privacy-policy' },
    //       { label: 'Terms & Conditions', href: '#terms' },
    //     ],
    //   },
    // ],
  },
  { label: 'Contact Us', href: '#contactus', isAction: true },
];

export type { NavItem, DropdownSection };
