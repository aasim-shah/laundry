import React, { useState, useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];
const googleKey = "AIzaSyBECY2aNK5YkXshm_ZEqtZY0M_hcJT65Iw";

function CombinedLocationSearch() {
  const [addressInput, setAddressInput] = useState("");
  const autocompleteRef = useRef(null);

  const onLoad = (autocomplete) => {
    console.log("Autocomplete is loaded");
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      console.log(place); // Log the selected place
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <LoadScript googleMapsApiKey={googleKey} libraries={libraries}>
      <div style={{ margin: "20px" }}>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            value={addressInput}
            onChange={(e) => setAddressInput(e.target.value)}
            placeholder="Search detailed address"
            style={{ width: "100%", padding: "10px" }}
          />
        </Autocomplete>
      </div>
    </LoadScript>
  );
}

export default CombinedLocationSearch;
