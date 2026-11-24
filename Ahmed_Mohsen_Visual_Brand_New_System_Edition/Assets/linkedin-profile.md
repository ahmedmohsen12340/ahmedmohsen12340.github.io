
# LinkedIn Profile Data — Ahmed Mohsen

**Source:** https://www.linkedin.com/in/ahmedmohsen12340/  
**Extracted:** 2026-11-24  
**Access level:** Public, signed-out profile view. Full About text, detailed experience, contact information, and some full lists are gated behind LinkedIn sign-in and are not included beyond what was publicly visible.

---

## Profile snapshot

| Field | Value |
|---|---|
| Name | Ahmed Mohsen |
| Location | Cairo, Cairo, Egypt |
| Current company | Xceed |
| Education | Information Technology Institute (ITI) |
| Followers | 3K |
| Connections | 500+ |
| Recommendations received | 3 people have recommended Ahmed |
| Profile photo | https://media.licdn.com/dms/image/v2/D4E03AQF8UCeaa_2iQw/profile-displayphoto-scale_200_200/B4EaIAEuCcKgAc-/0/1795297571398?e=2147483647&v=beta&t=7u_c88l45zTvONK_WO3nB1eA1o1lck6w_omCC3nljJU |
| Contact info | Not publicly visible without LinkedIn sign-in |

### Professional focus

Software Engineer specializing in .NET development and Robotic Process Automation (RPA), with experience building scalable backend systems, internal APIs, automations, database migrations, and modernized web applications.

---

## About

Public preview only:

> Software Engineer specializing in .NET development and RPA, building scalable backend…

LinkedIn hides the remainder of the About section from signed-out visitors.

---

## Experience & education (public preview)

LinkedIn masks role titles and some organization names for signed-out visitors. The following entries were visible from public cards and organization logos:

| Organization | Publicly visible detail |
|---|---|
| Xceed | Current organization shown in the profile header. Role and dates are hidden behind sign-in. |
| Raya Integration | Listed in Experience & Education; title and dates are hidden. |
| Other | Listed in Experience & Education; title and dates are hidden. |
| Information Technology Institute (ITI) | Listed with `2023 - 2024`; title is hidden. |
| Cairo University | Listed with `2014 - 2019`; title is hidden. |

---

## Articles by Ahmed

1. [Configuration Sources in ASP.NET Core](https://ae.linkedin.com/pulse/configuration-sources-aspnet-core-ahmed-mohsen-nhycf) — Sep 16, 2024  
   Snippet: حنتكلم النهاردة علي المصادر المختلفة اللي ممكن اجيب منها ال Configuration في ال Asp.net core وهما كالتالي حسب اولوية…

2. [IEnumerable vs IQueryable vs ICollection vs IList vs IReadOnlyList vs List](https://ae.linkedin.com/pulse/ienumerable-vs-iqueryable-icollection-ilist-list-ahmed-mohsen-h2bmf) — May 15, 2024  
   Snippet: انا عايز النهاردة اتكلم عن ال IEnumerable vs IQueryable vs ICollection vs IList vs IReadOnlyList vs List و اني افضل من…

---

## Licenses & certifications

| Certification | Issuer | Issued | Expires | Credential ID |
|---|---|---|---|---|
| Asp.Net Core 9 (.NET 9) \| True Ultimate Guide | Udemy | May 2025 | — | `UC-ec140a5f-6b40-4955-87a1-1eae6342baf0` |
| Computer Network Fundamentals | Information Technology Institute (ITI) | Apr 2024 | — | — |
| Responsive Web Design | freeCodeCamp | Apr 2022 | — | `ahmed_mohsen-rwd` |
| C# in 3 Hours: C# Programming Tutorial for Beginners | Udemy | Oct 2019 | — | — |
| UiPath Certified Professional Specialized AI Professional Certification | UiPath | Dec 2024 | Dec 2027 | `126436561` |
| UiPath Certified Professional Automation Developer Professional Certification | UiPath | Oct 2024 | Oct 2027 | `118990747` |
| UiPath Academy Automation Developer Specialized AI Professional Training | UiPath | Dec 2024 | Dec 2026 | `126441842` |
| UiPath Academy Specialized AI Associate Training | UiPath | Nov 2024 | Nov 2026 | `124710873` |
| UiPath Academy Automation Developer Associate Training | UiPath | Mar 2024 | Mar 2026 | `98125546` |
| UiPath Academy Automation Developer Professional Training | UiPath | Mar 2024 | Mar 2026 | `98000382` |

LinkedIn also shows a “Join now to see all certifications” gate, so the list may not be complete.

---

## Projects

### Notification Management NuGet Package (Xceed)

**Nov 2025 – Jan 2026**

- Developed a reusable NuGet package to handle saving user notifications in the database with full lifecycle management.
- Implemented offline notification persistence to ensure users receive notifications upon reconnecting to the application.
- Enabled real-time and deferred notification delivery with support for sending notifications to individual users and groups.
- Designed group management features, including creating groups and dynamically adding or removing users from groups.

### .NET & Front-End Modernization (Xceed)

**Jun 2025 – Nov 2025**

- Led multiple modernization initiatives to upgrade .NET Core applications to .NET 9 and legacy .NET Framework projects to version 4.8.1.
- Refactored and optimized application code to ensure compatibility, stability, and improved performance after upgrades.
- Updated front-end libraries including jQuery and Bootstrap to supported versions, improving UI consistency and security.
- Resolved breaking changes and deprecated APIs while maintaining existing business functionality.
- Improved overall maintainability and readiness for future enhancements across upgraded systems.

### Always Encrypted Data Protection & EF Core Migration Project (Xceed)

**May 2025 – Jun 2025**

- Implemented SQL Server Always Encrypted to protect customers’ sensitive data at rest and in transit.
- Encrypted critical customer fields while maintaining secure application-level access using deterministic encryption.
- Refactored complex SQL stored procedures into Entity Framework Core code while preserving business logic and performance.
- Improved maintainability and security by centralizing data access logic within the application layer.

### Automated Active Directory Password Reset

**Mar 2025 – Apr 2025**

Developed a UiPath automation to handle secure password resets in Active Directory (AD) based on user requests received via email, ensuring compliance and user verification through OTP.

Key features:

- Created PDD and SSD documents based on client meetings to define and design the automation process.
- Triggered by emails with a specific subject and username in the body.
- Validated the username in AD and checked for an associated phone number.
- If invalid or missing data, raised a BusinessRuleException and sent a corresponding notification email.
- Sent an OTP to the user’s registered phone number and prompted a reply email with the OTP.
- Listened for incoming OTP response; upon successful verification, generated a new password.
- Reset the user’s password in AD and sent the new password via SMS to the user.

### Automated Active Directory User Creation

**Mar 2025 – Apr 2025**

Developed a UiPath automation to streamline the process of creating Active Directory (AD) users based on incoming email requests, integrating with Exchange and SAP systems.

Key features:

- Created PDD and SSD documents based on client meetings to define and design the automation process.
- Triggered by emails with a specific subject line to initiate the process.
- Extracted user details and ticket number from tables in the email body.
- Generated the expected username and checked for existing AD entries.
- Created the user in AD if not already present; otherwise, raised a BusinessRuleException and notified HR via email.
- Created a mailbox in Exchange for the new user.
- Closed the corresponding ticket on the SAP website.

### Custom QR Code Generator

**Mar 2025 – Mar 2025**

Developed a Windows Forms desktop application for generating QR codes with customizable design options, allowing users to personalize output and control file storage.

Key features:

- Accepts input text or URLs to encode into QR codes.
- Supports custom hexadecimal colors and embedded icons through configuration settings.
- Provides a user interface to browse and select the output folder.
- Generates and saves styled QR codes to the selected location.

### Meraki Wi-Fi Access & Internal User Management System

**Nov 2024 – Mar 2025**

#### Internal Service API for Organization Infrastructure

Developed a secure internal API hosted on the organization's internal server to manage services related to Active Directory, email, and database operations.

Key features:

- Implemented RESTful endpoints for full CRUD operations on the user table.
- Provided an email relay service via API for automated and on-demand communications.
- Enabled authentication against Active Directory credentials through secure API endpoints.
- Supported backend integration with external-facing applications hosted in the DMZ.

#### DMZ Splash Page for Meraki Wi-Fi Access

Designed and deployed an MVC web application hosted on a DMZ server to safely interface with Meraki services and manage internet-based user access.

Key features:

- Integrated with Meraki to serve as a splash page for capturing user information and provisioning Wi-Fi access.
- For guests: collected name, email, phone number, IP address, and MAC address; sent a welcome email via the internal API and assigned Meraki guest group policy.
- For staff: authenticated using AD credentials via the internal API, collected IP and MAC addresses, and assigned Meraki staff group policy.
- Relied on secure communication with the internal API to save all user data.

### Network-Based Document Scanning Solution

**Nov 2024 – Feb 2025**

Built a networked scanning solution consisting of a Windows Forms client and a Windows Service server, enabling efficient communication and document scanning over a TCP connection.

Key features:

- Developed a TCP-based server (Windows Service) to receive scan requests and manage scanner operations.
- Implemented a Windows Forms client to send scan commands and preview scanned documents.
- Created custom libraries for Olivetti, IDEPass, and AHR scanners to handle device-specific scanning.
- Enabled real-time document scanning and transmission of scanned images and messages back to the client for review and optional saving.

### Real-Time Database Change Notification System

**Jan 2025 – Jan 2025**

- Designed a SQL Server trigger to detect column insertions in a Suprema database and call an API for processing.
- Created an endpoint and used SignalR for real-time updates to clients.
- Developed a custom view to display changes dynamically in the browser.

### Automated Document Processing and Form Filling System

**Nov 2024 – Jan 2025**

Developed an end-to-end automation solution using UiPath to streamline document processing and data entry workflows. The system automates file retrieval, classification, data extraction, and form filling, enhancing efficiency and accuracy.

Key features:

- UiPath Document Understanding Dispatcher retrieves files from emails or designated folders.
- Classifies documents and extracts structured data with precision.
- Sends processed results to clients via email.
- UiPath Performer uses extracted data to automate form filling on web platforms.
- Ensures reliable and efficient data entry operations.

### Automated ID and Medical Card Processing System

**Oct 2024 – Nov 2024**

Developed a Windows Forms application to automate the process of scanning IDs and medical cards, extracting relevant data, and integrating it into the company’s workflow. This system streamlined data entry, reduced manual errors, and improved efficiency by leveraging advanced technologies such as Azure OCR, ChatGPT API, ML.NET, and Selenium.

Key features:

- Created a library to integrate with the scanner (IDE Pass), enabling seamless communication and data acquisition.
- Utilized the library within the application to efficiently handle scanning operations for IDs and medical cards.
- Integrated with Azure OCR to convert scanned images into text for further processing.
- Used ChatGPT API to analyze the extracted text and identify specific data fields, such as names, dates, and policy numbers.
- Implemented machine learning models using ML.NET to classify medical cards based on the issuing company.
- Leveraged the classification results to populate relevant fields in the company’s forms dynamically.
- Automated the process of filling forms for a Windows application used by the company using Selenium (WinAppDriver).

Personal contributions:

- Designed and implemented the classification system using ML.NET to categorize medical cards based on their issuing company.
- Developed the Selenium-based automation to fill out forms in the company’s Windows application.
- Created a custom library to integrate with the scanner hardware, ensuring smooth and reliable data input for the system.

### Digital Signage

**Sep 2024 – Oct 2024**

Designed and implemented a real-time digital signage system integrated with the SEDCO Queueing system.

- Monitored changes in an XML file containing counters and slip numbers.
- Utilized SignalR to broadcast instant updates to connected clients, including web and Android platforms.
- Developed a main screen that integrates real-time currency prices (retrieved via API calls), the last five changed counters (received via SignalR), and promotional video content.
- Designed and implemented the entire frontend interface for the application.

### E-commerce

**Aug 2022 – Sep 2023**

Developed an advanced E-commerce platform utilizing modern technologies to provide a seamless and secure user experience.

Backend development:

- Built a high-performance, secure Web API leveraging the latest features of ASP.NET Core 6.
- Implemented robust authentication and authorization mechanisms.
- Designed scalable, maintainable RESTful APIs for efficient data retrieval and manipulation.
- Ensured high code quality with unit and integration testing, reducing bugs and improving reliability.

Frontend development:

- Developed a dynamic and responsive user interface to enhance user engagement.
- Implemented reusable components and services to maintain consistency and streamline development.
- Ensured cross-browser compatibility and optimized performance for a smooth user experience.
- Employed Angular best practices to maintain a clean and maintainable codebase.

---

## Recommendations received

### Mahmoud ElFeky

> I had the pleasure of working closely with Ahmed Mohsen at Raya Information Technology, where we collaborated on several projects within the digital transformation department. Ahmed consistently demonstrated strong programming skills, a solid understanding of system integration, and a proactive attitude toward problem-solving. His ability to communicate effectively and collaborate with both technical and non-technical teams made him a key contributor to our project's success. Ahmed’s dedication, attention to detail, and ability to deliver high-quality work under tight deadlines made working with him both productive and enjoyable. I highly recommend Ahmed for any role requiring technical expertise, teamwork, and a results-driven mindset.

### Ahmed LShubaky

> I’ve had the pleasure of working closely with Ahmed, and I can confidently say he is one of the most talented and dedicated software engineers I’ve worked with. He’s highly respectful, business-oriented, and always eager to learn and grow. Ahmed consistently delivers clean, efficient, and scalable solutions, always keeping the bigger picture in mind. He takes full ownership of his work, collaborates effectively, and adds real value to every project he’s involved in. He’ll be a great asset to any team, and I wish him continued success in his next role.

---

## Recent public activity

### Nov 21, 2026 — AI Coder course

Happy to share that I've completed AI Coder: Complete Claude Code & Coding Agents Course.  
Special thanks to Ed Donner for the excellent course and valuable insights.  
#ClaudeCode #AI #SoftwareEngineering #ContinuousLearning

https://www.linkedin.com/posts/ahmedmohsen12340_claudecode-ai-softwareengineering-activity-7530020437091794945-9fva

### Feb 10, 2026 — Microsoft Azure for .NET Developers course

I’m happy to share that I’ve successfully completed the Microsoft Azure for .NET Developers course on Udemy.  
This was a great opportunity to strengthen my understanding of Azure services and cloud-based development for .NET applications. Looking forward to applying these skills in upcoming projects and continuing my learning journey.

https://www.linkedin.com/posts/ahmedmohsen12340_im-happy-to-share-that-ive-successfully-activity-7426867259295526912-hel4

### Aug 16, 2025 — TaQat freelancing support

في مؤسسة اسمها TaQat معمولة لدعم ال Freelancing اللي في غزة شبة بشكل كبير مواقع زي Upwork او مستقل.  
في اللي عايز يطلب شغل Freelancing ممكن يخش يشوف الخدمات اللي بيقدموها هما اولي حاليا

https://ae.linkedin.com/posts/ahmedmohsen12340_%D8%A7%D9%84%D8%B4-%D8%AE%D8%A7%D9%86%D8%A9-%D9%85%D9%86-%D9%A7%D9%A0-%D8%A5%D9%84%D9%89-%D9%A7%D9%A0%D9%A0-%D8%AD%D9%83%D8%A7%D9%8A%D8%A9-%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-activity-7362582575057428480-ef9u

### May 3, 2025 — ASP.NET Core 9 course

I'm excited to share that I’ve completed the "ASP.NET Core 9 (.NET 9) | True Ultimate Guide" course on Udemy.  
This course offered comprehensive training on building modern web applications using ASP.NET Core 9 and .NET 9, covering key areas such as API development, dependency injection, Entity Framework Core, authentication, and deployment strategies.  
It was a valuable experience that strengthened my skills in developing scalable and maintainable web solutions using the latest Microsoft technologies.

https://www.linkedin.com/posts/ahmedmohsen12340_im-excited-to-share-that-ive-completed-activity-7324544789582888960-le-f

### Dec 31, 2024 — Comment on C# mapping approaches

I found this method more appealing.

https://www.linkedin.com/posts/ahmedmohsen12340_i-found-this-method-more-appealing-activity-7279886873630568449-ez9n

### Dec 20, 2024 — UiPath Specialized AI Professional certification

{وَلَقَدْ مَنَنَّا عَلَيْكَ مَرَّةً أُخْرَىٰ}  
الحمد لله حمدا كثيرا مباركا فيه

Thrilled to announce that I have earned the UiPath Certified Professional Specialized AI Professional Certification! This achievement reflects my commitment to advancing in the field of intelligent automation and leveraging AI to deliver impactful solutions. Grateful for the journey and looking forward to applying these skills to future challenges.

#UiPathCertified #AIProfessional #AutomationExcellence #IntelligentAutomation #AI #ProfessionalGrowth

https://www.linkedin.com/posts/ahmedmohsen12340_uipathcertified-aiprofessional-automationexcellence-activity-7275833730772946944-vtTL
