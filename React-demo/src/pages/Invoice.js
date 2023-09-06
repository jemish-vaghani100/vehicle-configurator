import React, { useState } from "react";
import Seatbelt from "./Seatbelt";
import { useSelectedOptions } from "./SelectedOptionsContext";
import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";
import Footer from "../component/Footer";
import { Button } from "@mui/material";
import { FormatItalic } from "@mui/icons-material";

function Invoice({ finalcomp }) {
  //  const model_price =  sessionStorage.getItem("price");

  // const quantity =  sessionStorage.getItem("quantity");

  // var sbvalue = getNumber(sessionStorage.getItem("Seat_Belt"))
  // var airbagvalue = getNumber(sessionStorage.getItem("Air_Bag"))

  // model_price = model_price + sbvalue + airbagvalue;

  // const finalprice = model_price * quantity;

  // function getNumber(param){
  //   const Seat_Belt_Final_value = sessionStorage.getItem(param);
  //   var sbvalue = Seat_Belt_Final_value.split("₹");

  //    sbvalue =  sbvalue[1].trim();
  //    console.log(sbvalue);
  //    sbvalue = parseFloat(sbvalue);

  //   return sbvalue;
  // }
  //console.log(useSelectedOptions());
  const { altOptions } = useSelectedOptions();
  const arr1 = Object.values(altOptions);

  const [finalconfigitems, setFinalconfigitems] = useState([]);
  const [data, setData] = useState(null);

  const price = sessionStorage.getItem("price");
  var [finalprice, setFinalprice] = useState(price);
  const quantity = sessionStorage.getItem("quantity");

  useEffect(() => {
    async function fetchdata() {
      const fetchedData = await Promise.all(
        arr1.map((option) =>
          fetch(`http://localhost:8080/api/invoice/${option}`)
            .then((response) => response.json())
            .catch((error) => {
              console.error("Error fetching data:", error);
            })
        )
      );

      setFinalconfigitems(fetchedData);

      const configitemprices = fetchedData.map((option) => option["price"]);
      var sum = 0;
      configitemprices.map((option) => (sum = sum + parseFloat(option)));
      setFinalprice(sum + parseFloat(finalprice));
      console.log(finalprice);
      setData("Fetched data");
    }

    fetchdata();
  }, []);

  const handleCancel = () => {
    window.history.back();
};

  return (
    <>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Navbar />

        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Topbar />

          <Box sx={{ flex: 1, overflowY: "auto", padding: "20px" }}>
            <div style={{ marginLeft: 20 }}>
              <br />
              <br />
              <div>
                <h2>Invoice</h2>
                <h3>Configured components : </h3>
              </div>

              {data ? (
                <List>
                  {finalconfigitems.map((option, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={
                          option.sub_type +
                          " ( Price Difference : " +
                          option.price +
                          " )"
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                " Loading . . . "
              )}
            </div>
            <hr />

            <div style={{ marginBottom: 5, marginLeft: 20 }}>
              <b>Price : </b>
              {finalprice}
            </div>

            <div style={{ marginBottom: 5, marginLeft: 20 }}>
              <b>Quantity : </b>
              {quantity}
            </div>

            <div style={{ marginBottom: 5, marginLeft: 20 }}>
              <b>Total Price : </b>
              {quantity * finalprice}
            </div>

            <div style={{ marginBottom: 5, marginLeft: 20 }}>
              <b>Taxes : </b>
              {quantity * finalprice * 0.12}
            </div>

            <div style={{ marginBottom: 5, marginLeft: 20 }}>
              <b>
                <i>Final Amount : </i>
              </b>
              {quantity * finalprice * 0.12 + quantity * finalprice}
            </div>
            <hr />
            <div style={{textAlign:"center"}}>
            <Button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }}>
              Pay Now
            </Button>
            <Button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={handleCancel}>
              Cancel
            </Button>
            </div>
          </Box>

          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Invoice;
