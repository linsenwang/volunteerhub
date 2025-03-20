import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
            label="Name"
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
