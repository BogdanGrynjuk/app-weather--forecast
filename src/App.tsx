import React from "react";
import Feels from "components/Icons/Feels";
import Humidity from "components/Icons/Humidity";
import Pop from "components/Icons/Pop";
import Pressure from "components/Icons/Pressure";
import Sunrise from "components/Icons/Sunrise";
import Sunset from "components/Icons/Sunset";
import Visibility from "components/Icons/Visibility";
import Wind from "components/Icons/Wind";

import useWeatherForecast from "hooks/useWeatherForecast";

import Layout from "components/Layout";
import Header from "components/Header";
import Loader from "components/Loader";
import ErrorMessage from "components/ErrorMessage";
import Main from "components/Main";


const App: React.FC = () => { 

  const {
    city,
    term,
    forecast,
    options,
    isLoading,
    error,
    handleInputChange,
    handleOptionSelect,
    handleClearOptionSelect,
    handleSubmit
  } = useWeatherForecast();

  return (
    <>      
      <Layout>
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {!isLoading &&          
          <Header
            city={city}
            term={term}
            options={options}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleOptionSelect={handleOptionSelect}
            handleClearOptionSelect={handleClearOptionSelect}
          />
        }

        {!isLoading && forecast  &&
          
          <Main forecast={forecast}/>
                
        }
        
     
        <div style={{ marginTop: 800, textAlign: "center" }}>
          <Feels /> <Humidity /> <Pop /> <Pressure /> <Sunrise /> <Sunset /> <Visibility /> <Wind />
          <p style={{ color: "white", textAlign: "center" }}>Additional icons</p>
        </div>
      </Layout>
    </>
  );
};

export default App;



