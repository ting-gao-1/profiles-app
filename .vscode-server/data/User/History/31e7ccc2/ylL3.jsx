import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles as seed } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(seed);
  const [query, setQuery] = useState('');

  const handleLike = (id) => {
    setPeople(ps => ps.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  // 🔍 Derived state：基于搜索词过滤
  const filtered = people.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

      <Form.Control
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4"
      />

      <Row xs={1} md={2} lg={3}>
        {filtered.map(p => (
          <Col key={p.id}>
            <ProfileCard id={p.id} name={p.name} likes={p.likes} onLike={handleLike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
