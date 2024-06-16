// components/EditInstallerForm.jsx
import React, { useState, useEffect } from 'react';

const EditInstallerForm = ({ installer, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  useEffect(() => {
    if (installer) {
      setFormData({
        name: installer.name,
        email: installer.email,
        phone: installer.phone,
        company: installer.company,
      });
    }
  }, [installer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <label>Company:</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditInstallerForm;
