import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { user } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Form,
  Input,
  Textarea,
} from '@mantine/core';

import { BACKEND_URL } from '../constants.js';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { useAuth0 } from '@auth0/auth0-react';

export default function JournalSingle(props) {
  const params = useParams();
  const Navigate = useNavigate();
  const [updatedAt, setUpdatedAt] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [dueDate, setDueDate] = useState('');

  // get all to know there is an empty null=> new journal entry =>
  const [clientId, setClientId] = useState('');
  const [journalId, setJournalId] = useState('');

  const [latestJournalEntry, setLatestJournalEntry] = useState('');

  const callApi = async () => {
    // let response = await axios.get(`${BACKEND_URL}/clients/jon@snow.com`);
    let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
    // it should be ${emailClient}
    console.log('user detailed information: ', response.data);
    console.log(response.data.journalentries);
    setLatestJournalEntry(response.data.journalentries.length);
    console.log(
      'latest journal entry index position Id:',
      response.data.journalentries[0].id
    );

    setJournalId(response.data.journalentries[0].id);
    console.log(response.data.journalentries[0].id);

    setDueDate(response.data.journalentries[1].dueBy);
    console.log('client Id: ', response.data.id);
    setClientId(response.data.id);
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('user info:', user);
      console.log('email:', user.email);
      // setinput1();
      console.log(user);
      callApi();
    }
  }, [user]);

  return (
    <div>
      {/* //       <div> */}
      {/* //         {console.log(sighting, sightingIndex)}
{Object.keys(sighting).length > 0 ? ( */}

      {/* //           <div>
//             <div>
//               <p>Report Number: {sighting.REPORT_NUMBER}</p>
//             </div>
//             <div>
//               <p>
//                 Date: {sighting.DATE}/{sighting.MONTH}/{sighting.YEAR}
//               </p>
//             </div>
//             <div>
//               <p>
//                 Area: {sighting.STATE}/{sighting.COUNTY}
//               </p>
//             </div>
//             <div>
//               <p>Witness Report: {sighting.OBSERVED}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Data Unavailable</p>
//         )}
//       </div> */}
    </div>
  );
}
