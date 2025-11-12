import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddProfileForm({ existingNames = [], onAdd }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Name is required.';
    const exists = existingNames.some(n => n.trim().toLowerCase() === trimmed.toLowerCase());
    if (exists) return 'Name must be unique.';
    return '';
  };

  const handleChange = (e) => {
    const v = e.target.value;
    setName(v);
    setError(validate(v)); // live feedback
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(name);
    if (err) {
      setError(err);
      return;
    }
    onAdd(name.trim());
    setName('');
    setError('');
  };

  return (
    <Form noValidate onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="profileName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a unique name"
          value={name}
          onChange={handleChange}
          isInvalid={!!error}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
      <div className="mt-3">
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
}
