import appointment_img from './appointment_img.png';
import header_img from './header_img.png';
import group_profiles from './group_profiles.png';
import profile_pic from './profile_pic.png';
import contact_image from './contact_image.jpeg';
import about_image from './about_image.jpeg';
import logo from './logo.svg';
import dropdown_icon from './dropdown_icon.svg';
import menu_icon from './menu_icon.svg';
import cross_icon from './cross_icon.png';
import chats_icon from './chats_icon.svg';
import verified_icon from './verified_icon.svg';
import arrow_icon from './arrow_icon.svg';
import info_icon from './info_icon.svg';
import upload_icon from './upload_icon.png';
import stripe_logo from './stripe_logo.png';
import razorpay_logo from './razorpay_logo.png';
import consultant1 from './doc1.png';
import consultant2 from './doc2.png';
import consultant3 from './doc3.png';
import consultant4 from './doc4.png';
import consultant5 from './doc5.png';
import consultant6 from './doc6.png';
import consultant7 from './doc7.png';
import consultant8 from './doc8.png';
import consultant9 from './doc9.png';
import consultant10 from './doc10.png';
import consultant11 from './doc11.png';
import consultant12 from './doc12.png';
import consultant13 from './doc13.png';
import consultant14 from './doc14.png';
import consultant15 from './doc15.png';
import IT_Consultant from './IT_Consultant.svg';
import Operations_Manager from './Operations_Manager.svg';
import Business_Strategist from './Business_Strategist.svg';
import Human_Resource from './Human_Resource.svg';
import Marketing_Strategist from './Marketing_Strategist.svg';
import Financial_Planner from './Financial_Planner.svg';

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
};

export const specialityData = [
    {
        speciality: 'Business Strategy',
        image: Business_Strategist
    },
    {
        speciality: 'Human Resources',
        image: Human_Resource
    },
    {
        speciality: 'IT Consulting',
        image: IT_Consultant
    },
    {
        speciality: 'Financial Planning',
        image: Financial_Planner
    },
    {
        speciality: 'Marketing Strategy',
        image: Marketing_Strategist
    },
    {
        speciality: 'Operations Management',
        image: Operations_Manager
    },
];

export const consultants = [
    {
        _id: 'consultant1',
        name: 'Mr. Rohan Sharma',
        image: consultant1,
        speciality: 'Business Strategy',
        degree: 'MBA',
        experience: '7 Years',
        about: 'Mr. Sharma specializes in creating comprehensive business strategies to improve organizational performance and market reach. He is adept at identifying market trends and formulating actionable plans to drive growth.',
        fees: '₹7500',
        address: {
            line1: '17th Floor, Barakhamba Road',
            line2: 'Connaught Place, New Delhi'
        },
        contact: '+91 9876543210'
    },
    {
        _id: 'consultant2',
        name: 'Ms. Priya Mehta',
        image: consultant2,
        speciality: 'Human Resources',
        degree: 'MSc in HR Management',
        experience: '5 Years',
        about: 'Ms. Mehta excels in talent acquisition and organizational development to foster a productive workplace. She focuses on enhancing employee satisfaction and improving HR policies.',
        fees: '₹6800',
        address: {
            line1: '27th Floor, Rajendra Place',
            line2: 'Karol Bagh, New Delhi'
        },
        contact: '+91 9876543211'
    },
    {
        _id: 'consultant3',
        name: 'Mr. Ansh Patel',
        image: consultant3,
        speciality: 'IT Consulting',
        degree: 'MSc in Computer Science',
        experience: '6 Years',
        about: 'Mr. Patel provides expertise in IT solutions and systems integration to enhance technological capabilities. His strong analytical skills ensure successful project delivery.',
        fees: '₹8200',
        address: {
            line1: '37th Floor, Nehru Place',
            line2: 'South Delhi, New Delhi'
        },
        contact: '+91 9876543212'
    },
    {
        _id: 'consultant4',
        name: 'Mr. Arjun Verma',
        image: consultant4,
        speciality: 'Financial Planning',
        degree: 'Chartered Financial Analyst (CFA)',
        experience: '8 Years',
        about: 'Mr. Verma specializes in personal and corporate financial planning to secure economic stability and growth. His expertise includes investment analysis and risk management.',
        fees: '₹9000',
        address: {
            line1: '47th Floor, Hauz Khas',
            line2: 'South Delhi, New Delhi'
        },
        contact: '+91 9876543213'
    },
    {
        _id: 'consultant5',
        name: 'Ms. Kavya Singh',
        image: consultant5,
        speciality: 'Marketing Strategy',
        degree: 'MBA in Marketing',
        experience: '5 Years',
        about: 'Ms. Singh designs innovative marketing strategies to enhance brand visibility and customer engagement. Her campaigns are known for their creativity and effectiveness.',
        fees: '₹7000',
        address: {
            line1: '57th Floor, DLF Tower',
            line2: 'Saket, New Delhi'
        },
        contact: '+91 9876543214'
    },
    {
        _id: 'consultant6',
        name: 'Mr. Aditya Khanna',
        image: consultant6,
        speciality: 'Operations Management',
        degree: 'MBA in Operations',
        experience: '9 Years',
        about: 'Mr. Khanna optimizes operational processes to maximize efficiency and reduce costs across various industries. He has successfully led teams in complex supply chain projects.',
        fees: '₹8500',
        address: {
            line1: '67th Floor, Netaji Subhash Place',
            line2: 'Pitampura, New Delhi'
        },
        contact: '+91 9876543215'
    },
    {
        _id: 'consultant7',
        name: 'Mr. Aditya Rao',
        image: consultant7,
        speciality: 'Business Strategy',
        degree: 'Executive MBA',
        experience: '10 Years',
        about: 'Mr. Rao has a proven track record in restructuring businesses for growth and profitability. He has successfully implemented strategic transformations in multiple industries.',
        fees: '₹10000',
        address: {
            line1: '77th Floor, Green Park',
            line2: 'South Delhi, New Delhi'
        },
        contact: '+91 9876543216'
    },
    {
        _id: 'consultant8',
        name: 'Mr. Suresh Kumar',
        image: consultant8,
        speciality: 'Human Resources',
        degree: 'PhD in Organizational Psychology',
        experience: '6 Years',
        about: 'Mr. Kumar applies psychological principles to improve employee satisfaction and organizational culture. He focuses on leadership development and conflict resolution.',
        fees: '₹7800',
        address: {
            line1: '87th Floor, Laxmi Nagar',
            line2: 'East Delhi, New Delhi'
        },
        contact: '+91 9876543217'
    },
    {
        _id: 'consultant9',
        name: 'Ms. Neha Malhotra',
        image: consultant9,
        speciality: 'IT Consulting',
        degree: 'MBA in Information Systems',
        experience: '7 Years',
        about: 'Ms. Malhotra is known for implementing cutting-edge IT strategies tailored to business needs. Her expertise includes cybersecurity and cloud computing.',
        fees: '₹8500',
        address: {
            line1: '97th Floor, Okhla Phase 3',
            line2: 'South Delhi, New Delhi'
        },
        contact: '+91 9876543218'
    },
    {
        _id: 'consultant10',
        name: 'Mr. Rajesh Gupta',
        image: consultant10,
        speciality: 'Financial Planning',
        degree: 'Certified Public Accountant (CPA)',
        experience: '8 Years',
        about: 'Mr. Gupta assists clients in managing finances and planning for long-term financial success. He has extensive experience in tax planning and portfolio management.',
        fees: '₹9000',
        address: {
            line1: '107th Floor, Punjabi Bagh',
            line2: 'West Delhi, New Delhi'
        },
        contact: '+91 9876543219'
    },
    {
        _id: 'consultant11',
        name: 'Ms. Anjali Sharma',
        image: consultant11,
        speciality: 'Marketing Strategy',
        degree: 'MA in Communications',
        experience: '4 Years',
        about: 'Ms. Sharma specializes in content marketing, brand storytelling, and digital campaigns to enhance customer engagement and brand visibility.',
        fees: '₹9000',
        address: {
            line1: 'C-117, Connaught Place',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'consultant12',
        name: 'Mr. Ramesh Gupta',
        image: consultant12,
        speciality: 'Operations Management',
        degree: 'MBA in Operations',
        experience: '10 Years',
        about: 'Mr. Gupta excels in streamlining business operations through innovative process improvements, cost reduction strategies, and efficient resource utilization.',
        fees: '₹1400',
        address: {
            line1: 'B-127, Hauz Khas',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'consultant13',
        name: 'Ms. Priya Kapoor',
        image: consultant13,
        speciality: 'Business Strategy',
        degree: 'Master of Global Management',
        experience: '5 Years',
        about: 'Ms. Kapoor specializes in developing innovative business strategies for market entry, expansion, and competitive positioning in the Indian and global markets.',
        fees: '₹1100',
        address: {
            line1: 'A-137, Defence Colony',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'consultant14',
        name: 'Mr. Arjun Mehta',
        image: consultant14,
        speciality: 'Human Resources',
        degree: 'MBA in Organizational Leadership',
        experience: '6 Years',
        about: 'Mr. Mehta focuses on leadership development, employee engagement, and creating dynamic organizational structures for sustainable growth.',
        fees: '₹1000',
        address: {
            line1: 'D-147, Greater Kailash',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'consultant15',
        name: 'Ms. Sneha Verma',
        image: consultant15,
        speciality: 'IT Consulting',
        degree: 'Certified Information Systems Auditor (CISA)',
        experience: '8 Years',
        about: 'Ms. Verma provides expert IT auditing and consulting services to ensure robust compliance, data security, and technology optimization for businesses.',
        fees: '₹1350',
        address: {
            line1: 'E-157, Vasant Kunj',
            line2: 'New Delhi, India'
        }
    }
    
 ];
