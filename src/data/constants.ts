//  Import Icons from React icons library 
import { FaReact, FaPython, FaCss3Alt, FaAddressCard, FaFacebook, FaQuoteLeft, FaUserAlt, FaServicestack } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { FiFigma } from 'react-icons/fi';
import { HiShoppingCart, HiMenuAlt2 } from 'react-icons/hi';
import { CgWebsite, CgClose } from 'react-icons/cg';
import { MdManageSearch, MdOutlineDeveloperMode, MdEmail, MdOutlineDomainVerification } from 'react-icons/md';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { BsFillEnvelopeOpenFill, BsArrowRight, BsGoogle, BsTwitter, BsBehance, BsGithub, BsInstagram, BsLinkedin, BsSkype } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillSkype, AiFillGitlab, AiFillBehanceCircle, AiFillHtml5, AiFillPhone, AiOutlineClose, AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
import { BiMerge } from "react-icons/bi";
import { SiCodeforces } from 'react-icons/si'

// Import images
import { c1, c2, c3, p1, p2, p3, p4, p5, p6, homeImg, heroImgForMob, homeImgBlueTheme, homeImgPinkTheme } from '../assets/images/index';

// Current Year
const todayYear = new Date().getFullYear();

export const content = {
  theme: {
    settingWheel: AiTwotoneSetting,
    switchers: [
      { id: 1, value: 'yellow', color:'bg-yellow-500' },
      { id: 2, value: 'blue', color:'bg-blue-500' },
      { id: 3, value: 'pink', color:'bg-pink-500' },
      { id: 4, value: 'green', color:'bg-green-500' },
      { id: 5, value: 'orange', color:'bg-orange-500' }
    ]
  },
  navbar: {
    hamburger: HiMenuAlt2,
    closeIcon: AiOutlineClose,
    nav_items: [
      { id: 1, icon: AiFillHome, link: '#home' },
      { id: 2, icon: FaUserAlt, link: '#about' },
      { id: 3, icon: SiCodeforces, link: '#skills' },
      { id: 4, icon: FaServicestack, link: '#services' },
      { id: 5, icon: BiMerge, link: '#portfolio' },
      { id: 6, icon: FaQuoteLeft, link: '#reviews' },
      { id: 7, icon: AiFillPhone, link: '#contact' },
    ]
  },
  home: {
    fullName: 'Kaylen David',
    profession: 'Freelancer software developer',
    heroImg: homeImg,
    heroImgForMob: heroImgForMob,
    homeImgBlueTheme: homeImgBlueTheme,
    homeImgPinkTheme: homeImgPinkTheme,
    bannerText: 'Software',
    bannerTextSpan: 'Developer',
    home_social_icon_items: [
      { id: 1, icon: AiFillGithub, link: 'https://github.com/' },
      { id: 2, icon: AiFillLinkedin, link: 'https://www.linkedin.com/' },
      { id: 3, icon: AiFillSkype, link: 'https://www.skype.com/' },
      { id: 4, icon: AiFillGitlab, link: 'https://gitlab.com/users/sign_in/' },
      { id: 5, icon: AiFillBehanceCircle, link: 'https://www.behance.net/' }
    ]
  },
  about: {
    title: 'Summary',
    subtitle: 'Know about me',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempore dicta cumque incidunt magni iure maiores dignissimos pariatur recusandae laudantium expedita neque accusamus voluptatem asperiores eligendi officia, placeat, perspiciatis, molestias deserunt iste ipsam. Excepturi aliquid ipsa natus aspernatur consequuntur deserunt facilis. Iure tempora ad odio perferendis atid sit excepturi?',
    personal_info: [
      { id: 1, key: 'Full Name', value: 'Kaylen David' },
      { id: 1, key: 'Age', value: '32 years' },
      { id: 1, key: 'Nationality', value: 'United Kingdom' },
      { id: 1, key: 'Languages', value: 'English, French' },
      { id: 1, key: 'Address', value: '11 Jedburgh Road,Lethanhil' },
      { id: 1, key: 'Freelance', value: 'Available' },
    ],
    facts: [
      { id: 1, key: 'Projects Completed', value: '75' },
      { id: 2, key: 'Years of Experience', value: '9+' },
      { id: 3, key: 'Happy Clients', value: '99+' },
      { id: 4, key: 'Awards Won', value: '12' },
    ]
  },
  skills: {
    title: 'Skills',
    subtitle: 'My Expertise',
    arrowIcon: BsArrowRight,
    skill_items: [
      { id: 1, title: 'React.js', description: 'building single page ui', icon: FaReact, modalDes: 'React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.' },
      { id: 2, title: 'Python', description: ' High level programming language', icon: FaPython, modalDes: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. ' },
      { id: 3, title: 'Javascript', description: 'Scripting language for web', icon: IoLogoJavascript, modalDes: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.' },
      { id: 4, title: 'Figma', description: 'building modern UI/UX', icon: FiFigma, modalDes: 'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.' },
      { id: 5, title: 'css3', description: 'css stands for styling', icon: FaCss3Alt, modalDes: 'CSS3: CSS3 stands for Cascading Style Sheet level 3, which is the advanced version of CSS. It is used for structuring, styling, and formatting web pages. Several new features have been added to CSS3 and it is supported by all modern web browsers ' },
      { id: 6, title: 'Html5', description: 'Structure of Web Page', icon: AiFillHtml5, modalDes: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard' },
    ]
  },
  services: {
    title: 'Services',
    subtitle: 'What i do',
    services_items: [
      {
        id: 1,
        title: ' Ecommerce',
        description: 'packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. ',
        icon: HiShoppingCart
      },
      {
        id: 2,
        title: ' Software Development',
        description: 'Release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.',
        icon: MdOutlineDeveloperMode
      },
      {
        id: 3,
        title: 'Web Design',
        description: 'ault model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by',
        icon: CgWebsite
      },
      {
        id: 4,
        title: 'SEO',
        description: 'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        icon: MdManageSearch
      },
      {
        id: 5,
        title: 'Domain & Hosting',
        description: 'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        icon: MdOutlineDomainVerification
      },
      {
        id: 6,
        title: '24/7 Support',
        description: 'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        icon: HiOutlineCalendarDays
      },

    ]
  },
  testimonials: {
    title: 'Reviews',
    subtitle: 'What they say',
    testimonials_items: [
      {
        id: "1",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores corporis provident dolore quisquam dolorem error blanditiis itaque iste totam tempore nesciunt hic, voluptatum ad at rem esse quaerat ullam voluptates. Nam neque aliquid corrupti blanditiis!",
        name: "John Doe",
        title: "Founder & Leader",
        img: c1,
      },
      {
        id: "2",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatem optio illo excepturi? Aut ducimus, dignissimos voluptatem amet temporLorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores corporis provident dolore quisquam dolorem error blanditiis ie aspernatur quo adipisci atque est asperiores.",
        name: "Henry Marck",
        title: "Founder & Leader",
        img: c2,

      },
      {
        id: "3",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatem optio illo excepturi? Aut ducimus, dignissimos voluptatem amet tempore aspernatur quo adipisci atque est asperiores.",
        name: "Antim Reck",
        title: "Founder & Leader",
        img: c3,
      },
      {
        id: "4",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatem optio illo excepturi? Aut ducimus, dignissimos voluptatem amet tempore aspernatur quo adipisci atque est asperiores.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: c3,
      },
    ]
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'My work',
    close_icon: CgClose,
    portfolio_item: [
      {
        id: 1,
        category: 'Mobile App',
        title: 'Food Delivery App',
        image: p3,
        description: 'lorem ipsum dolar sit amet It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout sit amet desc etc ezeas.',
        project_details_list: [
          { id: 1, key: 'Client', value: 'Ruby Clinton' },
          { id: 2, key: 'Technologies', value: 'iOS, HTML5, CSS3, PHP, Java' },
          { id: 3, key: 'Industry', value: ' Art & Design' },
          { id: 4, key: 'Date', value: 'Dec 6 2021' },
          { id: 5, key: 'URL', value: 'www.example.com' },
        ],
        social_icons: [
          { id: 1, icon: FaFacebook, link: 'https://facebook.com/' },
          { id: 2, icon: BsTwitter, link: 'https://twitter.com/login?lang=en' },
          { id: 3, icon: BsGoogle, link: 'https://www.google.com/' },
          { id: 4, icon: BsInstagram, link: 'https://www.instagram.com/' },
          { id: 5, icon: MdEmail, link: 'https://mail.google.com/' },
        ],
      },
      {
        id: 2,
        category: 'Software',
        title: 'Hospital management software',
        image: p2,
        description: 'lorem ipsum dolar sit amet It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout sit amet desc etc ezeas.',
        project_details_list: [
          { id: 1, key: 'Client', value: 'Ruby Clinton' },
          { id: 2, key: 'Technologies', value: 'iOS, HTML5, CSS3, PHP, Java' },
          { id: 3, key: 'Industry', value: ' Art & Design' },
          { id: 4, key: 'Date', value: 'Dec 6 2021' },
          { id: 5, key: 'URL', value: 'www.example.com' },
        ],
        social_icons: [
          { id: 1, icon: FaFacebook, link: 'https://facebook.com/' },
          { id: 2, icon: BsTwitter, link: 'https://twitter.com/login?lang=en' },
          { id: 3, icon: BsGoogle, link: 'https://www.google.com/' },
          { id: 4, icon: BsInstagram, link: 'https://www.instagram.com/' },
          { id: 5, icon: MdEmail, link: 'https://mail.google.com/' },
        ],
      },
      {
        id: 3,
        category: 'Website',
        title: 'Cryto web app landing page',
        image: p4,
        description: 'lorem ipsum dolar sit amet It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout sit amet desc etc ezeas.',
        project_details_list: [
          { id: 1, key: 'Client', value: 'Ruby Clinton' },
          { id: 2, key: 'Technologies', value: 'iOS, HTML5, CSS3, PHP, Java' },
          { id: 3, key: 'Industry', value: ' Art & Design' },
          { id: 4, key: 'Date', value: 'Dec 6 2021' },
          { id: 5, key: 'URL', value: 'www.example.com' },
        ],
        social_icons: [
          { id: 1, icon: FaFacebook, link: 'https://facebook.com/' },
          { id: 2, icon: BsTwitter, link: 'https://twitter.com/login?lang=en' },
          { id: 3, icon: BsGoogle, link: 'https://www.google.com/' },
          { id: 4, icon: BsInstagram, link: 'https://www.instagram.com/' },
          { id: 5, icon: MdEmail, link: 'https://mail.google.com/' },
        ],
      },
      {
        id: 4,
        category: 'Software',
        title: 'Ecommerce web app',
        image: p1,
        description: 'lorem ipsum dolar sit amet It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout sit amet desc etc ezeas.',
        project_details_list: [
          { id: 1, key: 'Client', value: 'Ruby Clinton' },
          { id: 2, key: 'Technologies', value: 'iOS, HTML5, CSS3, PHP, Java' },
          { id: 3, key: 'Industry', value: ' Art & Design' },
          { id: 4, key: 'Date', value: 'Dec 6 2021' },
          { id: 5, key: 'URL', value: 'www.example.com' },
        ],
        social_icons: [
          { id: 1, icon: FaFacebook, link: 'https://facebook.com/' },
          { id: 2, icon: BsTwitter, link: 'https://twitter.com/login?lang=en' },
          { id: 3, icon: BsGoogle, link: 'https://www.google.com/' },
          { id: 4, icon: BsInstagram, link: 'https://www.instagram.com/' },
          { id: 5, icon: MdEmail, link: 'https://mail.google.com/' },
        ],
      },
      {
        id: 5,
        category: 'Website',
        title: 'Travel vlog template',
        image: p5,
        description: 'lorem ipsum dolar sit amet It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout sit amet desc etc ezeas.',
        project_details_list: [
          { id: 1, key: 'Client', value: 'Ruby Clinton' },
          { id: 2, key: 'Technologies', value: 'iOS, HTML5, CSS3, PHP, Java' },
          { id: 3, key: 'Industry', value: ' Art & Design' },
          { id: 4, key: 'Date', value: 'Dec 6 2021' },
          { id: 5, key: 'URL', value: 'www.example.com' },
        ],
        social_icons: [
          { id: 1, icon: FaFacebook, link: 'https://facebook.com/' },
          { id: 2, icon: BsTwitter, link: 'https://twitter.com/login?lang=en' },
          { id: 3, icon: BsGoogle, link: 'https://www.google.com/' },
          { id: 4, icon: BsInstagram, link: 'https://www.instagram.com/' },
          { id: 5, icon: MdEmail, link: 'https://mail.google.com/' },
        ],
      },
      {
        id: 6,
        category: 'Mobile App',
        title: 'Crypto Web app',
        image: p6,
        description: 'lorem ipsum dolar sit amet It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout sit amet desc etc ezeas.',
        project_details_list: [
          { id: 1, key: 'Client', value: 'Ruby Clinton' },
          { id: 2, key: 'Technologies', value: 'iOS, HTML5, CSS3, PHP, Java' },
          { id: 3, key: 'Industry', value: ' Art & Design' },
          { id: 4, key: 'Date', value: 'Dec 6 2021' },
          { id: 5, key: 'URL', value: 'www.example.com' },
        ],
        social_icons: [
          { id: 1, icon: FaFacebook, link: 'https://facebook.com/' },
          { id: 2, icon: BsTwitter, link: 'https://twitter.com/login?lang=en' },
          { id: 3, icon: BsGoogle, link: 'https://www.google.com/' },
          { id: 4, icon: BsInstagram, link: 'https://www.instagram.com/' },
          { id: 5, icon: MdEmail, link: 'https://mail.google.com/' },
        ],
      },
    ]
  },
  contact: {
    title: 'Contact',
    subtitle: 'Get in touch',
    contact_info: [
      { icon: AiFillPhone, text: '(060) 444 434 444' },
      { icon: BsFillEnvelopeOpenFill, text: 'kaylen_david@work.com' },
      { icon: FaAddressCard, text: '11 Jedburgh Road ,United Kingdom' },
      { icon: CgWebsite, text: 'my_website.domain' },
    ]
  },
  footer: {
    logo: 'KD',
    mainText: `KD - Personal portfolio ${todayYear} - ${todayYear + 1}`,
    right: 'All Rights Reserved !',
    footer_social_icons: [
      { id: 1, icon: BsGithub, link: 'https://github.com/' },
      { id: 2, icon: BsLinkedin, link: 'https://www.linkedin.com/' },
      { id: 3, icon: BsSkype, link: 'https://www.skype.com/' },
      { id: 4, icon: BsInstagram, link: 'https://www.instagram.com/' },
      { id: 5, icon: BsBehance, link: 'https://www.behance.net/' },
    ]
  }
}
