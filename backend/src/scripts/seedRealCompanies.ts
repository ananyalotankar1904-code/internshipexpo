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
        internshipType: 'Onsite',
        domain: 'Web Apps',
        eligibleYears: '2, 3, 4',
        isPaid: true,
        stipend: 'On the basis of project',
        duration: '2 months',
        description: 'We are a fast-moving startup looking for enthusiastic college interns to work on real-world web development projects for local businesses. Interns will help us rapidly design, build, test and deploy websites, dashboards and simple web applications using modern technologies and AI-assisted development tools.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
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
        internshipType: 'Onsite',
        domain: 'Electronics / Embedded Systems',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000/month',
        duration: '2 months',
        description: 'Hands-on internship working on an ESP32-based product, including PCB assembly, soldering, testing, troubleshooting, basic electronics, and Gerber file generation.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'Digital Marketing / SEO',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000–₹15,000/month',
        duration: '6 months',
        description: 'Assist with on-page, off-page and technical SEO, keyword research, competitor analysis, link-building, content strategy and SEO implementation for client websites.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Business Development Intern (Sales)',
        internshipType: 'Onsite',
        domain: 'Sales / Business Development',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹8,000–₹12,000/month',
        duration: '6 months',
        description: 'Identify potential clients, conduct outbound calls and cold outreach, build prospect databases, communicate company services, maintain CRM records, handle client objections.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'Mechanical Engineering',
        eligibleYears: '4th-year students',
        isPaid: true,
        stipend: '₹12,500/month',
        duration: '6 months, starting January 2027',
        description: 'Gain hands-on exposure to machine design, production engineering, CNC manufacturing, quality engineering, product development, hydraulics, automation, project engineering.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'AI / Software Development',
        eligibleYears: '4th Year',
        isPaid: true,
        stipend: '₹10,000 – ₹14,000/month',
        duration: '6 months',
        description: 'Develop internal software applications, automation processes, and AI-enabled solutions to improve business efficiency. The role involves understanding user requirements, redesigning workflows.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Hybrid / Onsite',
        domain: 'Electronics / Embedded Systems / IoT',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹10,000/month',
        duration: 'Minimum 6 months',
        description: 'Work on circuit, schematic and PCB development; firmware, IoT and embedded software; microcontrollers and embedded C/C++; sensors, actuators, displays.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Mechanical R&D & Product Design Intern',
        internshipType: 'Hybrid / Onsite',
        domain: 'Mechanical R&D / Product Design',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹10,000/month',
        duration: 'Minimum 6 months',
        description: 'Work on 3D CAD, product and enclosure design, mechanisms, fixtures, assemblies, packaging, 3D printing, rapid prototyping, electronics-mechanical integration.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Technical Business Development & Solutions Intern',
        internshipType: 'Hybrid / Onsite',
        domain: 'Technical Business Development / Sales / IoT',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹15,000/month',
        duration: 'Minimum 6 months',
        description: 'B2B lead generation and prospect research, identifying customer needs and opportunities, presenting 1Accord\'s product development and IoT capabilities.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Growth Automation & Digital Marketing Intern',
        internshipType: 'Hybrid / Onsite',
        domain: 'Digital Marketing / Business Growth / Automation',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000 fixed + incentives, up to ₹10,000/month',
        duration: 'Minimum 6 months',
        description: 'B2B lead generation, LinkedIn/email outreach, campaign management, lead-generation automation, CRM workflows, AI/no-code automation.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Remote / Work from home',
        domain: 'Marketing / Sales',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹15,000/month',
        duration: '6 months',
        description: 'Marketing Executive responsible for meeting clients, attending exhibitions, preparing quotations and order confirmations, generating enquiries.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'Production Executive',
        internshipType: 'Onsite',
        domain: 'Production / Manufacturing',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹15,000/month',
        duration: '6 months',
        description: 'Production Executive responsible for monitoring production targets, coordinating with PPC and Stores, monitoring production/rework/rejection.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
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
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Web Development',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Work on modern websites and web applications, including front-end and back-end development, APIs, databases, third-party integrations.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'UI/UX Design',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'UI/UX Design',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Design intuitive and user-friendly digital experiences through wireframes, user flows, prototypes, website and application interfaces.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Graphic Design',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Graphic Design / Branding',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Create social media creatives, advertisements, branding and identity materials, presentations, brochures, marketing materials.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Video Editing',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Video Editing / Media',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Edit Reels, YouTube videos and promotional videos, including transitions, subtitles, music, sound effects, colour correction and audio enhancement.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Videography & Film Development',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Videography / Film Production',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Assist with videography, filmmaking and cinematography from planning through production and post-production.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Motion Graphics Video Editor / Developer',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Motion Graphics / Animation / Video',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Create motion graphics, animations, animated social media content, text and graphic animations, visual effects and transitions.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Content Writing / Story Writing',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Content Writing / Copywriting',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Create written content, scripts and story concepts for brands, campaigns, websites, social media and video projects.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Content Strategy',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Content Strategy / Digital Marketing',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Assist in planning content strategies through audience and competitor research, content ideas, content calendars, social media planning.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Performance Marketing',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Performance Marketing / Digital Advertising',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Gain practical exposure to paid advertising, campaign planning, audience targeting, lead generation and performance analysis.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Business Growth & Development',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Business Development / Sales',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Support business growth through potential client and market research, identifying opportunities, lead generation, business development activities.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Data Analytics',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Data Analytics / Business Analytics',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Collect, clean and analyse business and marketing data, identify trends and patterns, create reports and dashboards.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Business / Market Research',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Business / Market Research',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Conduct industry, market, company and competitor research, collect and analyse publicly available business information.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Founder\'s Office',
        domain: 'Strategy / Operations / Business',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Work with the Founder/management team on business, strategy, operations, research and growth initiatives.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Project Coordination',
        internshipType: 'Remote / Work from home / Hybrid / Onsite',
        domain: 'Project Management / Coordination',
        eligibleYears: 'Students and freshers',
        isPaid: false,
        stipend: 'Performance based',
        duration: '3 months',
        description: 'Support project planning and coordination between internal teams, clients and stakeholders.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'Client Acquisition / Business Development / Partnerships',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000/month',
        duration: '3 months',
        description: 'Support the Client Acquisition and Partnerships team in identifying, engaging and onboarding potential clients and collaborators in the education sector.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Hybrid',
        domain: 'Data Science',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000/month or ₹12,300/month (NATS)',
        duration: '6 months',
        description: 'Data Science Intern role'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Business Development Executive',
        internshipType: 'Onsite',
        domain: 'Business Development',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000–₹10,000/month',
        duration: '6 months',
        description: 'Business Development Executive role'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Founder\'s Office Intern',
        internshipType: 'Onsite',
        domain: 'Founder\'s Office / Business Strategy',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹5,000–₹10,000/month',
        duration: '6 months',
        description: 'Founder\'s Office Intern role'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite / Remote / Work from home / Hybrid',
        domain: 'Sales / Business Development',
        eligibleYears: 'Fresher',
        isPaid: true,
        stipend: '₹15,000–₹25,000/month',
        duration: '3 months',
        description: 'Support sales and business development activities, including lead generation, prospect research, client acquisition and relationship management.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Digital Marketing Intern',
        internshipType: 'Onsite / Remote / Work from home / Hybrid',
        domain: 'Digital Marketing',
        eligibleYears: 'Freshers / Final Year Students',
        isPaid: true,
        stipend: '₹15,000–₹25,000/month',
        duration: '3 months',
        description: 'Support digital marketing activities across social media, email, WhatsApp, webinars, campaigns, content and performance marketing.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Remote / Work from home',
        domain: 'Backend Development / Software Development',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend',
        duration: '3 months',
        description: 'Develop and maintain backend systems, APIs and server-side functionality for software applications.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Frontend Developer Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Frontend Development / Software Development',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend',
        duration: '3 months',
        description: 'Develop and maintain user-facing interfaces and frontend functionality for software applications.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'Full Stack Development / Software Engineering',
        eligibleYears: 'Pre-final / Final Year',
        isPaid: true,
        stipend: '₹5,000–₹8,000/month',
        duration: '6 months',
        description: 'Work on real-world web applications using React and FastAPI, with hands-on experience in frontend and backend development.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'Hardware Engineering / PCB Design',
        eligibleYears: '0 to 5 Years',
        isPaid: true,
        stipend: '₹10,000 to ₹40,000',
        duration: 'Full-time',
        description: 'Responsibilities include schematic and PCB design as per standards using KiCad, updating designs, maintaining footprint and symbol libraries.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Embedded Systems Engineer',
        internshipType: 'Onsite',
        domain: 'Embedded Systems / Firmware',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: 'Depends on interview',
        duration: 'Full-time',
        description: 'Involves developing and maintaining advanced embedded systems based products, hardware planning, code planning, tech support, client coordination.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'Mechanical Engineering / Project Management',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹10,000 per month',
        duration: '6 months',
        description: 'On-site role managing and executing projects while ensuring quality. Requires basic mechanical engineering knowledge.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
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
        internshipType: 'Onsite',
        domain: 'Sales / Business Development',
        eligibleYears: 'Fresher (0 years)',
        isPaid: true,
        stipend: '₹8,000 per month',
        duration: '6 months',
        description: 'The role involves working in the software sales team. It requires excellent communication skills, a positive attitude, an interest in business development.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Onsite',
        domain: 'Design / Visual & Product Communication',
        eligibleYears: '0-1 years / Freshers',
        isPaid: true,
        stipend: 'Up to ₹8,000 per month',
        duration: 'Full-time',
        description: 'A hands-on role supporting digital product design (wireframes, app and web screens, prototypes) and brand/visual design.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Remote / Work from home',
        domain: 'Partnerships / Business Development / Outreach',
        eligibleYears: '3rd & 4th Year Students Preferred',
        isPaid: false,
        stipend: 'Not specified',
        duration: '3 or 6 months',
        description: 'Research and approach brands, creators, communities and media for collaborations and organic placements, including outreach, follow-ups and tracking results.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Email Marketing Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Email Marketing / Digital Marketing',
        eligibleYears: '3rd & 4th Year Students Preferred',
        isPaid: false,
        stipend: 'Not specified',
        duration: '3 or 6 months',
        description: 'Grow and manage the email database through lead capture, contact segmentation, campaign creation, scheduling and performance tracking.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'App Developer Intern (AI / No-Code)',
        internshipType: 'Remote / Work from home',
        domain: 'App Development / AI / No-Code',
        eligibleYears: '3rd & 4th Year Students Preferred',
        isPaid: false,
        stipend: 'Not specified',
        duration: '3 or 6 months',
        description: 'Revamp and maintain the existing app using AI and no-code development tools while automating data feeds and managing backend services on Supabase and AWS.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
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
        internshipType: 'Remote / Work from home',
        domain: 'Full Stack Web Development / MERN Stack',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend — Certification Program',
        duration: '3 months',
        description: 'Develop and maintain web applications using MongoDB, Express.js, React.js and Node.js while gaining practical experience in full stack development.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'ReactJS Developer Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Frontend Development / ReactJS',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend — Certification Program',
        duration: '3 months',
        description: 'Develop responsive and interactive user interfaces using ReactJS, reusable components and modern frontend development practices.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'NodeJS Developer Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Backend Development / NodeJS',
        eligibleYears: 'Not specified',
        isPaid: false,
        stipend: 'No stipend — Certification Program',
        duration: '3 months',
        description: 'Develop backend applications and APIs using NodeJS while working with databases, server-side logic and application integrations.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'Cognify Solutions',
    websiteUrl: 'https://www.cognify-solutions.com/',
    logoUrl: '/logos/cognify.png',
    tags: ['Software Development', 'IT Services', 'Digital Transformation'],
    positions: [
      {
        title: 'Full-Stack/Web Developer',
        internshipType: 'Remote / Work from home',
        domain: 'Web Development',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: 'Depending on interview',
        duration: '3 months',
        description: 'Develop and maintain full-stack web applications.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'Flutter or Mobile App Developer',
        internshipType: 'Remote / Work from home',
        domain: 'Mobile App Development',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: 'Depending on interview',
        duration: '3 months',
        description: 'Develop and maintain mobile applications using Flutter.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'UI/UX + Graphic Designer',
        internshipType: 'Remote / Work from home',
        domain: 'UI/UX & Graphic Design',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: 'Depending on interview',
        duration: '3 months',
        description: 'Design user interfaces and create graphic design assets.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'Digital Marketing Executive',
        internshipType: 'Remote / Work from home',
        domain: 'Digital Marketing',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: 'Depending on interview',
        duration: '3 months',
        description: 'Support digital marketing activities and campaigns.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'SEO Executive',
        internshipType: 'Remote / Work from home',
        domain: 'Search Engine Optimization',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: 'Depending on interview',
        duration: '3 months',
        description: 'Support search engine optimization and website visibility activities.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'Performance Marketing Executive',
        internshipType: 'Remote / Work from home',
        domain: 'Performance Marketing',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: 'Depending on interview',
        duration: '3 months',
        description: 'Support performance marketing campaigns and digital advertising activities.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'BDE / Sales Executive',
        internshipType: 'Remote / Work from home',
        domain: 'Business Development & Sales',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: 'Depending on interview',
        duration: '3 months',
        description: 'Support business development, sales and client acquisition activities.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      }
    ]
  },
  {
    name: 'Scoreazy',
    websiteUrl: 'https://www.scoreazy.com/',
    logoUrl: '/logos/scoreazy.png',
    tags: ['EdTech & Personalized Learning', 'Educational Psychology & Mentorship', 'Data Analytics & Skill Assessment'],
    positions: [
      {
        title: 'Sales Intern',
        internshipType: 'Onsite',
        domain: 'Sales & Business Development',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: '₹10,000 for 200 hours (Performance based)',
        duration: 'Approx. 200 hours',
        description: 'Support sales and business development activities.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Survey & Field Research',
        internshipType: 'Onsite',
        domain: 'Market Research',
        eligibleYears: 'All 4 Years',
        isPaid: false,
        stipend: 'None',
        duration: 'Approx. 200 hours',
        description: 'Conduct surveys and support market research activities.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Mentors',
        internshipType: 'Onsite',
        domain: 'Mentorship & Education',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: '₹200/session (Freelancing role after training)',
        duration: 'Approx. 200 hours',
        description: 'Provide mentorship and educational support.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Camera Operator',
        internshipType: 'Onsite',
        domain: 'Media & Video Production',
        eligibleYears: 'All 4 Years',
        isPaid: false,
        stipend: 'None',
        duration: 'Approx. 200 hours',
        description: 'Operate cameras and support video production activities.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Content Creator',
        internshipType: 'Onsite',
        domain: 'Content Creation',
        eligibleYears: 'All 4 Years',
        isPaid: false,
        stipend: 'None',
        duration: 'Approx. 200 hours',
        description: 'Create content for digital and educational platforms.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'AI Video Generator',
        internshipType: 'Onsite',
        domain: 'AI & Video Production',
        eligibleYears: 'All 4 Years',
        isPaid: true,
        stipend: '₹4,000 for 200 hours',
        duration: 'Approx. 200 hours',
        description: 'Create and support AI-generated video content.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      }
    ]
  },
  {
    name: 'Search India',
    websiteUrl: 'https://www.hrinternational.in/',
    logoUrl: '/logos/searchindia.png',
    tags: ['Recruitment', 'Human Resources', 'Consulting'],
    positions: [
      {
        title: 'Resource Executive',
        internshipType: 'Onsite',
        domain: 'Human Resources & Operations',
        eligibleYears: 'All 4 Years',
        isPaid: false,
        stipend: 'No',
        duration: '3 months',
        description: 'Support recruitment, resource management and HR operations.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      }
    ]
  },
  {
    name: 'LiveTech India',
    websiteUrl: 'https://livetechindia.com/',
    logoUrl: '/logos/livetech.png',
    tags: ['Software Training', 'IT Education', 'Technology'],
    positions: [
      {
        title: 'Agentic AI Intern',
        internshipType: 'Onsite',
        domain: 'Artificial Intelligence',
        eligibleYears: 'All 4 Years',
        isPaid: false,
        stipend: 'No',
        duration: '1 month',
        description: 'Work on applications and solutions involving agentic artificial intelligence.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'Digital Marketing Intern',
        internshipType: 'Onsite',
        domain: 'Digital Marketing',
        eligibleYears: 'All 4 Years',
        isPaid: false,
        stipend: 'No',
        duration: '1 month',
        description: 'Support digital marketing activities and campaigns.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      }
    ]
  },
  {
    name: 'THE xDEVS',
    websiteUrl: 'https://linkedin.com/company/the-xdevs',
    logoUrl: '/logos/xdevs.png',
    tags: ['Software Development', 'Artificial Intelligence', 'Cloud Technology'],
    positions: [
      {
        title: 'Full-Stack Developer Intern',
        internshipType: 'Remote / Work from home / Onsite / Hybrid',
        domain: 'Web Development / Full-Stack Development',
        eligibleYears: 'Students, fresh graduates & early-career candidates',
        isPaid: true,
        stipend: 'Performance-based',
        duration: '3–6 months',
        description: 'Build and deploy web applications and APIs across frontend, backend, databases and cloud services.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Business Development & Sales Intern',
        internshipType: 'Remote / Work from home / Onsite / Hybrid',
        domain: 'Business Development / Sales',
        eligibleYears: 'Students, fresh graduates & early-career candidates',
        isPaid: true,
        stipend: 'Performance-based',
        duration: '3–6 months',
        description: 'Research potential clients, generate and qualify leads, support outreach, prepare proposals and assist with client relationship management.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Social Media Intern',
        internshipType: 'Remote / Work from home / Onsite / Hybrid',
        domain: 'Social Media / Digital Marketing',
        eligibleYears: 'Students, fresh graduates & early-career candidates',
        isPaid: true,
        stipend: 'Performance-based',
        duration: '3–6 months',
        description: 'Plan and create social media content, manage online communities, track analytics and support the brand\'s digital presence.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Design & Video Editing Intern',
        internshipType: 'Remote / Work from home / Onsite / Hybrid',
        domain: 'Graphic Design / Video Editing',
        eligibleYears: 'Students, fresh graduates & early-career candidates',
        isPaid: true,
        stipend: 'Performance-based',
        duration: '3–6 months',
        description: 'Create social media creatives, brand materials, videos, motion graphics and UI/UX visuals.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'AdHive & Rundown Creative',
    websiteUrl: 'https://linkedin.com/company/adhive',
    logoUrl: '/logos/adhive.png',
    tags: ['Advertising', 'Digital Marketing', 'Social Media'],
    positions: [
      {
        title: 'Client Servicing Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Client Servicing / Account Management',
        eligibleYears: 'Students / Freshers',
        isPaid: true,
        stipend: '₹3,000 – ₹7,000/month',
        duration: '3 months',
        description: 'Communicate with clients, coordinate project deliverables with internal creative teams, manage project timelines, and track pending tasks.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Sales Executive Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Sales / Lead Generation',
        eligibleYears: 'Students / Freshers',
        isPaid: true,
        stipend: '₹3,000 – ₹7,000/month + Commission',
        duration: '3 months',
        description: 'Conduct daily Instagram outreach to potential clients, maintain outreach records, and follow up with interested leads.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Graphic Designer Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Graphic Design',
        eligibleYears: 'Students / Freshers',
        isPaid: true,
        stipend: '₹3,000 – ₹7,000/month',
        duration: '3 months',
        description: 'Create social media posts, carousels, reel covers, and marketing artwork following brand guidelines using Canva or Adobe Creative Suite.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Video Editor Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Video Editing',
        eligibleYears: 'Students / Freshers',
        isPaid: true,
        stipend: '₹3,000 – ₹7,000/month',
        duration: '3 months',
        description: 'Edit short-form content and Instagram Reels with transitions, subtitles, music, and sound design.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'Insiverse Media',
    websiteUrl: 'https://linkedin.com/company/insiverse-media',
    logoUrl: '/logos/insiverse.png',
    tags: ['Corporate Training', 'Executive Education', 'International Sales'],
    positions: [
      {
        title: 'Business Developer :: International Sales',
        internshipType: 'Onsite',
        domain: 'International Business Development',
        eligibleYears: 'Freshers / Experienced candidates',
        isPaid: true,
        stipend: 'Performance-based',
        duration: 'Full-time',
        description: 'B2B outbound international sales position focused on driving delegate enrollments and corporate training contracts in banking, risk, compliance, and leadership across overseas markets.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'Axentra',
    websiteUrl: 'https://linkedin.com/company/axentra',
    logoUrl: '/logos/axentra.png',
    tags: ['Web Development', 'Full-Stack Engineering', 'Software Solutions'],
    positions: [
      {
        title: 'React Developer – Fresher Program',
        internshipType: 'Onsite / Remote / Work from home',
        domain: 'Frontend Development',
        eligibleYears: 'Final-year students / Freshers (up to 1 year experience)',
        isPaid: true,
        stipend: '₹5,000/month + Conveyance Allowance up to ₹1,500/month',
        duration: 'Internship / Fresher Program',
        description: 'Develop responsive web interfaces using React.js, HTML5, CSS3, integrate REST APIs, and maintain clean component architecture.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Full Stack Developer – Fresher Program',
        internshipType: 'Onsite / Remote / Work from home',
        domain: 'Full Stack Development',
        eligibleYears: 'Freshers / Recent graduates',
        isPaid: true,
        stipend: '₹5,000/month + Conveyance Allowance up to ₹1,500/month',
        duration: 'Internship / Fresher Program',
        description: 'Build web application modules across frontend (React), backend (Python/FastAPI), and database (PostgreSQL) components.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'Kreare',
    websiteUrl: 'https://linkedin.com/company/kreare',
    logoUrl: '/logos/kreare.png',
    tags: ['Social Media Marketing', 'Creative Agency', 'Content Creation'],
    positions: [
      {
        title: 'Marketing & Social Media Intern',
        internshipType: 'Onsite',
        domain: 'Social Media Management',
        eligibleYears: 'Students / Freshers',
        isPaid: true,
        stipend: '₹8,000 – ₹15,000/month',
        duration: 'Internship',
        description: 'Manage Instagram and LinkedIn handles, generate creative post ideas, research trends, and assist with client social media campaigns and influencer outreach.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Business Development / Sales Intern',
        internshipType: 'Onsite',
        domain: 'Sales / Business Development',
        eligibleYears: 'Students / Freshers',
        isPaid: true,
        stipend: 'Performance-based',
        duration: 'Internship',
        description: 'Research prospective brand clients, execute lead-generation campaigns through social channels and email, and maintain client interaction databases.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'HNT FOODS',
    websiteUrl: 'https://www.hntfood.com/',
    logoUrl: '/logos/hntfoods.png',
    tags: ['Food & Beverages', 'Export & Import', 'International Trade'],
    positions: [
      {
        title: 'Export & Import Intern',
        internshipType: 'Onsite',
        domain: 'Export / Import / International Trade',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹3,000–₹5,000/month',
        duration: '3–6 months',
        description: 'Assist with export documentation, international market research, shipment coordination and export-related records.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'International Sales / Business Development Intern',
        internshipType: 'Onsite',
        domain: 'International Sales / Business Development',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹3,000–₹5,000/month',
        duration: '3–6 months',
        description: 'Research international buyers and distributors, generate B2B leads, and support sales outreach, quotations and CRM management.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'The Kaash Store',
    websiteUrl: '',
    logoUrl: '/logos/kaash.png',
    tags: ['Custom Merchandise', 'B2B Sales', 'Graphic Design'],
    positions: [
      {
        title: 'Merchandise Design & B2B Outreach Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Graphic Design & Business Development',
        eligibleYears: 'Not specified (Previous experience not mandatory)',
        isPaid: false,
        stipend: 'Performance-based incentives',
        duration: '3 months',
        description: 'Focuses on designing merchandise, preparing print artwork, creating client mockups and social media content, along with conducting cold calls, DMs, and outreach to identify business opportunities.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' },
      {
        title: 'Social Media & B2B Outreach Intern',
        internshipType: 'Remote / Work from home',
        domain: 'Social Media Marketing & Business Development',
        eligibleYears: 'Not specified (Previous experience not mandatory)',
        isPaid: false,
        stipend: 'Performance-based incentives',
        duration: '3 months',
        description: 'Responsible for generating short-form video content (Reels/Stories), managing content calendars, and driving lead generation through cold outreach across LinkedIn and direct messages.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'Beeyond',
    websiteUrl: 'https://www.beeyond.agency/',
    logoUrl: '/logos/beeyond.png',
    tags: ['IT & Tech', 'Motion Graphics', 'UI/UX Design'],
    positions: [
      {
        title: 'Video Editor',
        internshipType: 'Onsite',
        domain: 'Video Editing & Motion Design',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: 'CTC based on prior experience',
        duration: 'Full Time',
        description: 'Involves editing raw footage, creating motion graphics, audio refining, color grading, maintaining brand guidelines, and assisting with on-site shoots.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'Creatify',
    websiteUrl: 'https://creatify.ai/',
    logoUrl: '/logos/creatify.png',
    tags: ['Mechanical Engineering', 'Manufacturing', 'Industrial Engineering'],
    positions: [
      {
        title: 'Engineering Intern (Mechanical) / Mechanical Intern',
        internshipType: 'Onsite',
        domain: 'Mechanical Engineering',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: 'Up to ₹5,000/month',
        duration: '1 month or 6 months',
        description: 'Offline, in-office mechanical engineering internship with positions available in Thane and Vasai.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'GDA Games',
    websiteUrl: '',
    logoUrl: '/logos/gda.png',
    tags: ['Gaming', 'Skill Development', 'Real-World Projects'],
    positions: [
      {
        title: 'Flexible / Multi-Role Intern',
        internshipType: 'Onsite',
        domain: 'Varied (Decided based on candidate skills, interests, and academic background)',
        eligibleYears: 'College students and freshers',
        isPaid: false,
        stipend: 'Not specified',
        duration: 'Not specified',
        description: 'A flexible opportunity focused on gaining real-world experience and working on practical projects. Exact responsibilities are tailored to the candidate. Prior knowledge isn\'t strictly required; the focus is on a willingness to learn, take responsibility, solve problems, and contribute.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'GradGuide (Your Study Abroad Mentor by Computrain)',
    websiteUrl: 'https://www.gradguide.in/',
    logoUrl: '/logos/gradguide.png',
    tags: ['EdTech / Study Abroad', 'Software Engineering'],
    positions: [
      {
        title: 'Software Engineering Intern',
        internshipType: 'Onsite',
        domain: 'Engineering / Full-Stack Development',
        eligibleYears: 'Students or freshers (pursuing or recently completed a degree in Computer Science, IT, or related fields)',
        isPaid: false,
        stipend: 'Not specified',
        duration: '6 Months',
        description: 'This is an on-site, hands-on role contributing to production-grade applications. Responsibilities include designing backend APIs, working with PostgreSQL and Drizzle ORM, building full-stack features using Next.js/React, and exploring AI/LLM capabilities.'
      , jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing' }
    ]
  },
  {
    name: 'Choira Musictech Pvt. Ltd.',
    websiteUrl: 'https://www.choira.io',
    logoUrl: '/logos/choira.png',
    tags: ['Music Technology', 'AI', 'Hardware/Embedded Systems'],
    positions: [
      {
        title: 'Growth & Business Development Intern',
        internshipType: 'Onsite',
        domain: 'Business Development / Growth / Sales',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000–₹15,000 fixed + ₹2,000–₹10,000 performance-based incentives',
        duration: '3–6 months',
        description: 'Full-time (On-site / Hybrid) role to support growth strategies, build client relationships, assist with partnership negotiations, identify opportunities, and work with CRM/AI tools.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'Hardware Engineering Intern',
        internshipType: 'Onsite',
        domain: 'Hardware Engineering / Embedded Systems / Audio Electronics / R&D',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000–₹15,000 fixed + ₹2,000–₹10,000 performance-based incentives',
        duration: '3–6 months',
        description: 'Based in Mumbai / Nagpur. Involves working on hardware architecture, circuits, prototypes, microcontrollers (Raspberry Pi/ESP32/STM32), powermanagement, audio I/O, MIDI, DSP, PCB debugging, and soldering.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      },
      {
        title: 'Customer Support Intern',
        internshipType: 'Onsite',
        domain: 'Customer Support / Customer Experience',
        eligibleYears: 'Not specified',
        isPaid: true,
        stipend: '₹6,000–₹15,000 fixed + ₹2,000–₹10,000 performance-based incentives',
        duration: '3 months',
        description: 'Based in Nagpur. Requires responding to customer inquiries via email/phone/chat, resolving product issues, documenting CRM interactions, and contributing to knowledge-base articles.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
      }
    ]
  },
  {
    name: 'CAD CAM GALAXY',
    websiteUrl: 'https://cadcamgalaxy.com/',
    logoUrl: '/logos/cadcamgalaxy.png',
    tags: ['CAD/CAM Software', 'Engineering Training', 'Manufacturing Services'],
    positions: [
      {
        title: 'Cad cam Software application engineer',
        internshipType: 'Onsite',
        domain: 'CAD/CAM / Software Application',
        eligibleYears: '1, 2, 3, 4',
        isPaid: true,
        stipend: '₹12,000 - ₹15,000',
        duration: '6 months',
        description: 'This is an onsite internship role. The interview will be conducted online. The company expects to select 1 candidate for the position.',
        jobDescriptionPdfUrl: 'https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20?usp=sharing'
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
            internshipType: (pos as any).internshipType || null,
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
