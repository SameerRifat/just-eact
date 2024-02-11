import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { uniqueId } from 'lodash';

const navData = [
    {
        id: uniqueId(),
        title: 'For You',
        icon: CardGiftcardOutlinedIcon,
        href: '/offers',
    },
    {
        id: uniqueId(),
        title: 'Corporate ordering',
        icon: CardGiftcardOutlinedIcon,
        href: '/what-we-do',
    },
    {
        id: uniqueId(),
        title: 'Devliver with Just Eat',
        icon: CardGiftcardOutlinedIcon,
        href: '/application',
    },
    {
        id: uniqueId(),
        title: 'login',
        href: '/account/login',
    },
    {
        id: uniqueId(),
        title: 'Help',
        icon: HelpOutlineOutlinedIcon,
        href: '/help',
    },
];
export default navData;
