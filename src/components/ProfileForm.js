import React, { useState } from 'react';
import { TextField, Button, Typography, Box, FormControl, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import CheckboxGrid from './CheckboxGrid';
import axios from 'axios';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    choice: '',
    stuid: '',
    contact: '',
    email: '',
    message: '',
    selectedTimes: {}
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSelectionChange = (newSelection) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedTimes: newSelection // 更新选中的时间段
    }));
    console.log("选中的时间段:", newSelection);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/submit-form', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('There was an error!', error);
      setResponseMessage('Error submitting form.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="姓名"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="所在学院（研究院）"
            name="school"
            required
            value={formData.school}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>

        {/* <FormControl fullWidth margin="normal">
          <InputLabel>学习类型</InputLabel>
          <Select
            name="choice"
            value={formData.choice}
            onChange={handleChange}
            required
          >
            <MenuItem value="bachelor">本科</MenuItem>
            <MenuItem value="master">硕士</MenuItem>
            <MenuItem value="doctor">博士</MenuItem>
          </Select>
        </FormControl> */}

        <FormControl component="fieldset">
          {/* <FormLabel component="legend">学习类型</FormLabel> */}
          <RadioGroup row name="choice" value={formData.choice} onChange={handleChange} required>
            <FormControlLabel value="bachelor" control={<Radio />} label="本科" />
            <FormControlLabel value="master" control={<Radio />} label="硕士" />
            <FormControlLabel value="doctor" control={<Radio />} label="博士" />
          </RadioGroup>
        </FormControl>
        <div>
          <TextField
            label="学号"
            name="stuid"
            required
            value={formData.stuid}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="联系方式"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        
        <CheckboxGrid onSelectionChange={handleSelectionChange} />

        <div>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
        </div>
        <Button sx={{ marginTop: 4 }} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {responseMessage && <Typography sx={{ marginTop: 4 }}>{responseMessage}</Typography>}
    </Box>
  );
}

export default MyForm;
