import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useSelectedOptions } from './SelectedOptionsContext';
import { json } from 'react-router-dom';

function Trial2({ UpdateComp, finalcomp, url }) {
  const [compOptions, setCompOptions] = useState([]);
  const [configOptions, setConfigOptions] = useState([{}]);
  const { selectedOptions, setSelectedOptions, altOptions, setaltOptions } = useSelectedOptions();

  const model_id = sessionStorage.getItem("model_id");


  const finalconfigitems = [];
  useEffect(() => {
    fetch(`http://localhost:8080/api/${url}/${model_id}`)
      .then((response) => response.json())
      .then((data) => {
        setCompOptions(data);
        // console.log(compOptions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onHandleOption = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    fetch(`http://localhost:8080/api/config/${model_id}/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setConfigOptions(data);

      })
      .catch((error) => console.error("Error fetching data:", error));
    // console.log(selectedOptions);

  };

  const onSelectChange = (event) => {
    const { name, value } = event.target;
    const obj = JSON.parse(value);
    //console.log(obj);
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: obj.sub_type + " :₹ " + obj.price // Update selected option for this component

    }));
    console.log(selectedOptions)
    const Alt_id = obj.alt_id;
    setaltOptions((altOptions) => ({
      ...altOptions,
      [name]: Alt_id // Update selected option for this component

    }));
    //console.log(altOptions);

    const arr1 = Object.values(altOptions);
    arr1.map((option) => {
      fetch(`http://localhost:8080/api/invoice/${option}`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          finalconfigitems.push(data);
        })
        .catch((error) => console.error("Error fetching data:", error));


      //console.log(finalconfigitems);
    });
    console.log(finalconfigitems);
    setStorage();
  };

  function setStorage() {
    var string1 = JSON.stringify({ finalconfigitems });
    sessionStorage.setItem("final_items", string1);
  }

  return (
    <div>
      {compOptions.map((option, index) => (
        <div key={index}>
          <Form.Label style={{ fontWeight: "bold", fontSize: "18px" }}>
            {option}
          </Form.Label>
          <Form.Control
            as="select"
            className="custom-dropdown"
            name={option}
            onClick={onHandleOption}
            onChange={onSelectChange}
            value={selectedOptions[option] || ''}
          >
            <br />
            <option >{selectedOptions[option] ?? "Select Option"}</option>
            {configOptions.map((configOption) => (
              <>
                <option
                  value={JSON.stringify(configOption)}
                  key={configOption.alt_id}

                //const val={configOption.find(item=>item.alt_id===1)}
                >
                  {configOption.sub_type + " :₹ " + configOption.price}

                </option>
              </>
            ))}
          </Form.Control>
        </div>
      ))}
    </div>
  );
}

export default Trial2;
