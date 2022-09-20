import React from 'react';

export default function JournalList() {
  return <div>JournalList
  
    const params = useParams();
  if (sightingIndex !== params.sightingIndex) {
    setSightingIndex(params.sightingIndex);
  }

  // Store a new JSX element for each property in sighting details
  const sightingDetails = [];
  if (sighting) {
    for (const key in sighting) {
      sightingDetails.push(
        <Card.Text key={key}>{`${key}: ${sighting[key]}`}</Card.Text>
      );
    }
  }
  
  
  
  </div>;
}
