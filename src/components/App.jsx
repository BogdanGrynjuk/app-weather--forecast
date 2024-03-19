import { WeatherSvg } from "weather-icons-animated";
import Loader from "./Loader/Loader";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <div style={{ display: 'flex' }}>
          <WeatherSvg state="sunny" width={100} height={100} />
          <WeatherSvg state="clear-night" width={100} height={100} />
          <WeatherSvg state="partlycloudy" width={100} height={100} />
          <WeatherSvg state="cloudy" width={100} height={100} />
          <WeatherSvg state="fog" width={100} height={100} />
          <WeatherSvg state="hail" width={100} height={100} />
          <WeatherSvg state="rainy" width={100} height={100} />
          <WeatherSvg state="snowy" width={100} height={100} />
          <WeatherSvg state="snowy-rainy" width={100} height={100} />
          <WeatherSvg state="pouring" width={100} height={100} />
          <WeatherSvg state="lightning" width={100} height={100} />
          <WeatherSvg state="lightning-rainy" width={100} height={100} />
          <WeatherSvg state="windy" width={100} height={100} />
          <WeatherSvg state="sunny" width={100} height={100} />
        </div>
        <p style={{color: "white", textAlign: "center"}}>Icons</p>
      </div>
      <div style={{marginTop: 40}}>

        <Loader />
        <p style={{color: "white", textAlign: "center"}}>Loader</p>
      </div>
    </div>
  );
};
