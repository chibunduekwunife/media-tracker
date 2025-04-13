
import {
    FaFacebook,
    FaDiscord,
    FaTwitter,
    FaGithub
} from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6";

export const navLinks = [
    { id: 1, title: "Search", href: "/search" },
    { id: 2, title: "Community", href: "/community" },
    { id: 3, title: "Anime List", href: "/list"}
]

export const footerLinks = [
    [
        { id: 1, title: 'Donate', href: '/donate' },
        { id: 2, title: 'AniZone.co', href: '/' },
        { id: 3, title: 'AniChart.net', href: '/' },
    ],
    [
        { id: 1, title: 'Apps', href: '/apps' },
        { id: 2, title: 'Site Stats', href: '/site-stats' },
        { id: 3, title: 'FAQ', href: '/faq' },
        { id: 4, title: 'API', href: '/api' },
    ],
    [
        { id: 1, title: 'Discord', href: '/discord' },
        { id: 2, title: 'Twitter', href: '/twitter' },
        { id: 3, title: 'Bluesky', href: '/bluesky' },
        { id: 4, title: 'Facebook', href: '/facebook' },
        { id: 5, title: 'Github', href: '/git' },
    ],
    [
        { id: 1, title: 'Add Data', href: '/add-data' },
        { id: 2, title: 'Moderators', href: '/moderators' },
        { id: 3, title: 'Contact', href: '/contact' },
        { id: 4, title: 'Terms & Privacy', href: '/terms' },
        { id: 5, title: 'Site Map', href: '/site-map' },
    ]

]

export const socialIconLinks = [
    { id: 1, title: 'Twitter', href: '/twitter', icon: FaTwitter },
    { id: 2, title: 'Bluesky', href: '/bluesky', icon: FaBluesky },
    { id: 3, title: 'Discord', href: '/discord', icon: FaDiscord },
    { id: 4, title: 'Facebook', href: '/facebook', icon: FaFacebook },
    { id: 5, title: 'Github', href: '/git', icon: FaGithub },

]