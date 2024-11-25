import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import WishList from '../../components/User/WishList';

function TabPage() {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(0);

    // Kiểm tra URL để xác định tab nào được chọn
    React.useEffect(() => {
        if (location.pathname === '/my-course/my-learning') {
            setSelectedTab(0); // My learning tab
        } else if (location.pathname === '/my-course/my-wishlist') {
            setSelectedTab(1); // Wishlist tab
        }
    }, [location.pathname]);

    // Hàm thay đổi tab
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div style={{ minHeight: '70vh', backgroundColor: '#f4f4f4' }}>
            {/* Header section */}
            <Box sx={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>My Learning</Typography>
            </Box>

            {/* Tabs */}
            <Container sx={{ paddingTop: '20px' }}>
                <Box sx={{ width: '100%' }}>
                    <Tabs value={selectedTab} onChange={handleTabChange} aria-label="tabs" centered>
                        <Tab label="All Courses" sx={{ textTransform: 'none' }} />
                        <Tab label="Wishlist" sx={{ textTransform: 'none' }} />
                    </Tabs>
                </Box>
            </Container>

            {/* Tab Content */}
            <Container sx={{ paddingTop: '20px' }}>
                {selectedTab === 0 && <div>My Course Content</div>}
                {selectedTab === 1 && <WishList />}
            </Container>
        </div>
    );
}

export default TabPage;
