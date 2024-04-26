import React from "react";

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
    currentForecast,
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

        {!isLoading && forecast && currentForecast  &&          
          <Main forecast={forecast} currentForecast={currentForecast } />                
        }
      </Layout>
    </>
  );
};

export default App;



