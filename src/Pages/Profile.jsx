import React from 'react'
import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import MyBooking from '../components/MyBooking';
import MyProfile from '../components/MyProfile';


function Profile() {

  const user = JSON.parse(localStorage.getItem('loggedUser'))
  console.log(user);
  return (
    <div className='my-5'>
      <Container maxW="xl" centerContent>
        <Box
          style={{ borderRadius: "10px", width: "100%" }}
          marginTop="50px"
          w="100%"
          borderWidth="2px"
          p={4}
          textColor="rgb(5, 6, 6)"
        >
          <Tabs variant="soft-rounded" colorScheme="red">
            <TabList marginBottom="1em solid green" marginTop="1em">
              <Tab>Profile</Tab>
              <Tab>My Booking</Tab>
            </TabList>
            <hr />
            <TabPanels>
              <TabPanel>
                {/* Profile */}
                <MyProfile user={user} />
              </TabPanel>

              <TabPanel>
                {/* Booking */}
                <MyBooking user={user} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default Profile
