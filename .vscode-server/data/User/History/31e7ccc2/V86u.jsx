import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import AddProfileForm from './components/AddProfileForm.jsx';
import { profiles as seed } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(seed);

  const handleLike = (id) => {
    setPeople(ps => ps.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleAdd = (name) => {
    const nextId = people.length ? Math.max(...people.map(p => p.id)) + 1 : 1;
    setPeople(ps => [...ps, { id: nextId, name, likes: 0 }]);
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

      <AddProfileForm
        existingNames={people.map(p => p.name)}
        onAdd={handleAdd}
      />

      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            <ProfileCard id={p.id} name={p.name} likes={p.likes} onLike={handleLike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
