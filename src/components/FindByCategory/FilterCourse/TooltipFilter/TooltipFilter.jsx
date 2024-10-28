import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './styles';

TooltipFilter.propTypes = {
    course: PropTypes.object,
};


function TooltipFilter({ course = {} }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = (courseId) => {
        setIsFavorite((prevFavoriteas) => ({
            ...prevFavoriteas,
            [courseId]: !prevFavoriteas[courseId]
        }));
    };

    return (
        <Box>
           <Typography sx={styles.title}>What you will learn </Typography>
            <ul>
                {course.contents.slice(0, 3).map((item, index) => (
                    <li key={index}>
                        <CheckSharpIcon sx={styles.checkIcon} />
                        <Typography variant="body2" sx={{ fontSize: '14px' }}>{item}</Typography>
                    </li>
                ))}
            </ul>

            <Box sx={{ display: 'flex', marginBottom: '6px', padding: '10px' }}>
                <Button sx={styles.cart}>Add to cart</Button>
                <Box onClick={() => toggleFavorite(course.id)} sx={styles.circle}>
                    {isFavorite[course.id] ? (
                        <FavoriteIcon sx={{ ...styles.heart, transform: 'scale(1.1)' }} />
                    ) : (
                        <FavoriteBorderIcon sx={styles.heart} />
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default TooltipFilter;