import axios from 'axios';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { searchByCountry } from '../config';

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  React.useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  const handleGoBack = () => {
    // Возврат на предыдущую страницу
    navigate(-1);
  };

  return (
    <div>
      <Button onClick={handleGoBack}>
        <BiArrowBack /> Back
      </Button>
      {country && <Info {...country} />}
      {/* Details: {name} */}
    </div>
  );
};
