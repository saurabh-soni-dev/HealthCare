const languageOptions = [
  {id: 1, title: 'English', isSelected: false},
  {id: 2, title: 'Hindi', isSelected: false},
];

const privacyPolicy = [
  {
    id: 1,
    title: 'Information We Collect',
    data: [
      'We collect personal information you provide during registration or while using the app, such as your full name, email address, phone number, date of birth, gender, and emergency contact details. This information helps us identify you and provide personalized healthcare services.',
      'We collect health-related data, including your medical history, current medications, symptoms, allergies, and conditions you track using the app. You may also input test results, doctor notes, and other sensitive health details that are crucial to delivering relevant services.',
      'We gather app usage data, such as the features you interact with, session duration, crash reports, device type and OS version, and diagnostic logs. This helps us understand how the app is used and improve its performance.',
      'If you give permission, we may collect location data to enable features like nearby doctor search or emergency support. Location data is used strictly for the intended purpose and only when the app is active.',
      'We may also collect device-level permissions such as camera and file access (e.g., to scan medical documents or upload prescriptions).',
    ],
  },
  {
    id: 2,
    title: 'How We Use Your Information',
    data: [
      'We use your personal and health information to deliver core healthcare features of the app, including symptom tracking, appointment scheduling, reminders, medical history tracking, and personalized content.',
      'Your data allows us to match you with relevant doctors, suggest healthcare plans or actions, and notify you of critical health updates or reminders.',
      'We may use anonymized and aggregated data to conduct research, analyze usage patterns, improve app design, and enhance public health insights without exposing your personal identity.',
      'Usage and diagnostic data help us fix bugs, enhance security, and optimize performance across different devices and operating systems.',
      'We use your contact information to send important administrative updates, service notifications, and (if you opt in) promotional content. You can opt out of marketing emails at any time.',
    ],
  },
  {
    id: 3,
    title: 'Sharing Your Information',
    data: [
      'We do not sell or rent your personal or health information to third parties. Your trust and data security are our highest priorities.',
      'We may share your data with licensed medical professionals who are directly involved in your care and only with your consent.',
      'We use secure third-party providers for functions like cloud storage, analytics, or customer support. These partners are contractually obligated to maintain the confidentiality and security of your data.',
      'If legally required, we may disclose information in response to court orders, government requests, or applicable regulations. Such disclosures are made with full compliance and transparency whenever possible.',
      'In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity, subject to the same privacy commitments outlined here.',
    ],
  },
  {
    id: 4,
    title: 'Data Security',
    data: [
      'We implement industry-standard security practices to protect your information, including encryption of data at rest and in transit, secure user authentication, access controls, and regular security audits.',
      'Sensitive information, such as your medical records and health metrics, are stored securely using encrypted databases.',
      'Our development team follows best practices for secure coding, and our infrastructure is protected with firewalls and intrusion detection systems.',
      'While we take strong precautions, no system is completely immune to threats. Users are encouraged to use strong passwords, keep their devices secure, and report any suspicious activity.',
    ],
  },
  {
    id: 5,
    title: 'Your Rights',
    data: [
      'You have the right to access the personal data we store about you and request a copy at any time.',
      'You can correct inaccurate information or request the deletion of your data, subject to certain legal obligations.',
      'You have the right to withdraw your consent for data processing or restrict how your data is used, especially for marketing or analytics.',
      'You can request that your data be exported in a machine-readable format for portability to other services.',
      'To exercise these rights, please contact us at support@yourapp.com. We will respond to your request within a reasonable timeframe, typically within 30 days.',
    ],
  },
  {
    id: 6,
    title: "Children's Privacy",
    data: [
      'Our services are not intended for children under the age of 13, or under the applicable minimum age in your jurisdiction.',
      'We do not knowingly collect personally identifiable information from children without verified parental consent.',
      "If we learn that we have collected information from a child without consent, we will take steps to delete it as soon as possible. Parents or guardians may contact us at support@yourapp.com to review or delete a child's information.",
    ],
  },
  {
    id: 7,
    title: 'Changes to This Policy',
    data: [
      'We may update this Privacy Policy periodically to reflect changes in legal requirements, technology, or the scope of our services.',
      'When we make material changes, we will notify you through the app or via email before the changes take effect.',
      'We encourage you to review the Privacy Policy regularly to stay informed about how we protect your data.',
    ],
  },
  {
    id: 8,
    title: 'Contact Us',
    data: [
      'If you have any questions, concerns, or feedback about this Privacy Policy or how your data is handled, please contact us:',
      'Email: support@yourapp.com',
      'Address: [Your Company Name], [Street Address], [City, State ZIP], [Country]',
    ],
  },
];

const termsOfService = [
  {
    id: 1,
    title: 'Acceptance of Terms',
    data: [
      "By using this application ('App'), you agree to be bound by these Terms of Service ('Terms'), which constitute a binding legal agreement between you and [Your Company Name].",
      'If you do not agree to these Terms, do not use the App. Continued use of the App indicates your acceptance of all terms and policies.',
      'These Terms apply to all users of the App, including visitors, registered users, and healthcare professionals.',
    ],
  },
  {
    id: 2,
    title: 'Eligibility',
    data: [
      'You must be at least 13 years old to use this App, or older if required by law in your jurisdiction.',
      'If you are under 18, you must have your parent’s or legal guardian’s consent to use the App.',
      'By using the App, you represent and warrant that you meet all eligibility requirements.',
    ],
  },
  {
    id: 3,
    title: 'App Usage and Restrictions',
    data: [
      'You may only use the App for lawful, personal, and non-commercial healthcare purposes.',
      'You agree not to use the App for any illegal, harmful, or fraudulent activities.',
      'You must not interfere with the proper functioning of the App or attempt to access data you are not authorized to access.',
      'You agree not to upload any harmful code, viruses, or malware into the App.',
    ],
  },
  {
    id: 4,
    title: 'Health Disclaimer',
    data: [
      'The App provides health-related information and tools but does **not replace professional medical advice, diagnosis, or treatment**.',
      'Always consult with a licensed healthcare provider before making any medical decisions based on information from this App.',
      'In case of emergency, call your local emergency number or seek immediate professional care. This App is **not** intended for use in emergency situations.',
    ],
  },
  {
    id: 5,
    title: 'User Accounts',
    data: [
      'To use certain features, you must create an account by providing accurate and complete information.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.',
      'If you suspect unauthorized use of your account, you must notify us immediately.',
      'We reserve the right to suspend or terminate accounts that violate these Terms.',
    ],
  },
  {
    id: 6,
    title: 'Intellectual Property',
    data: [
      'All content, features, and functionality of the App—including text, graphics, logos, and code—are the property of [Your Company Name] and are protected by copyright and other intellectual property laws.',
      'You may not copy, modify, distribute, or reverse-engineer any part of the App without our prior written consent.',
      'Any feedback or suggestions you provide may be used by us without any obligation or compensation.',
    ],
  },
  {
    id: 7,
    title: 'Privacy and Data Handling',
    data: [
      'Our collection and use of personal and health data is governed by our Privacy Policy.',
      'By using the App, you consent to the collection, processing, and sharing of your data as described in the Privacy Policy.',
      'We implement appropriate technical and organizational measures to protect your data, but you acknowledge that no system is completely secure.',
    ],
  },
  {
    id: 8,
    title: 'Termination',
    data: [
      'We may terminate or suspend your access to the App at any time, with or without notice, for any reason including violation of these Terms.',
      'You may stop using the App at any time by uninstalling it or deleting your account (if applicable).',
      'Upon termination, your right to use the App will cease immediately. Certain legal obligations will survive termination, including those related to intellectual property and limitations of liability.',
    ],
  },
  {
    id: 9,
    title: 'Limitation of Liability',
    data: [
      'To the fullest extent permitted by law, [Your Company Name] is not liable for any direct, indirect, incidental, or consequential damages arising out of or related to your use of the App.',
      'We make no guarantees about the accuracy, completeness, or reliability of any content or data provided by the App.',
      'Use of the App is at your own risk.',
    ],
  },
  {
    id: 10,
    title: 'Modifications to Terms',
    data: [
      'We may update these Terms at any time. If we make material changes, we will notify you via the App or email.',
      'Your continued use of the App after such changes constitutes your acceptance of the revised Terms.',
      'We recommend reviewing these Terms periodically to stay informed.',
    ],
  },
  {
    id: 11,
    title: 'Governing Law',
    data: [
      'These Terms are governed by and construed in accordance with the laws of [Your Country or State], without regard to its conflict of law provisions.',
      'Any legal action or dispute shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].',
    ],
  },
  {
    id: 12,
    title: 'Contact Information',
    data: [
      'If you have any questions about these Terms, please contact us at:',
      'Email: support@yourapp.com',
      'Address: [Your Company Name], [Street Address], [City, State ZIP], [Country]',
    ],
  },
];

const aboutApp = [
  {
    id: 1,
    title: 'App Overview',
    data: [
      'HealthCare is a comprehensive healthcare mobile application designed to empower users to take control of their health and well-being anytime, anywhere.',
      'The app offers a user-friendly interface with tools for symptom tracking, appointment scheduling, medication reminders, medical record management, and secure communication with healthcare providers.',
    ],
  },
  {
    id: 2,
    title: 'Our Mission',
    data: [
      'At HealthCare, our mission is to make quality healthcare accessible, personalized, and convenient for everyone.',
      'We aim to bridge the gap between patients and healthcare professionals by using smart technology to deliver safer, faster, and more efficient care.',
    ],
  },
  {
    id: 3,
    title: 'Key Features',
    data: [
      'Daily symptom and vital tracking to monitor your health patterns.',
      'Easy appointment scheduling and reminders.',
      'Medication tracking with alerts to help you stay on top of your prescriptions.',
      'Secure storage and easy sharing of your health records and medical reports.',
      'Optional telemedicine features, including video consultations with certified doctors.',
    ],
  },
  {
    id: 4,
    title: 'Data Privacy & Security',
    data: [
      'We take your privacy seriously. HealthCare uses end-to-end encryption, secure authentication, and strict access controls to protect your personal and health information.',
      'Your data is managed in accordance with our Privacy Policy and complies with applicable healthcare regulations such as HIPAA and GDPR.',
    ],
  },
  {
    id: 5,
    title: 'Contact & Support',
    data: [
      'Have questions or need help using HealthCare?',
      'Email us at: support@healthcare.com',
      'Visit our website: www.healthcare.com',
      'Mailing Address: HealthCare Inc., 123 Wellness Ave, Suite 100, MedCity, NY 10001, USA',
    ],
  },
  {
    id: 6,
    title: 'Version & Updates',
    data: [
      'Current App Version: 1.0.0',
      'We continuously improve HealthCare through regular updates. Make sure to keep the app up to date to benefit from the latest features and security enhancements.',
    ],
  },
];

export {languageOptions, privacyPolicy, termsOfService, aboutApp};
