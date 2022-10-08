import { Avatar, Box, Button, Divider, TextField } from "@mui/material";
import { FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerService from "components/icons/CustomerService";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import { H5, Span } from "components/Typography";
import { format } from "date-fns";
import Link from "next/link";

const PaymentMethodEditor = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={CustomerService}
        title="Support Ticket"
        button={
          <Link href="/support-tickets" passHref>
            <Button
              color="primary"
              sx={{
                px: 4,
                bgcolor: "primary.light",
              }}
            >
              Back to Support Ticket
            </Button>
          </Link>
        }
        navigation={<CustomerDashboardNavigation />}
      />

      {messageList.map((item, ind) => (
        <FlexBox gap={2} mb={4} key={ind}>
          <Avatar src={item.imgUrl} />

          <Box>
            <H5 fontWeight="600" mt={0} mb={0}>
              {item.name}
            </H5>

            <Span color="grey.600">
              {format(new Date(item.date), "hh:mm:a | dd MMM yyyy")}
            </Span>

            <Box borderRadius="10px" bgcolor="grey.200" p={2} mt={2}>
              {item.text}
            </Box>
          </Box>
        </FlexBox>
      ))}

      <Divider
        sx={{
          mb: 4,
          borderColor: "grey.300",
        }}
      />

      <TextField
        rows={8}
        fullWidth
        multiline
        sx={{
          mb: 3,
        }}
        placeholder="Write your message here..."
      />

      <Button
        color="primary"
        variant="contained"
        onClick={handleFormSubmit}
        sx={{
          ml: "auto",
          display: "block",
        }}
      >
        Post message
      </Button>
    </CustomerDashboardLayout>
  );
};

const messageList = [
  {
    imgUrl: "/assets/images/faces/face-7.jpg",
    name: "Esther Howard",
    date: "2020-12-14T08:39:58.219Z",
    text: "Toya Guci Grocery BaZaar",
  },
  {
    imgUrl: "/assets/images/faces/10.jpg",
    name: "Ralph Edwards",
    date: "2021-01-05T05:39:58.219Z",
    text: "Toya Guci Grocery BaZaar",
  },
  {
    imgUrl: "/assets/images/faces/face-7.jpg",
    name: "Esther Howard",
    date: "2021-01-14T08:39:58.219Z",
    text: "Toya Guci Grocery BaZaar",
  },
];
export default PaymentMethodEditor;
