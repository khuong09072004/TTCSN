import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Tooltip, Box } from '@mui/material';
import { formatCurrency } from '../../utils/utils';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RenderStar from '../Course/RenderStar/RenderStar';
import RenderToolTipContent from '../Course/RenderToolTip/RenderToolTipContent';
import styles from './stylesCourse';
import settings from '../Course/SlideCourse/settings';

const Course = ({ courses = [] }) => {
    return (
        <div>
            {courses.map(category => (
                <div key={category.idCategory}>
                    <Typography variant="h5" sx={styles.sectionTitle}>
                        Top course in {category.category}
                    </Typography>
                    <Slider {...settings}>
                        {category.courses.map(course => (
                            <div key={course.id}>
                                <Tooltip
                                    title={<RenderToolTipContent course={course} />}
                                    placement="right"
                                    arrow
                                    slotProps={{
                                        tooltip: {
                                            sx: {
                                                ...styles.tooltip,
                                                width: '350px',
                                                maxWidth: 'none',
                                                padding: '8px',
                                            },
                                        },
                                        arrow: { sx: { color: '#grey' } }
                                    }}
                                >
                                    <Card sx={{ maxWidth: '100%', height: 340, margin: 1 }}>
                                        <CardMedia
                                            component="img"
                                            sx={styles.cardMedia}
                                            image={course.thumbnail}
                                            alt={course.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" sx={styles.courseName}>
                                                {course.name}
                                            </Typography>
                                            <Typography variant='body2' sx={styles.courseAuthor}>
                                                {course.author}
                                            </Typography>
                                            <Box sx={styles.starContainer}>
                                                {course.star}
                                                <RenderStar numStars={course.star}></RenderStar>
                                            </Box>
                                            <Typography sx={styles.price}>
                                                {formatCurrency(course.price)}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Tooltip>
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
};

Course.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            idCategory: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            courses: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    thumbnail: PropTypes.string.isRequired,
                    star: PropTypes.number.isRequired,
                    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                    author: PropTypes.string.isRequired,
                    content: PropTypes.arrayOf(PropTypes.string),
                    date: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ),
};

export default Course;
