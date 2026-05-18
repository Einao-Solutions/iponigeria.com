import React from "react";

export const metadata = {
  title: "Terms & Conditions | IPO Nigeria",
  description:
    "Terms and Conditions governing access to and use of the Intellectual Property Office, Nigeria (IPO Nigeria) website, Portal, and associated services.",
};

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl lg:text-3xl font-semibold text-[#166534] mt-10 mb-4">
    {children}
  </h2>
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

const TermsOfUsePage = () => {
  return (
    <section className="py-16">
      <div className="w-5/6 lg:w-11/12 mx-auto max-w-5xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#166534] mb-4">
          Terms and Conditions
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
          “us”, “IPO Nigeria”) terms and conditions.
        </Paragraph>
        <Paragraph>
          These Terms and Conditions (“Terms”) govern access to and use of the
          Website, Portal and all associated services. By accessing,
          registering on, or using the Portal, users (“You”) agree to comply
          with and be legally bound by these Terms. If a user does not agree
          with any part of these Terms, such user should discontinue use of
          the Portal immediately.
        </Paragraph>

        <SectionHeading>Scope of Services</SectionHeading>
        <Paragraph>
          The Portal provides electronic access to intellectual
          property-related services, including but not limited to:
        </Paragraph>
        <List
          items={[
            "Trademark services",
            "Patent services",
            "Design services",
            "Application filings",
            "Renewals",
            "Recordals",
            "Oppositions",
            "Appeals",
            "Availability searches",
            "Online payment processing",
            "Support and ticketing services",
            "Dashboard notifications and updates",
          ]}
        />
        <Paragraph>
          The Intellectual Property Office, Nigeria reserves the right to
          modify, suspend, restrict, or discontinue any service at any time
          without prior notice where necessary.
        </Paragraph>

        <SectionHeading>Eligibility and Account Registration</SectionHeading>
        <Paragraph>
          To access certain services, users may be required to create an
          account.
        </Paragraph>
        <Paragraph>
          By registering an account, users represent and warrant that:
        </Paragraph>
        <List
          items={[
            "Information provided is accurate and complete",
            "They are authorized to act on behalf of any represented organization or client",
            "They will maintain and promptly update account information where necessary",
            "They are legally permitted to use the Portal and its services",
          ]}
        />
        <Paragraph>
          The Intellectual Property Office, Nigeria reserves the right to
          suspend or terminate accounts containing false, misleading,
          incomplete, or unauthorized information.
        </Paragraph>

        <SectionHeading>Account Security</SectionHeading>
        <Paragraph>Users are responsible for:</Paragraph>
        <List
          items={[
            "Maintaining confidentiality of account credentials",
            "Restricting unauthorized access to their accounts",
            "Ensuring login details are not shared improperly",
            "Promptly reporting suspected unauthorized access or security incidents",
          ]}
        />
        <Paragraph>
          Users are responsible for all activities conducted under their
          accounts unless otherwise determined by the Office.
        </Paragraph>

        <SectionHeading>Acceptable Use</SectionHeading>
        <Paragraph>
          Users agree to use the Portal solely for lawful and authorized
          purposes.
        </Paragraph>
        <Paragraph>Users shall NOT:</Paragraph>
        <List
          items={[
            "Submit false or misleading information",
            "Attempt unauthorized access to systems or accounts",
            "Interfere with Portal functionality or security",
            "Upload malicious software or harmful content",
            "Use the Portal for fraudulent, unlawful, or abusive purposes",
            "Impersonate another individual or organization",
            "Attempt to manipulate application or payment processes",
            "Misuse support or communication features",
          ]}
        />
        <Paragraph>
          The Intellectual Property Office, Nigeria reserves the right to
          investigate suspected misuse and take appropriate administrative or
          legal action.
        </Paragraph>

        <SectionHeading>Intellectual Property Rights</SectionHeading>
        <Paragraph>All Portal content, including but not limited to:</Paragraph>
        <List
          items={[
            "Text",
            "Logos",
            "Software",
            "System designs",
            "Graphics",
            "Interface components",
            "Databases",
            "Documentation",
          ]}
        />
        <Paragraph>
          are owned by or licensed to the Office of the Commercial Law
          Departmental, unless otherwise stated.
        </Paragraph>
        <Paragraph>Users shall not:</Paragraph>
        <List
          items={[
            "Reproduce",
            "Modify",
            "Distribute",
            "Reverse engineer",
            "Republish",
            "Exploit",
          ]}
        />
        <Paragraph>
          any Portal content without prior written authorization.
        </Paragraph>
        <Paragraph>
          Submission of intellectual property applications through the Portal
          does not transfer ownership of underlying system technologies or
          Portal infrastructure.
        </Paragraph>

        <SectionHeading>User Submissions and Uploaded Content</SectionHeading>
        <Paragraph>Users are solely responsible for:</Paragraph>
        <List
          items={[
            "Accuracy of submitted applications",
            "Legality of uploaded documents",
            "Compliance of filings with applicable laws and regulations",
          ]}
        />
        <Paragraph>
          By uploading or submitting content, users confirm that:
        </Paragraph>
        <List
          items={[
            "They possess necessary rights or authority",
            "Submitted materials do not violate applicable laws or third-party rights",
          ]}
        />
        <Paragraph>
          The Intellectual Property Office, Nigeria reserves the right to
          reject, suspend, or flag submissions where necessary.
        </Paragraph>

        <SectionHeading>Payments and Transactions</SectionHeading>
        <Paragraph>
          Certain Portal services may require payment of statutory or
          administrative fees.
        </Paragraph>
        <Paragraph>Users acknowledge that:</Paragraph>
        <List
          items={[
            "Applicable fees may change without prior notice",
            "Payment confirmation may be required before processing services",
            "Failed or incomplete transactions may delay processing",
            "Payment references and transaction records should be retained by users",
          ]}
        />
        <Paragraph>The Office is not responsible for delays caused by:</Paragraph>
        <List
          items={[
            "Payment gateway failures",
            "Banking issues",
            "Incorrect payment information submitted by users",
          ]}
        />
        <Paragraph>
          Refunds, where applicable, shall be subject to institutional policies
          and applicable regulations.
        </Paragraph>

        <SectionHeading>Service Availability</SectionHeading>
        <Paragraph>
          The Intellectual Property Office, Nigeria aims to maintain continuous
          Portal availability but does not guarantee uninterrupted access.
        </Paragraph>
        <Paragraph>
          The Portal may become temporarily unavailable due to:
        </Paragraph>
        <List
          items={[
            "System maintenance",
            "Technical upgrades",
            "Security updates",
            "Network interruptions",
            "Force majeure events",
          ]}
        />
        <Paragraph>
          The Office shall not be liable for losses resulting from temporary
          service interruptions.
        </Paragraph>

        <SectionHeading>Support Services</SectionHeading>
        <Paragraph>The Portal may provide support services including:</Paragraph>
        <List
          items={[
            "Ticketing systems",
            "Support communication channels",
            "Notifications and updates",
          ]}
        />
        <Paragraph>Users agree to:</Paragraph>
        <List
          items={[
            "Communicate respectfully with support personnel",
            "Provide accurate support information",
            "Avoid abusive or inappropriate conduct",
          ]}
        />
        <Paragraph>
          The Intellectual Property Office, Nigeria reserves the right to
          restrict access to support services where misuse occurs.
        </Paragraph>

        <SectionHeading>Notifications and Communications</SectionHeading>
        <Paragraph>Users consent to receiving communications related to:</Paragraph>
        <List
          items={[
            "Application status updates",
            "Support responses",
            "System notices",
            "Administrative announcements",
            "Security alerts",
          ]}
        />
        <Paragraph>Notifications may be delivered through:</Paragraph>
        <List
          items={[
            "Dashboard notifications",
            "Email communications",
            "System messages",
          ]}
        />
        <Paragraph>
          Users are responsible for monitoring their registered communication
          channels.
        </Paragraph>

        <SectionHeading>Privacy and Data Protection</SectionHeading>
        <Paragraph>
          Use of the Portal is subject to the Portal’s{" "}
          <a
            href="/privacy-policy"
            className="text-[#166534] underline hover:text-green-800"
          >
            Privacy Policy
          </a>{" "}
          and applicable data protection laws and regulations.
        </Paragraph>
        <Paragraph>
          By using the Portal, users consent to the collection and processing
          of information as described in the Privacy Policy.
        </Paragraph>

        <SectionHeading>Limitation of Liability</SectionHeading>
        <Paragraph>
          To the fullest extent permitted by law, the Intellectual Property
          Office, its affiliates, officers, staff, consultants, technical
          partners, and service providers shall not be liable for:
        </Paragraph>
        <List
          items={[
            "Indirect or consequential damages",
            "Loss of profits or business opportunities",
            "Data loss",
            "Service interruptions",
            "Delays in processing",
            "Unauthorized access caused by user negligence",
            "Technical failures beyond reasonable control",
          ]}
        />
        <Paragraph>
          Portal services are provided on an “as available” and “as is” basis.
        </Paragraph>

        <SectionHeading>Indemnification</SectionHeading>
        <Paragraph>
          Users agree to indemnify and hold harmless the Intellectual Property
          Office, Nigeria and its associated personnel from claims,
          liabilities, damages, losses, or expenses arising from:
        </Paragraph>
        <List
          items={[
            "Misuse of the Portal",
            "Violation of these Terms",
            "Infringement of third-party rights",
            "Submission of unlawful or unauthorized content",
          ]}
        />

        <SectionHeading>Suspension and Termination</SectionHeading>
        <Paragraph>
          The Intellectual Property Office, Nigeria reserves the right to:
        </Paragraph>
        <List
          items={[
            "Suspend accounts",
            "Restrict access",
            "Remove content",
            "Terminate Portal access",
          ]}
        />
        <Paragraph>where users:</Paragraph>
        <List
          items={[
            "Violate these Terms",
            "Engage in suspicious activities",
            "Compromise Portal security",
            "Misuse Portal services",
          ]}
        />
        <Paragraph>
          Such actions may occur without prior notice where necessary for
          security or regulatory purposes.
        </Paragraph>

        <SectionHeading>Audit and Monitoring</SectionHeading>
        <Paragraph>The Office reserves the right to:</Paragraph>
        <List
          items={[
            "Monitor Portal activities",
            "Review logs and communications",
            "Conduct audits",
            "Investigate suspicious activities",
          ]}
        />
        <Paragraph>
          for security, compliance, and operational purposes.
        </Paragraph>

        <SectionHeading>Third-Party Services</SectionHeading>
        <Paragraph>
          The Portal may integrate with third-party providers including:
        </Paragraph>
        <List
          items={[
            "Payment processors",
            "Hosting providers",
            "Notification services",
            "Infrastructure services",
          ]}
        />
        <Paragraph>
          The Intellectual Property Office, Nigeria is not responsible for
          third-party service interruptions or external platform failures
          beyond reasonable control.
        </Paragraph>

        <SectionHeading>Governing Law and Jurisdiction</SectionHeading>
        <Paragraph>
          These Terms shall be governed by and interpreted in accordance with
          the laws of the Federal Republic of Nigeria.
        </Paragraph>
        <Paragraph>
          Any disputes arising from use of the Portal shall be subject to the
          jurisdiction of competent courts within Nigeria.
        </Paragraph>

        <SectionHeading>Amendments to these Terms</SectionHeading>
        <Paragraph>
          The Office reserves the right to update or revise these Terms at any
          time.
        </Paragraph>
        <Paragraph>
          Updated Terms become effective upon publication on the Portal.
        </Paragraph>
        <Paragraph>
          Continued use of the Portal after updates constitutes acceptance of
          the revised Terms.
        </Paragraph>

        <SectionHeading>Contact Information</SectionHeading>
        <Paragraph>
          For inquiries regarding these Terms and Conditions, users may
          contact:
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

        <SectionHeading>Acceptance of Terms</SectionHeading>
        <Paragraph>
          By accessing or using the Portal, users acknowledge that they have
          read, understood, and agreed to these Terms &amp; Conditions.
        </Paragraph>
      </div>
    </section>
  );
};

export default TermsOfUsePage;
