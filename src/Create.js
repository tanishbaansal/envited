import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EventIcon from "@mui/icons-material/Event";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LinkButton from "./component/Button/LinkButton";
const initialFormData = Object.freeze({
    hostName: "",
    eventName: "",
    location: "",
    image: "",
});

const Create = () => {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };
    return (
        <div className="container center-align">
            <div className="container-text">
                Enter Your <div className="container-text-special">Awesome Event</div> Details
            </div>
            <Box
                component="form"
                sx={{ my: 5, "& .MuiTextField-root": { my: 2 } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    {" "}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        label="Event Name"
                        name="eventName"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CelebrationIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        label="Host Name"
                        name="hostName"
                        onChange={handleChange}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Start Date & Time"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EventIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    fullWidth
                                />
                            )}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="End Date & Time"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EventIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    fullWidth
                                />
                            )}
                        />
                    </LocalizationProvider>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        label="Location"
                        name="location"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        fullWidth
                        sx={{ p: 2, color: "var(--primary-purple-light)" }}
                        variant="outlined"
                        size="large"
                        name="image"
                        onChange={handleChange}
                        component="label"
                        startIcon={<AddAPhotoIcon />}
                    >
                        Event Photo
                        <input type="file" hidden name="image" />
                    </Button>
                </div>
            </Box>

            <LinkButton text="Next ➡" to="/event" state={[formData, startDate, endDate]} />
        </div>
    );
};

export default Create;
