import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BlogsData } from '../datasets/data';

const Blogs = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="mt-8">
                        <h1 className="text-4xl font font-bold text-center">Latest Blog Posts</h1>
                    </div>
                    <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center p-3">
                        {BlogsData.map((el, idx) => (
                            <div key={idx} className="w-full h-[600px] p-3">
                                <Card sx={{ maxWidth: '100%', height: "540px", padding: '30px', backgroundColor: "white" }}>
                                    <CardMedia
                                        component="img"
                                        alt={el.alt}
                                        height="120"
                                        image={el.image}
                                        sx={{transition: 'transform 0.2s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)', 
                                                    
                                                }}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                            {el.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '15px' }}>
                                            {el.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" sx={{ backgroundColor: '#D91656', color: 'white', borderRadius:"30px" }}>
                                            <span className='p-1 font-bold'>{el.btn}</span>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
