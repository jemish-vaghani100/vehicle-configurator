import React, { useState, useEffect } from "react";
import {
  FormLabel,
  FormControl,
  Select,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";
import Box from "@mui/material/Box";
import Footer from "../component/Footer";

function Welcomepage() {
  const [formData, setFormData] = useState({
    segment: "",
    manufacturer: "",
    variant: "",
  });

  const [segmentOptions, setSegmentOptions] = useState([]);
  const [manufacturerOptions, setManufacturerOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);
  const [selectedSegmentId, setSelectedSegmentId] = useState();
  const [quantity, setQuantity] = useState();
  const [minquantity, setMinquantity] = useState();
  sessionStorage.setItem("quantity", quantity);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/segments")
      .then((response) => response.json())
      .then((data) => {
        setSegmentOptions(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChangeSegment = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setSelectedSegmentId(value);
    fetch(`http://localhost:8080/api/mfgbyid/${value}`)
      .then((response) => response.json())
      .then((data) => {
        setManufacturerOptions(data);
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch(`http://localhost:8080/api/segments/getqty/${value}`)
      .then((response) => response.json())
      .then((data) => {
        setQuantity(data);
        setMinquantity(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleInputChangeManufacturer = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    fetch(`http://localhost:8080/api/variants/${selectedSegmentId}/${value}`)
      .then((response) => response.json())
      .then((data) => {
        setVariantOptions(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleInputChangeVariant = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    sessionStorage.setItem("model_id", value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/defaultconfig/${formData.variant}`);
  };

  return (
    <>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Navbar />

        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Topbar />

          <Box sx={{ flex: 1, overflowY: "auto", padding: "20px" }}>
            <FormControl
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "50%", marginLeft: 5 }}
            >
              <FormLabel
                sx={{
                  fontWeight: "bold",
                  fontSize: "21px",
                  paddingBottom: "10px",
                  paddingTop: "20px",
                }}
              >
                Please Select:
              </FormLabel>
              <br />
              <Select
                name="segment"
                value={formData.segment}
                onChange={handleInputChangeSegment}
                native
                sx={{ marginBottom: "20px" }}
              >
                <option value="" disabled>
                  Segment
                </option>
                {segmentOptions.map((option) => (
                  <option key={option.seg_id} value={option.seg_id}>
                    {option.seg_name}
                  </option>
                ))}
              </Select>

              <Select
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChangeManufacturer}
                native
                sx={{ marginBottom: "20px" }}
              >
                <option value="" disabled>
                  Manufacturer
                </option>
                {manufacturerOptions.map((option) => (
                  <option key={option.mfg_id} value={option.mfg_id}>
                    {option.mfg_name}
                  </option>
                ))}
              </Select>

              <Select
                name="variant"
                value={formData.variant}
                onChange={handleInputChangeVariant}
                native
                sx={{ marginBottom: "20px" }}
              >
                <option value="" disabled>
                  Variant
                </option>
                {variantOptions.map((option) => (
                  <option key={option.model_id} value={option.model_id}>
                    {option.model_name}
                  </option>
                ))}
              </Select>

              <br />
              <TextField
                type="number"
                step="any"
                placeholder="Quantity"
                inputProps={{ min: { quantity } }}
                value={quantity}
                onChange={(e) => {
                  if (e.target.value < minquantity) {
                    alert("Quantity cannot be less than " + minquantity );
                  } else {
                    setQuantity(e.target.value);
                  }
                }}
                sx={{ paddingBottom: "20px" }}
              />
              <br />
              <Button
                variant="contained"
                type="submit"
                color="success"
                sx={{ maxWidth: "90px", marginBottom: "90px" }}
              >
                Submit
              </Button>
            </FormControl>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Welcomepage;