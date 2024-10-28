import { Box, Button, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './stylesRenderToolTip';
RenderToolTipContent.propTypes = {
    course: PropTypes.object,
};

const DotIcon = styled(FiberManualRecordSharpIcon)(({ theme }) => ({
    fontSize: 'small',
    marginLeft: theme.spacing(1),
}));

function RenderToolTipContent({ course = {} }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = (courseId) => {
        setIsFavorite((prevFavoriteas) => ({
            ...prevFavoriteas,
            [courseId]: !prevFavoriteas[courseId]
        }));
    };
    return (
        <Box>
            <Typography variant="subtitle1" sx={styles.courseName}>{course.name}</Typography>
            <Typography>
                <span style={{ color: '#19C72B', fontSize:'14px' }}>Updated: </span>
                <span style={{ color: 'darkgreen', fontSize: '14px' }}>{course.date}</span>
            </Typography>
            <Typography variant="body2" sx={styles.hour}>
                {course.hour} total hours
                <DotIcon /><span>All level</span>
                <DotIcon /><span>Subtiles</span>
            </Typography>
            <Typography variant='body2' sx={{fontSize:'16px'}}>{course.description}</Typography>
            <ul>
                {course.contents.slice(0, 3).map((item, index) => (
                    <li key={index}>
                        <CheckSharpIcon sx={styles.checkIcon}></CheckSharpIcon>
                        <Typography variant="body2" sx={{fontSize:'16px'}}>{item}</Typography></li>
                ))}
            </ul>

            <Box sx={{ display: 'flex', marginBottom: '6px', padding:'10px'}}>
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

export default RenderToolTipContent;