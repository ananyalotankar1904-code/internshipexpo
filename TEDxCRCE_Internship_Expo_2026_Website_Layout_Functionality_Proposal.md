**TEDxCRCE INTERNSHIP EXPO 2026**

**Website Layout & Functionality Proposal**

_Event Date: 3 October 2026 | Venue: FCRCE, Bandra, Mumbai_

# 1\. Project Objective

The TEDxCRCE Internship Expo 2026 website will primarily function as the official digital presence of the event and as a centralized registration, internship application, data collection and resume management system for FCRCE students.

- Provide essential information about the Internship Expo.
- Allow FCRCE students to register for the event.
- Display participating companies and available internship positions.
- Collect and securely store student information and resumes.
- Allow each student to apply for a maximum of 3 internship positions.
- Automatically enforce internship eligibility requirements, especially student year.
- Organize relevant applications/resumes for participating companies through designated Drive access.

# 2\. Overall Website Structure

The website will have two primary experiences:

- Public Website
- Home
- About Internship Expo
- Event Details
- Companies
- Sponsors
- Contact
- Register
- Registration / Application Page
- Student Details
- Resume Upload
- Available Positions
- Eligibility Check
- Selection of up to 3 Positions
- Application Summary
- Submission & Confirmation

# 3\. Homepage

The homepage should be short, visually strong and minimal. Its primary purpose is to introduce the event and direct students toward registration.

## 3.1 Hero

- TEDxCRCE Internship Expo 2026
- 3 October 2026
- FCRCE, Bandra, Mumbai
- Primary CTA: REGISTER

## 3.2 About

A short introduction explaining that the Expo connects FCRCE students with organizations and internship opportunities.

## 3.3 Companies

- Expected participating companies: approximately 20–30.
- Display company logos, with names where appropriate.
- Clicking/tapping a company should redirect to its official website.

## 3.4 Sponsors

- Display sponsor logos/names and relevant links where required.

## 3.5 Additional Lightweight Information

- Event date and venue
- Contact information
- Brochure link
- Event schedule link/redirect if finalized

# 4\. Registration / Application Page

The registration page is the core of the website and should contain the main student application workflow.

## 4.1 Student Information

- Full Name
- College (FCRCE)
- Branch / Class
- Year of Study
- Email Address
- Phone / WhatsApp Number

## 4.2 Resume Upload

- One resume per student.
- PDF format only.
- Maximum file size: approximately 30 MB.
- Resume should be replaceable before final submission if required.

# 5\. Internship Opportunities

Companies may offer multiple internship positions. Positions should be represented individually.

- Company logo and name
- Position / role
- Domain
- Eligible student year(s)
- Duration / tenure
- Paid or unpaid
- Stipend, if applicable
- Company email address
- Company phone number / contact
- Other requirements, if applicable

# 6\. Eligibility System

Eligibility is a mandatory functional requirement. Each position can specify eligible student year(s).

Example: If a position is restricted to 4th-year students, 2nd- and 3rd-year students must not be allowed to apply.

- Student year is compared against the position's eligibility requirements.
- Eligible students see an active APPLY action.
- Ineligible students see NOT ELIGIBLE and cannot submit that application.
- Ineligible positions may remain visible so students understand the available opportunities.

# 7\. Maximum Application Rule

Each student is permitted a maximum of 3 applications in total.

- Application counter should display 0/3, 1/3, 2/3 or 3/3.
- Once 3 applications are selected/submitted, further Apply actions must be disabled.
- Duplicate applications to the same position must be prevented.
- Multiple positions from the same company may be selected unless the team later changes this rule.

# 8\. Application Confirmation

Before final submission, students should see a concise summary containing:

- Student details
- Uploaded resume
- Selected companies and positions
- Application count (e.g. 3/3)
- Final SUBMIT APPLICATION action

After submission, show a clear confirmation that the applications were successfully recorded.

# 9\. Resume & Company Access

Student resumes should be organized according to the companies to which the student applied.

- Technical managers and designated seniors should have access to the collected data.
- A company should only receive/access applications and resumes relevant to positions offered by that company.
- The preferred implementation is company-specific Google Drive organization/access, subject to final technical approval.
- Students applying to multiple companies should have their application/resume associated with each relevant company.

# 10\. Administration & Data Management

The Internship Expo team and Technical team will maintain company and position information.

- Add/edit participating companies.
- Add/edit multiple positions under a company.
- Set eligibility requirements.
- Set duration, payment status and other position details.
- Access student registration data.
- Access application data and relevant resumes.

Companies will not require individual accounts or dashboards in the initial version.

# 11\. Deadlines & Closed Applications

- Use one common application deadline for the Expo.
- After the deadline, applications should be closed.
- Closed opportunities can remain visible with a CLOSED state.
- No individual company deadlines are currently required.

# 12\. Event Information

The website should remain heavily internship-focused. Supporting event information may include:

- Event date
- Venue: Fr. Conceicao Rodrigues College of Engineering (FCRCE), Bandra
- Basic event schedule or schedule redirect
- Official brochure redirect
- Sponsors
- Contact information

# 13\. Proposed Student Flow

**HOME**

↓

Brief Internship Expo Overview

↓

**REGISTER**

↓

REGISTRATION PAGE

↓

Student Details + Resume Upload

↓

Browse Internship Positions

↓

Eligibility Check

↓

Select up to 3 Positions

↓

Application Summary

↓

**SUBMIT**

↓

Application Stored & Organized for Relevant Companies

↓

**Confirmation**

# 14\. Mobile Requirements

- Registration and resume upload must be mobile-friendly.
- Application counter must remain clearly visible.
- Position selection must be easy to use on touch screens.
- No horizontal overflow.
- Buttons and form fields must have adequate tap targets.
- The public homepage should remain lightweight and quick to navigate.

# 15\. Out of Scope for Initial Version

- Company login/dashboard
- Student social profiles
- Chat system
- Individual company deadlines
- Countdown timer
- Complex event scheduling system
- Multiple resumes per student
- Full job-portal functionality
- Separate application pages for each company

# 16\. Core Requirements Summary

| Feature                        | Requirement            |
| ------------------------------ | ---------------------- |
| Event homepage                 | Required               |
| Event date & venue             | Required               |
| About Expo                     | Required               |
| Company logos & links          | Required               |
| Sponsors                       | Required               |
| Registration page              | Core                   |
| Student data collection        | Core                   |
| Resume upload                  | Core — PDF, ~30 MB max |
| Internship positions           | Core                   |
| Eligibility by year            | Core                   |
| Paid/unpaid & duration         | Required               |
| Company contact details        | Required               |
| Maximum 3 applications         | Core                   |
| Duplicate prevention           | Required               |
| Application confirmation       | Required               |
| Company-specific resume access | Core                   |
| Technical/Admin access         | Core                   |
| Company login                  | Not required initially |
| Countdown                      | Not required           |

# 17\. Pending Technical Decision

Final confirmation is required on how company-specific Google Drive access will be implemented.

- Option A: Separate Google Drive folder/structure for each company, with relevant applications/resumes organized there.
- Option B: Website-managed storage with controlled/generated access links.
- Recommended for discussion: Option A, subject to the technical team's access-control and automation requirements.

# 18\. Proposed One-Line Description for Approval

A minimal Internship Expo website for FCRCE students that provides event information and enables students to register, upload one resume, explore eligible internship opportunities and apply to a maximum of three positions, while organizing relevant application data for participating companies.