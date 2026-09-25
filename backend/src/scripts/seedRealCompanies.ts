import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const companiesData = [
  {
    name: 'AVPSTACK TECHNOLOGIES',
    websiteUrl: 'https://www.avptechnologies.in/',
    logoUrl: '/logos/avpstack.png',
    tags: ['Software', 'Intelligent Automation'],
    positions: [
      {
        title: 'Full Stack Developer',
        domain: 'Web Apps',
        eligibleYears: '2, 3, 4',
        isPaid: true,
        stipend: 'On the basis of project',
        duration: '2 months',
        description: 'We are a fast-moving startup looking for enthusiastic college interns to work on real-world web development projects for local businesses. Interns will help us rapidly design, build, test and deploy websites, dashboards and simple web applications using modern technologies and AI-assisted development tools.',
        jobDescriptionPdfUrl: 'https://docs.google.com/document/d/19YPBKe4j78-ypznnbJgtxtxY4Zj6Pgm33Kl0MY4svS8/edit?usp=sharing'
      }
    ]
  },
  {
    name: 'Decagon Software Pvt. Ltd.',
    websiteUrl: 'decagonsoftware.com',
    logoUrl: '/logos/decagon.png',
    tags: ['Electronics', 'PCB Design', 'Embedded Systems'],
    positions: [
      {
        title: 'Electronics & PCB Design Intern',
        domain: 'Electronics / Embedded Systems',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000/month',
        duration: '2 months',
        description: 'Hands-on internship working on an ESP32-based product, including PCB assembly, soldering, testing, troubleshooting, basic electronics, and Gerber file generation.'
      }
    ]
  },
  {
    name: 'TrafficHQ Digital Media LLP',
    websiteUrl: 'traffichq.in',
    logoUrl: '/logos/traffichq.png',
    tags: ['SEO', 'Digital Marketing', 'Business Development'],
    positions: [
      {
        title: 'SEO Intern',
        domain: 'Digital Marketing / SEO',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000–₹15,000/month',
        duration: '6 months',
        description: 'Assist with on-page, off-page and technical SEO, keyword research, competitor analysis, link-building, content strategy and SEO implementation for client websites.'
      },
      {
        title: 'Business Development Intern (Sales)',
        domain: 'Sales / Business Development',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹8,000–₹12,000/month',
        duration: '6 months',
        description: 'Identify potential clients, conduct outbound calls and cold outreach, build prospect databases, communicate company services, maintain CRM records, handle client objections.'
      }
    ]
  },
  {
    name: 'Pratishna Engineers Limited',
    websiteUrl: 'pratishnaengineers.com',
    logoUrl: '/logos/pratishna.png',
    tags: ['Mechanical Engineering', 'Manufacturing', 'Industrial Machinery'],
    positions: [
      {
        title: 'Trainee Engineer',
        domain: 'Mechanical Engineering',
        eligibleYears: '4th-year students',
        isPaid: true,
        stipend: '₹12,500/month',
        duration: '6 months, starting January 2027',
        description: 'Gain hands-on exposure to machine design, production engineering, CNC manufacturing, quality engineering, product development, hydraulics, automation, project engineering.'
      }
    ]
  },
  {
    name: 'Nagarkot Forwarders Pvt Ltd',
    websiteUrl: 'https://www.nagarkot.co.in/',
    logoUrl: '/logos/nagarkot.png',
    tags: ['Logistics', 'Freight Forwarding', 'Supply Chain'],
    positions: [
      {
        title: 'Artificial Intelligence Application Developer',
        domain: 'AI / Software Development',
        eligibleYears: '4th Year',
        isPaid: true,
        stipend: '₹10,000 – ₹14,000/month',
        duration: '6 months',
        description: 'Develop internal software applications, automation processes, and AI-enabled solutions to improve business efficiency. The role involves understanding user requirements, redesigning workflows.'
      }
    ]
  },
  {
    name: '1Accord',
    websiteUrl: 'https://1accord.in',
    logoUrl: '/logos/1accord.png',
    tags: ['Product Development', 'Electronics & IoT', 'Engineering R&D'],
    positions: [
      {
        title: 'Electronics R&D & Embedded Product Development Intern',
        domain: 'Electronics / Embedded Systems / IoT',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹10,000/month',
        duration: 'Minimum 6 months',
        description: 'Work on circuit, schematic and PCB development; firmware, IoT and embedded software; microcontrollers and embedded C/C++; sensors, actuators, displays.'
      },
      {
        title: 'Mechanical R&D & Product Design Intern',
        domain: 'Mechanical R&D / Product Design',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹10,000/month',
        duration: 'Minimum 6 months',
        description: 'Work on 3D CAD, product and enclosure design, mechanisms, fixtures, assemblies, packaging, 3D printing, rapid prototyping, electronics-mechanical integration.'
      },
      {
        title: 'Technical Business Development & Solutions Intern',
        domain: 'Technical Business Development / Sales / IoT',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹15,000/month',
        duration: 'Minimum 6 months',
        description: 'B2B lead generation and prospect research, identifying customer needs and opportunities, presenting 1Accord\'s product development and IoT capabilities.'
      },
      {
        title: 'Growth Automation & Digital Marketing Intern',
        domain: 'Digital Marketing / Business Growth / Automation',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹10,000/month',
        duration: 'Minimum 6 months',
        description: 'B2B lead generation, LinkedIn/email outreach, campaign management, lead-generation automation, CRM workflows, AI/no-code automation.'
      }
    ]
  },
  {
    name: 'Thermolabs',
    websiteUrl: 'https://thermolabgroup.com/',
    logoUrl: '/logos/thermolabs.png',
    tags: ['Engineering', 'Manufacturing', 'Industrial'],
    positions: [
      {
        title: 'Marketing Executive',
        domain: 'Marketing / Sales',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹15,000/month',
        duration: '6 months',
        description: 'Marketing Executive responsible for meeting clients, attending exhibitions, preparing quotations and order confirmations, generating enquiries.',
        jobDescriptionPdfUrl: 'https://drive.google.com/file/d/1Qc-hgLpaQ0Z6bvkZZ-cBhJQ_rD4LParO/view?usp=sharing'
      },
      {
        title: 'Production Executive',
        domain: 'Production / Manufacturing',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹15,000/month',
        duration: '6 months',
        description: 'Production Executive responsible for monitoring production targets, coordinating with PPC and Stores, monitoring production/rework/rejection.',
        jobDescriptionPdfUrl: 'https://drive.google.com/file/d/1NUe9nO7DJcGLWcP7pOEzJlKdxqgN7ULs/view?usp=sharing'
      }
    ]
  },
  {
    name: 'Virtue Crennovative Solutions (VCS)',
    websiteUrl: 'https://virtuecrennovativesolutions.com/',
    logoUrl: '/logos/vcs.png',
    tags: ['Technology', 'Digital Solutions', 'Business & Research'],
    positions: [
      {
        title: 'Full Stack Web Development',
        domain: 'Web Development',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Work on modern websites and web applications, including front-end and back-end development, APIs, databases, third-party integrations.'
      },
      {
        title: 'UI/UX Design',
        domain: 'UI/UX Design',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Design intuitive and user-friendly digital experiences through wireframes, user flows, prototypes, website and application interfaces.'
      },
      {
        title: 'Graphic Design',
        domain: 'Graphic Design / Branding',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Create social media creatives, advertisements, branding and identity materials, presentations, brochures, marketing materials.'
      },
      {
        title: 'Video Editing',
        domain: 'Video Editing / Media',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Edit Reels, YouTube videos and promotional videos, including transitions, subtitles, music, sound effects, colour correction and audio enhancement.'
      },
      {
        title: 'Videography & Film Development',
        domain: 'Videography / Film Production',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Assist with videography, filmmaking and cinematography from planning through production and post-production.'
      },
      {
        title: 'Motion Graphics Video Editor / Developer',
        domain: 'Motion Graphics / Animation / Video',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Create motion graphics, animations, animated social media content, text and graphic animations, visual effects and transitions.'
      },
      {
        title: 'Content Writing / Story Writing',
        domain: 'Content Writing / Copywriting',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Create written content, scripts and story concepts for brands, campaigns, websites, social media and video projects.'
      },
      {
        title: 'Content Strategy',
        domain: 'Content Strategy / Digital Marketing',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Assist in planning content strategies through audience and competitor research, content ideas, content calendars, social media planning.'
      },
      {
        title: 'Performance Marketing',
        domain: 'Performance Marketing / Digital Advertising',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Gain practical exposure to paid advertising, campaign planning, audience targeting, lead generation and performance analysis.'
      },
      {
        title: 'Business Growth & Development',
        domain: 'Business Development / Sales',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Support business growth through potential client and market research, identifying opportunities, lead generation, business development activities.'
      },
      {
        title: 'Data Analytics',
        domain: 'Data Analytics / Business Analytics',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Collect, clean and analyse business and marketing data, identify trends and patterns, create reports and dashboards.'
      },
      {
        title: 'Business / Market Research',
        domain: 'Business / Market Research',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Conduct industry, market, company and competitor research, collect and analyse publicly available business information.'
      },
      {
        title: 'Founder\'s Office',
        domain: 'Strategy / Operations / Business',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Work with the Founder/management team on business, strategy, operations, research and growth initiatives.'
      },
      {
        title: 'Project Coordination',
        domain: 'Project Management / Coordination',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Support project planning and coordination between internal teams, clients and stakeholders.'
      }
    ]
  },
  {
    name: 'Gyansthan Education Services LLP',
    websiteUrl: 'https://www.gyansthan.com/',
    logoUrl: '/logos/gyansthan.png',
    tags: ['Education', 'Business Development', 'Partnerships'],
    positions: [
      {
        title: 'Intern - Client Acquisition and Partnerships',
        domain: 'Client Acquisition / Business Development / Partnerships',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000/month',
        duration: '3 months',
        description: 'Support the Client Acquisition and Partnerships team in identifying, engaging and onboarding potential clients and collaborators in the education sector.'
      }
    ]
  },
  {
    name: 'DATEN&WISSEN',
    websiteUrl: 'https://datenwissen.com/',
    logoUrl: '/logos/datenwissen.png',
    tags: ['Data Science', 'Business Development', 'Technology'],
    positions: [
      {
        title: 'Data Science Intern',
        domain: 'Data Science',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000/month or ₹12,300/month (NATS)',
        duration: '6 months',
        description: 'Data Science Intern role'
      },
      {
        title: 'Business Development Executive',
        domain: 'Business Development',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000–₹10,000/month',
        duration: '6 months',
        description: 'Business Development Executive role'
      },
      {
        title: 'Founder\'s Office Intern',
        domain: 'Founder\'s Office / Business Strategy',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000–₹10,000/month',
        duration: '6 months',
        description: 'Founder\'s Office Intern role'
      }
    ]
  },
  {
    name: 'MIDASX',
    websiteUrl: 'https://www.vijyafintech.com/',
    logoUrl: '/logos/midasx.png',
    tags: ['FinTech', 'Wealth Management', 'Financial Technology'],
    positions: [
      {
        title: 'Sales Intern',
        domain: 'Sales / Business Development',
        eligibleYears: 'Fresher',
        isPaid: true,
        stipend: '₹15,000–₹25,000/month',
        duration: '3 months',
        description: 'Support sales and business development activities, including lead generation, prospect research, client acquisition and relationship management.'
      },
      {
        title: 'Digital Marketing Intern',
        domain: 'Digital Marketing',
        eligibleYears: 'Freshers / Final Year Students',
        isPaid: true,
        stipend: '₹15,000–₹25,000/month',
        duration: '3 months',
        description: 'Support digital marketing activities across social media, email, WhatsApp, webinars, campaigns, content and performance marketing.'
      }
    ]
  },
  {
    name: 'STECHGROW INTELLIGENCE AI',
    websiteUrl: 'https://in.linkedin.com/company/stechgrow.com',
    logoUrl: '/logos/stechgrow.png',
    tags: ['Artificial Intelligence', 'Data Analytics', 'B2B SaaS'],
    positions: [
      {
        title: 'Backend Developer Intern',
        domain: 'Backend Development / Software Development',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend',
        duration: '3 months',
        description: 'Develop and maintain backend systems, APIs and server-side functionality for software applications.'
      },
      {
        title: 'Frontend Developer Intern',
        domain: 'Frontend Development / Software Development',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend',
        duration: '3 months',
        description: 'Develop and maintain user-facing interfaces and frontend functionality for software applications.'
      }
    ]
  },
  {
    name: 'Yogi Software',
    websiteUrl: 'https://yogisoftware.com/',
    logoUrl: '/logos/yogi.png',
    tags: ['Software Development', 'Artificial Intelligence', 'Web Development'],
    positions: [
      {
        title: 'Full Stack Engineering Intern',
        domain: 'Full Stack Development / Software Engineering',
        eligibleYears: 'Pre-final / Final Year',
        isPaid: true,
        stipend: '₹5,000–₹8,000/month',
        duration: '6 months',
        description: 'Work on real-world web applications using React and FastAPI, with hands-on experience in frontend and backend development.'
      }
    ]
  },
  {
    name: 'Scad Technologies',
    websiteUrl: 'https://scadtech.in/',
    logoUrl: '/logos/scadtech.png',
    tags: ['Electronics', 'PCB Design', 'Embedded Systems'],
    positions: [
      {
        title: 'PCB Designer / Hardware Engineer',
        domain: 'Hardware Engineering / PCB Design',
        eligibleYears: '0 to 5 Years',
        isPaid: true,
        stipend: '₹10,000 to ₹40,000',
        duration: 'Full-time',
        description: 'Responsibilities include schematic and PCB design as per standards using KiCad, updating designs, maintaining footprint and symbol libraries.'
      },
      {
        title: 'Embedded Systems Engineer',
        domain: 'Embedded Systems / Firmware',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: 'Depends on interview',
        duration: 'Full-time',
        description: 'Involves developing and maintaining advanced embedded systems based products, hardware planning, code planning, tech support, client coordination.'
      }
    ]
  },
  {
    name: 'Pro CADCAM Services',
    websiteUrl: 'Not provided',
    logoUrl: '/logos/procadcam.png',
    tags: ['Precision Machining', 'Plastic Injection Molds', 'Defense & Aerospace'],
    positions: [
      {
        title: 'Engineer Project Leader',
        domain: 'Mechanical Engineering / Project Management',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹10,000 per month',
        duration: '6 months',
        description: 'On-site role managing and executing projects while ensuring quality. Requires basic mechanical engineering knowledge.',
        jobDescriptionPdfUrl: 'https://docs.google.com/document/d/1lVGSqcRDW591oHDQHkfbT1Ox9vJiNPOq_6Qc91wCkvU/edit?usp=sharing'
      }
    ]
  },
  {
    name: 'STARCAD Design Solutions',
    websiteUrl: 'https://starcaddesign.in/',
    logoUrl: '/logos/starcad.png',
    tags: ['CAD/CAE Solutions', 'Engineering Software', 'Design Services'],
    positions: [
      {
        title: 'Techno-Sales / Business Development Executive (Fresher)',
        domain: 'Sales / Business Development',
        eligibleYears: 'Fresher (0 years)',
        isPaid: true,
        stipend: '₹8,000 per month',
        duration: '6 months',
        description: 'The role involves working in the software sales team. It requires excellent communication skills, a positive attitude, an interest in business development.'
      }
    ]
  },
  {
    name: 'Ideafactor Design',
    websiteUrl: 'https://ideafactor.craft.me/JDforBD',
    logoUrl: '/logos/ideafactor.png',
    tags: ['UI/UX Design', 'Graphic Design', 'Digital Product & Brand Design'],
    positions: [
      {
        title: 'UI/UX & Graphic Designer (Fresher)',
        domain: 'Design / Visual & Product Communication',
        eligibleYears: '0-1 years / Freshers',
        isPaid: true,
        stipend: 'Up to ₹8,000 per month',
        duration: 'Full-time',
        description: 'A hands-on role supporting digital product design (wireframes, app and web screens, prototypes) and brand/visual design.'
      }
    ]
  },
  {
    name: 'Immibook Pty Ltd',
    websiteUrl: 'https://immibook.com.au/',
    logoUrl: '/logos/immibook.png',
    tags: ['Immigration Technology', 'Mentorship', 'Community Platform'],
    positions: [
      {
        title: 'Partnerships & Outreach Intern',
        domain: 'Partnerships / Business Development / Outreach',
        eligibleYears: '3rd & 4th Year Students Preferred',
        isPaid: false,
        stipend: 'Not specified',
        duration: '3 or 6 months',
        description: 'Research and approach brands, creators, communities and media for collaborations and organic placements, including outreach, follow-ups and tracking results.'
      },
      {
        title: 'Email Marketing Intern',
        domain: 'Email Marketing / Digital Marketing',
        eligibleYears: '3rd & 4th Year Students Preferred',
        isPaid: false,
        stipend: 'Not specified',
        duration: '3 or 6 months',
        description: 'Grow and manage the email database through lead capture, contact segmentation, campaign creation, scheduling and performance tracking.'
      },
      {
        title: 'App Developer Intern (AI / No-Code)',
        domain: 'App Development / AI / No-Code',
        eligibleYears: '3rd & 4th Year Students Preferred',
        isPaid: false,
        stipend: 'Not specified',
        duration: '3 or 6 months',
        description: 'Revamp and maintain the existing app using AI and no-code development tools while automating data feeds and managing backend services on Supabase and AWS.'
      }
    ]
  },
  {
    name: 'Digital Dose',
    websiteUrl: 'https://in.linkedin.com/company/digitaldose',
    logoUrl: '/logos/digitaldose.png',
    tags: ['Digital Marketing', 'Software Development', 'Technology'],
    positions: [
      {
        title: 'MERN Stack Developer Intern',
        domain: 'Full Stack Web Development / MERN Stack',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend — Certification Program',
        duration: '3 months',
        description: 'Develop and maintain web applications using MongoDB, Express.js, React.js and Node.js while gaining practical experience in full stack development.'
      },
      {
        title: 'ReactJS Developer Intern',
        domain: 'Frontend Development / ReactJS',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend — Certification Program',
        duration: '3 months',
        description: 'Develop responsive and interactive user interfaces using ReactJS, reusable components and modern frontend development practices.'
      },
      {
        title: 'NodeJS Developer Intern',
        domain: 'Backend Development / NodeJS',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend — Certification Program',
        duration: '3 months',
        description: 'Develop backend applications and APIs using NodeJS while working with databases, server-side logic and application integrations.'
      }
    ]
  }
];

async function seedDatabase() {
  console.log('Clearing existing dummy data (Google, Morgan Stanley, etc.)...');
  
  // Delete all existing applications first to satisfy foreign key constraints
  await prisma.application.deleteMany({});
  
  // Delete all existing positions
  await prisma.position.deleteMany({});
  
  // Delete all existing companies
  await prisma.company.deleteMany({});

  console.log('Inserting real company details from your document...');

  for (const company of companiesData) {
    const createdCompany = await prisma.company.create({
      data: {
        name: company.name,
        websiteUrl: company.websiteUrl,
        logoUrl: company.logoUrl,
        tags: company.tags,
        highlights: [], // You can add logic for highlights if needed
        positions: {
          create: company.positions.map((pos) => ({
            title: pos.title,
            domain: pos.domain,
            eligibleYears: pos.eligibleYears,
            isPaid: pos.isPaid,
            stipend: pos.stipend,
            duration: pos.duration,
            description: pos.description,
            jobDescriptionPdfUrl: pos.jobDescriptionPdfUrl || null,
          }))
        }
      }
    });
    console.log(`Successfully added: ${createdCompany.name} with ${company.positions.length} positions.`);
  }
  
  console.log('Seed completed successfully!');
}

seedDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
