import { uniqueId } from 'lodash';

const navData = [
    {
        id: uniqueId(),
        title: 'For You',
        icon: '/landing-page/basket.svg',
        href: '/offers',
    },
    {
        id: uniqueId(),
        title: 'Corporate ordering',
        icon: '/landing-page/corporate-ordering.svg',
        href: '/what-we-do',
    },
    {
        id: uniqueId(),
        title: 'Deliver with Just Eat',
        icon: '/landing-page/bike.svg',
        href: '/application',
    },
    {
        id: uniqueId(),
        title: 'Login',
        href: '/auth/sign-in',
    },
    {
        id: uniqueId(),
        title: 'Help',
        icon: '/landing-page/help.svg',
        href: '/help',
    },
];
export default navData;

// import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
// import { uniqueId } from 'lodash';

// const navData = [
//     {
//         id: uniqueId(),
//         title: 'For You',
//         icon: './landing-page/basket.svg',
//         href: '/offers',
//     },
//     {
//         id: uniqueId(),
//         title: 'Corporate ordering',
//         icon: './landing-page/corporate-ordering.svg',
//         href: '/what-we-do',
//     },
//     {
//         id: uniqueId(),
//         title: 'Devliver with Just Eat',
//         icon: './landing-page/bike.svg',
//         href: '/application',
//     },
//     {
//         id: uniqueId(),
//         title: 'login',
//         href: '/account/login',
//     },
//     {
//         id: uniqueId(),
//         title: 'Help',
//         icon: './landing-page/help.svg',
//         href: '/help',
//     },
// ];
// export default navData;
