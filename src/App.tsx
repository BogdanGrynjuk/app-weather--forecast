import React from "react";

import useWeatherForecast from "hooks/useWeatherForecast";

import Layout from "components/Layout";
import Header from "components/Header";
import Loader from "components/Loader";
import Main from "components/Main";
import Error from "components/Error";

const App: React.FC = () => { 

  const {
    city,
    term,    
    options,
    isLoading,
    error,
    weatherForecast,
    handleInputChange,
    handleOptionSelect,
    handleClearOptionSelect,
    handleSubmit
  } = useWeatherForecast(); 

  return (
    <>      
      <Layout>        
        {isLoading && <Loader />}
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
        {error && <Error error={error} />}

        {!isLoading && !error && weatherForecast && city &&       
          <Main weatherForecast={weatherForecast} city={city}/>                
        }
      </Layout>
    </>
  );
};

export default App;



