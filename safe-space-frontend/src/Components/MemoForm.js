// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
//   Button,
//   Card,
//   Text,
//   Title,
//   Grid,
//   Container,
//   Form,
//   Input,
//   Textarea,
// } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";

// import { BACKEND_URL } from "../constants.js";

// const MemoForm = () => {
  
//   const [date, setDate] = useState('');
//   const [clientName, setClientName] = useState('');
//   const [therapistName, setTherapistName] = useState('');
//   const [general, setGeneral] = useState('');
//   const [behavior, setBehavior] = useState('');
//   const [contentTherapy, setContentTherapy] = useState('');
//   const [therapeuticInt, setTherapeuticInt] = useState('');
//   const [diagnoses, setDiagnoses] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [riskFactors, setRiskFactors] = useState('');
//   let params = useParams();
//   const Navigate = useNavigate();


//   const handleChange = (event) => {
//     switch (event.target.name) {
//       case 'date':
//         setDate(event.target.value);
//         break;
//       case 'general':
//         setGeneral(event.target.value);
//         break;
//       case 'behavior':
//         setBehavior(event.target.value);
//         break;
//       case 'content':
//         setContentTherapy(event.target.value);
//         break;
//       case 'therapeutic':
//         setTherapeuticInt(event.target.value);
//         break;
//       case 'diagnoses':
//         setDiagnoses(event.target.value);
//         break;
//       case 'instructions':
//         setInstructions(event.target.value);
//         break;
//       case 'risk':
//         setRiskFactors(event.target.value);
//         break;
//       default:
//     };
//     // Only run this effect on change to sightingIndex
//   }, [sightingIndex]);

//   const params = useParams();
//   if (sightingIndex !== params.sightingIndex) {
//     setSightingIndex(params.sightingIndex);
//   }

//   // Store a new JSX element for each property in sighting details
//   const sightingDetails = [];
//   if (sighting) {
//     for (const key in sighting) {
//       sightingDetails.push(
//         <Card.Text key={key}>{`${key}: ${sighting[key]}`}</Card.Text>
//       );
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     //back end route is different from BE route.
//     //check what type of data you want get access first then check index.js app.use (all the way below to see the relatvent router to grab the get/put etc)

//     // memo/${:clientId}/${:memoId}
//     // not front end route like what u have done below!!!

//     axios
//       .post(`${BACKEND_URL}/therapist/patients/${clientId}/newmemo`, {
//         date,
//         general,
//         behavior,
//         contentTherapy,
//         therapeuticInt,
//         diagnoses,
//         instructions,
//         riskFactors,
//       })
//       .then((res) => {
//         setDate('');
//         setGeneral('');
//         setBehavior('');
//         setContentTherapy('');
//         setTherapeuticInt('');
//         setDiagnoses('');
//         setInstructions('');
//         setRiskFactors('');

//         console.log('resdata:', res.data);
//         Navigate(`/journals/${res.data.id}`);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   return (
//     <Container ClassName="Form-body" size="sm" px="xs">
//       <Grid justify="center" align="center">
//         <form onSubmit={handleSubmit}>
//           <label>Memo Entry</label>

//           <br />

//           <br />
//           <label>Date:</label>
//           <DatePicker
//             name="date"
//             placeholder="Pick date"
//             value={date}
//             onChange={setDate}
//           />
//           <br />

//           <label>General Notes:</label>
//           <Textarea name="general" value={general} onChange={handleChange} />
//           <br />
//           <label>Behaviour Observations:</label>
//           <Textarea name="behavior" value={behavior} onChange={handleChange} />
//           <br />
//           <label>Content of Today's Therapy:</label>
//           <Textarea
//             name="content"
//             value={contentTherapy}
//             onChange={handleChange}
//           />
//           <br />
//           <label>Any Therapeutic Intervention Needed?</label>
//           <Textarea
//             name="therapeutic"
//             value={therapeuticInt}
//             onChange={handleChange}
//           />
//           <br />
//           <label>Diagnoses:</label>
//           <Textarea
//             name="diagnoses"
//             value={diagnoses}
//             onChange={handleChange}
//           />
//           <br />

//           <label>Instructions/Recommendations/Plans</label>
//           <Textarea
//             name="instructions"
//             value={instructions}
//             onChange={handleChange}
//           />
//           <br />
//           <label>Notes and Risk Factors:</label>
//           <Textarea name="risk" value={riskFactors} onChange={handleChange} />

//           <br />
//           <Button variant="light" type="submit">
//             Submit
//           </Button>
//         </form>
//       </Grid>
//     </Container>
//   );
//   };
  
// export default MemoForm;
