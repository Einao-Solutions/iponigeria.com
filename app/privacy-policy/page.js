import React from "react";

export const metadata = {
  title: "Privacy Policy | IPO Nigeria",
  description:
    "Privacy Policy for the Intellectual Property Office, Nigeria (IPO Nigeria) website and Portal.",
};

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl lg:text-3xl font-semibold text-[#166534] mt-10 mb-4">
    {children}
  </h2>
);

const SubHeading = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>
);

const Paragraph = ({ children }) => (
  <p className="text-gray-800 leading-relaxed mb-4">{children}</p>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-4">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const PrivacyPolicyPage = () => {
  return (
    <section className="py-16">
      <div className="w-5/6 lg:w-11/12 mx-auto max-w-5xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#166534] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Effective Date:</span> 18 May, 2025
        </p>
        <p className="text-gray-600 mb-8">
          <span className="font-semibold">Last Updated:</span> 18 May, 2025
        </p>

        <Paragraph>
          Welcome to the Intellectual Property Office, Nigeria (IPO Nigeria)
          Website, and thank you for reviewing our (“the Office”, “we”, or
          “us”, “IPO Nigeria”) privacy policy.
        </Paragraph>
        <Paragraph>
          This Privacy Policy explains how personal information and other data
          are collected, used, stored, processed, disclosed, and protected when
          users access or use the website, Portal and its associated services.
        </Paragraph>

        <SectionHeading>IPO Nigeria Website</SectionHeading>
        <Paragraph>
          We collect no personal information about you when you visit our
          website unless you choose to provide that information to us.
          Submitting personal information is voluntary. When you voluntarily
          submit information, it constitutes your consent to the use of the
          information for the purposes stated at the time of collection. See
          Nigeria Data Protection Act (NDPA) 2023 for more information on your
          rights under the Data Protection Act. Except for the purposes
          described below, no other attempts are made to identify individual
          users while on the IPO Nigeria website.
        </Paragraph>

        <SubHeading>Information Collected and Stored Automatically</SubHeading>
        <Paragraph>
          IPO Nigeria web servers automatically collect and save the default
          information customarily logged by web server software. Specifically,
          the date and time, the originating IP address, the object requested,
          and the completion status of the request is collected and saved for
          each http request received by the server.
        </Paragraph>
        <Paragraph>
          On a monthly or more-frequent basis, we review this information to
          determine the traffic through the servers in hits, the number of
          pages served, and the level of demand for pages of interest. We may
          also analyse accesses to pages to determine problem areas of the
          website or to improve overall service. Information is retained as
          long as necessary to perform useful analysis.
        </Paragraph>
        <Paragraph>
          For site security purposes and to ensure that IPO Nigeria web
          services remain available to all users, IPO Nigeria monitors network
          traffic to identify unauthorized attempts to upload or change
          information or otherwise cause damage. Unauthorized attempts to
          upload information or change information on this service are strictly
          prohibited and subject to prosecution under the Cybercrimes
          (Prohibition, Prevention, Etc) Act, 2015. Information also may be
          used for authorized law enforcement investigations.
        </Paragraph>

        <SectionHeading>IPO Nigeria Portal</SectionHeading>
        <Paragraph>
          The IPO Nigeria Portal (“Portal”) is committed to protecting user
          privacy and ensuring that all personal data is handled securely,
          responsibly, and in accordance with applicable data protection laws
          and regulations, including the:
        </Paragraph>
        <List
          items={[
            "Nigeria Data Protection Act (NDPA)",
            "Nigeria Data Protection Regulation (NDPR)",
            "Other applicable governmental and regulatory frameworks",
          ]}
        />
        <Paragraph>
          By accessing or using the Portal, users acknowledge that they have
          read, understood, and agreed to this Privacy Policy.
        </Paragraph>

        <SubHeading>Scope of This Policy</SubHeading>
        <Paragraph>This Privacy Policy applies to:</Paragraph>
        <List
          items={[
            "Applicants",
            "Agents",
            "Representatives",
            "Staff users",
            "Support users",
            "Visitors accessing the Portal",
            "Any individual or organization using services provided through the Portal",
          ]}
        />
        <Paragraph>
          This Policy applies to all services available through the Portal,
          including but not limited to:
        </Paragraph>
        <List
          items={[
            "Trademark services",
            "Patent services",
            "Design services",
            "Journals",
            "Availability searches",
            "Online payments",
            "Support and ticketing services",
            "Dashboard notifications and communications",
          ]}
        />

        <SubHeading>Information We Collect</SubHeading>
        <Paragraph>
          The Portal may collect and process the following categories of
          information:
        </Paragraph>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          1. Personal Information
        </h4>
        <Paragraph>Including but not limited to:</Paragraph>
        <List
          items={[
            "Full name",
            "Email address",
            "Phone number",
            "Residential or business address",
            "Nationality",
            "Identification information",
            "Organization or company details",
            "User role or account type",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          2. Account and Authentication Information
        </h4>
        <Paragraph>Including:</Paragraph>
        <List
          items={[
            "Username",
            "Password credentials (encrypted)",
            "Login activity",
            "Authentication logs",
            "Session information",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          3. Application and Filing Information
        </h4>
        <Paragraph>Including:</Paragraph>
        <List
          items={[
            "File numbers",
            "Trademark, Patent, and Design application data",
            "Uploaded documents",
            "Supporting evidence",
            "Payment references",
            "Application history and status updates",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          4. Payment Information
        </h4>
        <Paragraph>The Portal may process:</Paragraph>
        <List
          items={[
            "Payment references",
            "Transaction identifiers",
            "Payment status information",
          ]}
        />
        <Paragraph>
          The Portal does not store sensitive banking or card details directly
          unless explicitly stated through approved payment integrations.
        </Paragraph>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          5. Technical and Usage Information
        </h4>
        <Paragraph>Including:</Paragraph>
        <List
          items={[
            "IP address",
            "Browser type",
            "Device information",
            "Operating system",
            "Access logs",
            "Date/time of access",
            "Usage activity within the Portal",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          6. Support and Communication Data
        </h4>
        <Paragraph>Including:</Paragraph>
        <List
          items={[
            "Support tickets",
            "Chat communications",
            "Uploaded attachments",
            "Notifications",
            "Communication history with support teams",
          ]}
        />

        <SubHeading>How Information is Collected</SubHeading>
        <Paragraph>Information may be collected through:</Paragraph>
        <List
          items={[
            "User registration forms",
            "Online application submissions",
            "Support interactions",
            "Payment processes",
            "File uploads",
            "Cookies and session technologies",
            "Automated system logs",
            "User dashboard activities",
          ]}
        />

        <SubHeading>Purpose of Data Processing</SubHeading>
        <Paragraph>
          Information collected through the Portal may be used for the
          following purposes:
        </Paragraph>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          1. Service Delivery
        </h4>
        <Paragraph>To:</Paragraph>
        <List
          items={[
            "Process intellectual property applications",
            "Manage renewals, oppositions, appeals, and recordals",
            "Verify user identity",
            "Provide dashboard access and services",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          2. Communication
        </h4>
        <Paragraph>To:</Paragraph>
        <List
          items={[
            "Send application updates",
            "Respond to support requests",
            "Provide notifications and alerts",
            "Communicate system updates or maintenance notices",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          3. Security and Fraud Prevention
        </h4>
        <Paragraph>To:</Paragraph>
        <List
          items={[
            "Protect user accounts",
            "Monitor unauthorized access attempts",
            "Detect fraudulent or suspicious activity",
            "Maintain system integrity and security",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          4. System Administration and Improvement
        </h4>
        <Paragraph>To:</Paragraph>
        <List
          items={[
            "Improve user experience",
            "Optimize portal performance",
            "Monitor service usage",
            "Conduct analytics and reporting",
          ]}
        />

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">
          5. Legal and Regulatory Compliance
        </h4>
        <Paragraph>To:</Paragraph>
        <List
          items={[
            "Comply with applicable laws and regulations",
            "Support lawful investigations or governmental directives",
            "Maintain required institutional records",
          ]}
        />

        <SubHeading>Legal Basis for Processing</SubHeading>
        <Paragraph>
          The Portal processes personal information based on:
        </Paragraph>
        <List
          items={[
            "User consent",
            "Performance of public or institutional functions",
            "Compliance with legal obligations",
            "Legitimate institutional and operational interests",
          ]}
        />

        <SubHeading>Data Sharing and Disclosure</SubHeading>
        <Paragraph>Information may be shared:</Paragraph>
        <List
          items={[
            "With authorized IPO Nigeria personnel",
            "With authorized technical and support service providers",
            "With payment processing partners",
            "Where required by law, regulation, court order, or governmental directive",
          ]}
        />
        <Paragraph>
          The Portal does not sell personal information to third parties.
        </Paragraph>

        <SubHeading>Data Security</SubHeading>
        <Paragraph>
          The Portal implements reasonable administrative, technical, and
          organizational security measures to protect information against:
        </Paragraph>
        <List
          items={[
            "Unauthorized access",
            "Unauthorized disclosure",
            "Loss or destruction",
            "Misuse",
            "Alteration",
          ]}
        />
        <Paragraph>Security measures may include:</Paragraph>
        <List
          items={[
            "Secure authentication systems",
            "Role-based access controls",
            "Encryption technologies",
            "Activity monitoring and logging",
            "Secure server infrastructure",
          ]}
        />

        <SubHeading>User Responsibilities</SubHeading>
        <Paragraph>Users are responsible for:</Paragraph>
        <List
          items={[
            "Maintaining confidentiality of login credentials",
            "Providing accurate information",
            "Updating account information where necessary",
            "Ensuring uploaded documents comply with applicable laws",
            "Protecting devices used to access the Portal",
          ]}
        />
        <Paragraph>
          Users should immediately report suspected unauthorized account access
          or security concerns through the official support channels.
        </Paragraph>

        <SubHeading>Data Retention</SubHeading>
        <Paragraph>Information will be retained:</Paragraph>
        <List
          items={[
            "For as long as necessary to provide services",
            "To maintain institutional and legal records",
            "To resolve disputes",
            "To comply with regulatory and audit obligations",
          ]}
        />
        <Paragraph>Retention periods may vary depending on:</Paragraph>
        <List
          items={[
            "Application type",
            "Legal requirements",
            "Administrative policies",
            "Operational needs",
          ]}
        />

        <SubHeading>Cookies and Tracking Technologies</SubHeading>
        <Paragraph>
          The Portal may use cookies and similar technologies to:
        </Paragraph>
        <List
          items={[
            "Maintain user sessions",
            "Improve system performance",
            "Enhance user experience",
            "Support security and authentication",
            "Analyse system usage",
          ]}
        />
        <Paragraph>
          Further details are provided in the Portal’s Cookies Policy.
        </Paragraph>

        <SubHeading>Third-Party Services</SubHeading>
        <Paragraph>
          The Portal may integrate with or rely on third-party services
          including:
        </Paragraph>
        <List
          items={[
            "Payment gateways",
            "Hosting providers",
            "Email or notification services",
            "Analytics or infrastructure tools",
          ]}
        />
        <Paragraph>
          Such third parties may process information in accordance with their
          own privacy and security practices.
        </Paragraph>

        <SubHeading>User Rights</SubHeading>
        <Paragraph>
          Subject to applicable laws and regulations, users may have the right
          to:
        </Paragraph>
        <List
          items={[
            "Request access to personal information",
            "Request correction of inaccurate information",
            "Request deletion where applicable",
            "Object to certain processing activities",
            "Withdraw consent where processing is consent-based",
          ]}
        />
        <Paragraph>
          Requests may be subject to institutional, legal, or regulatory
          limitations.
        </Paragraph>

        <SubHeading>International Data Transfers</SubHeading>
        <Paragraph>
          Where necessary, data may be processed or stored using infrastructure
          or service providers located outside Nigeria, subject to reasonable
          safeguards and applicable legal requirements.
        </Paragraph>

        <SubHeading>Children’s Privacy</SubHeading>
        <Paragraph>
          The Portal is not intended for use by minors without appropriate
          authorization or supervision where applicable.
        </Paragraph>

        <SubHeading>Changes to this Privacy Policy</SubHeading>
        <Paragraph>
          The Office reserves the right to update or revise this Privacy Policy
          at any time. Updated versions will become effective upon publication
          on the Portal. Users are encouraged to review this Policy
          periodically.
        </Paragraph>

        <SubHeading>Contact Information</SubHeading>
        <Paragraph>
          For privacy-related inquiries, support requests, or concerns
          regarding this Privacy Policy, users may contact:
        </Paragraph>
        <p className="text-gray-800 mb-2 font-semibold">
          IPO Nigeria Portal Support
        </p>
        <p className="text-gray-800 mb-6">
          <a
            href="mailto:Support@iponigeria.com"
            className="text-[#166534] underline hover:text-green-800"
          >
            Support@iponigeria.com
          </a>
        </p>

        <SubHeading>Acceptance of this Policy</SubHeading>
        <Paragraph>
          By accessing or using the Portal, users acknowledge that they have
          read and understood this Privacy Policy and agree to the collection
          and use of information as described herein.
        </Paragraph>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
