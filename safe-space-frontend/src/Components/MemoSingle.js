import axios from 'axios';
import React, { useState, useEffect } from 'react';
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

export default function MemoSingle(props) {
  const params = useParams();

  // useEffect(() => {
  //   setSightingIndex(id);
  // }, []);

  // useEffect(() => {
  //   getSightingsData();
  // }, [sightingIndex]);

  return (
    <div>
      <div>
        {console.log(sighting, sightingIndex)}

        {Object.keys(sighting).length > 0 ? (
          <div>
            <div>
              <p>Report Number: {sighting.REPORT_NUMBER}</p>
            </div>
            <div>
              <p>
                Date: {sighting.DATE}/{sighting.MONTH}/{sighting.YEAR}
              </p>
            </div>
            <div>
              <p>
                Area: {sighting.STATE}/{sighting.COUNTY}
              </p>
            </div>
            <div>
              <p>Witness Report: {sighting.OBSERVED}</p>
            </div>
          </div>
        ) : (
          <p>Data Unavailable</p>
        )}
      </div>
    </div>
  );
}
