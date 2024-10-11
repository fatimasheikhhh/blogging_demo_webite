const Menu=[
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'About',
        link: '/about'
    },
    {
        id: 3,
        title: 'Contact',
        link: '/contact'
    },
    {
        id: 4,
        title: 'Services',
        link: '/services'
    },
];
const FeaturedImages=[
    {
        id: 1, 
        image: 'https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Flogo1.png&w=256&q=75',
        alt: 'Image1'
    },
    {
        id: 2, 
        image: 'https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Flogo2.png&w=256&q=75',
        alt: 'Image2'
    },
    {
        id: 3, 
        image: 'https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Flogo3.png&w=256&q=75',
        alt: 'Image3'
    },
    {
        id: 4, 
        image: 'https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Flogo4.png&w=256&q=75',
        alt: 'Image4'
    }
];
const BlogsData=[
    {
        id: 1,
        image: "https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fcard1.jpg&w=640&q=75",
        alt: "Istanbul",
        title: "Istanbul",
        content: "Exploring Istanbul is a journey through history and culture. This vibrant city, straddling Europe and Asia, offers a unique blend of the old and new. Visit the majestic Hagia Sophia and the Blue Mosque to marvel at their stunning architecture.",
        btn: "Explore More"
    },
    {
        id: 2,
        image: "https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fcontent.jpg&w=384&q=75",
        alt: "Mountains",
        title: "Mountains",
        content: "Exploring mountains offers a unique blend of adventure, challenge, and serenity. As you ascend, the air grows cooler and the vistas more breathtaking, revealing nature raw beauty. Each trail, filled with rugged terrain and diverse wildlife, tells a story of its own.",
        btn: "Explore More"
    },
    {
        id: 3,
        image: "https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fhero_Image.jpg&w=384&q=75",
        alt: "Deep Seas",
        title: "Deep Seas",
        content: "Exploring the deep seas is a fascinating venture into Earth final frontier. This underwater world, largely unexplored, holds countless mysteries and unique ecosystems. Using advanced submersibles and remote-operated vehicles.",
        btn: "Explore More"
    },
]
const VisitData=[
    {
        id: 1,
        image: "https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fhero_Image.jpg&w=384&q=75",
        alt: "Paris",
        title: "Paris",
        subtitle: "City of Love"
    },
    {
        id: 2,
        image: "https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fplace2.jpg&w=384&q=75",
        alt: "Brazil",
        title: "Brazil",
        subtitle: "City of Love"
    },
    {
        id: 3,
        image: "https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fplace3.jpg&w=384&q=75",
        alt: "Austria",
        title: "Austria",
        subtitle: "City of Love"
    },
]
export default Menu;
export {FeaturedImages};
export {BlogsData};
export {VisitData};