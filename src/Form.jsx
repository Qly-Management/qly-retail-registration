import React, { useState } from "react";
import States from "./states.js";
import { TimePicker, Checkbox } from "antd";

export default function () {
  const timeIntervalOptions = ["15", "30", "60"];
  const weekdayOptions = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  // States for error messages
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [pinError, setPinError] = useState("");
  const [capacityError, setCapacityError] = useState("");
  const [cushionError, setCushionError] = useState("");
  const [cushCapError, setCushCapError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cheapError, setCheapError] = useState("");
  const [checklistError, setChecklistError] = useState("");
  const [weekdayError, setWeekdayError] = useState("");

  // States for the fields
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [cushion, setCushion] = useState(null);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [inst, setInstr] = useState("");
  const [des, setDes] = useState("");
  const [state, setState] = useState("Select State");
  const [cheapness, setCheapness] = useState("Cheapness");
  const [checklist, setChecklist] = useState([]);
  const [optOut, setOptOut] = useState([]);
  const [weekdays, setWeekdays] = useState([]);

  // input validation function
  function validate(field, value) {
    // validate company name
    switch (field) {
      case "name":
        if (!value.trim()) {
          setNameError("Please enter a valid company name");
          return false;
        } else {
          setNameError("");
          return true;
        }

      case "address":
        if (!value.trim()) {
          setAddressError("Please enter a valid address value");
          return false;
        } else {
          setAddressError("");
          return true;
        }

      case "city":
        if (!value.trim()) {
          setCityError("Please enter a valid city name");
          return false;
        } else {
          setCityError("");
          return true;
        }

      case "pin":
        if (isNaN(value) || !value.trim()) {
          setPinError("The PIN code needs to be an integer.");
          return false;
        } else {
          setPinError("");
          return true;
        }

      case "capacity":
        if (isNaN(value) || !value.trim()) {
          setCapacityError("The capacity needs to be an integer.");
          return false;
        } else {
          setCapacityError("");
          return true;
        }

      case "cushion":
        if (isNaN(value) || !value.trim()) {
          setCushionError("The cushion needs to be an integer.");
          return false;
        } else {
          setCushionError("");
          return true;
        }

      case "state":
        if (value === "Select State") {
          setStateError("Please select a state");
          return false;
        } else {
          setStateError("");
          return true;
        }

      case "cheapness":
        if (value === "Cheapness") {
          setCheapError("Please select a cheapness level");
          return false;
        } else {
          setCheapError("");
          return true;
        }

      case "time":
        if (!value) {
          setTimeError("Please select a valid time");
          return false;
        } else {
          setTimeError("");
          return true;
        }

      case "timeCheck":
        if (value.length === 0) {
          setChecklistError("Please select at least one time interval");
          return false;
        } else {
          setChecklistError("");
          return true;
        }

      case "weekday":
        if (value.length === 0) {
          setWeekdayError("Please select at least one day of operation");
          return false;
        } else {
          setWeekdayError("");
          return true;
        }

      default:
        return false;
    }
  }

  function validateCushCap(cush, cap) {
    if (cush && cap && Number.parseInt(cush) > Number.parseInt(cap)) {
      setCushCapError("The cushion cannot be greater than the capacity!");
      return false;
    } else {
      setCushCapError("");
      return true;
    }
  }

  function validateAll() {
    return (
      validate("name", name) &&
      validate("address", address1) &&
      validate("city", city) &&
      validate("pin", pin) &&
      validate("capacity", capacity) &&
      validate("cushion", cushion) &&
      validate("state", state) &&
      validate("cheapness", cheapness) &&
      validate("time", openingTime) &&
      validate("time", closingTime) &&
      validate("timeCheck", checklist) &&
      validate("weekday", weekdays) &&
      validateCushCap(cushion, capacity)
    );
  }

  // States to handle opening and closing of time selection fields
  const [timePickerOpen, setPickerOpen] = useState(false);
  const [timePickerOpen2, setPickerOpen2] = useState(false);

  // State for checking if 'Select All' for weekday boxes have been selected or not
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  // functions to handle opening and closing of time selection fields
  function handleOpenChange(open) {
    setPickerOpen(open);
  }

  function handleOpenChange2(open) {
    setPickerOpen2(open);
  }

  function onWeekdayChecklistChange(checkedList) {
    setWeekdays(checkedList);
    setIndeterminate(!!checkedList.length && checkedList.length < 7);
    setCheckAll(checkedList.length === 7);
  }

  function onCheckAllChange(e) {
    setWeekdays(e.target.checked ? weekdayOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  }

  return (
    <div>
      <form action="" method="post">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validate("name", e.target.value);
          }}
          type="text"
          placeholder="Enter company name"
        />

        <div className="error">{nameError}</div>

        <input
          value={address1}
          onChange={(e) => {
            setAddress1(e.target.value);
            validate("address", e.target.value);
          }}
          type="text"
          placeholder="Address line 1"
        />

        <div className="error">{addressError}</div>

        <input
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          type="text"
          placeholder="Address line 2"
        />

        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            validate("city", e.target.value);
          }}
          type="text"
          placeholder="City"
        />

        <div className="error">{cityError}</div>

        <select
          style={{ color: state === "Select State" ? "#A9A9A9" : "black" }}
          className="stateSelect"
          name="select"
          onChange={(e) => {
            setState(e.target.value);
            validate("state", e.target.value);
          }}
        >
          {["Select State", ...Object.values(States)].map(function (n) {
            return (
              <option key={n} value={n} selected={state === n}>
                {n}
              </option>
            );
          })}
        </select>

        <div className="error">{stateError}</div>

        <input
          value={pin}
          onChange={(e) => {
            setPin(e.target.value);
            validate("number", e.target.value);
          }}
          type="text"
          placeholder="Pin Code"
        />

        <div className="error">{pinError}</div>

        <select
          style={{ color: cheapness === "Cheapness" ? "#A9A9A9" : "black" }}
          className="stateSelect"
          name="select"
          onChange={(e) => {
            setCheapness(e.target.value);
            validate("cheapness", e.target.value);
          }}
        >
          {["Cheapness", 1, 2, 3, 4].map(function (n) {
            return (
              <option key={n} value={n} selected={cheapness === n}>
                {n}
              </option>
            );
          })}
        </select>

        <div className="error">{cheapError}</div>

        <input
          value={capacity}
          onChange={(e) => {
            setCapacity(e.target.value);
            validate("capacity", e.target.value);
            validateCushCap(cushion, e.target.value);
          }}
          type="text"
          placeholder="Total Store Capacity"
        />

        <div className="error">{capacityError}</div>

        <input
          value={cushion}
          onChange={(e) => {
            setCushion(e.target.value);
            validate("cushion", e.target.value);
            validateCushCap(e.target.value, capacity);
          }}
          type="text"
          placeholder="Capacity Cushion"
        />

        <div className="error">{cushionError}</div>
        <div className="error">{cushCapError}</div>
        <div style={{ height: 10 }}></div>

        <TimePicker
          use12Hours
          className="tp"
          open={timePickerOpen}
          onOpenChange={handleOpenChange}
          format="HH:mm"
          placeholder="Enter opening time"
          onChange={(_, timeString) => {
            setOpeningTime(timeString);
            validate("time", timeString);
          }}
        />
        <br />

        <div className="error">{timeError}</div>
        <div style={{ marginBottom: 10 }} />

        <TimePicker
          use12Hours
          className="tp"
          open={timePickerOpen2}
          onOpenChange={handleOpenChange2}
          format="HH:mm"
          placeholder="Enter closing time"
          onChange={(_, timeString) => {
            setClosingTime(timeString);
            validate("time", timeString);
          }}
        />

        <div className="error">{timeError}</div>
        <div style={{ marginBottom: 10 }} />

        <input
          value={inst}
          onChange={(e) => setInstr(e.target.value)}
          type="text"
          placeholder="Special Instructions"
        />

        <input
          value={des}
          onChange={(e) => setDes(e.target.value)}
          type="text"
          placeholder="Description"
        />

        <p style={{ marginBottom: "-10px", marginTop: 10 }}>
          Select time slot intervals
        </p>
        <Checkbox.Group
          style={{ marginTop: 10 }}
          options={timeIntervalOptions}
          value={checklist}
          onChange={(checkList) => {
            validate("timeCheck", checkList);
            setChecklist(checkList);
          }}
        />

        <div className="error">{checklistError}</div>

        <Checkbox.Group
          style={{ marginTop: 10 }}
          options={["Opt out of reservations (waitline only)"]}
          value={optOut}
          onChange={(newList) => {
            setOptOut(newList);
          }}
        />

        <div
          style={{
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBotttomColor: "#e9e9e9",
            width: "30%",
            margin: "0 auto",
            marginTop: 10,
          }}
        >
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
        </div>

        <br />

        <Checkbox.Group
          options={weekdayOptions}
          value={weekdays}
          onChange={(checklist) => {
            validate("weekday", checklist);
            onWeekdayChecklistChange(checklist);
          }}
        />

        <div className="error">{weekdayError}</div>

        <br />

        <label for="fileUpload" style={{ margin: 5 }}>
          Upload company logo, {"< 300 KB"}
        </label>
        <input id="fileUpload" type="file" accept="image/png, .jpeg, .jpg" />

        <button name="submit" value="submit" className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
