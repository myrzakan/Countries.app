import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

export const Details = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [ country, setCountry ] = useState(null)

    React.useEffect(() => {
        axios.get(searchByCountry(name))
        .then (
            ({data}) => setCountry(data[0])
        )

    }, [name])
  
    const handleGoBack = () => {
      // Возврат на предыдущую страницу
      navigate(-1);
    };
  
    return (
      <div>
        <Button onClick={handleGoBack}>
          <BiArrowBack /> Back
        </Button>
        {country && (
            <Info {...country}/>
        )}
        {/* Details: {name} */}
      </div>
    );
};
