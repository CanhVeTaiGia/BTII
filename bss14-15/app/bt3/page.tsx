import axios from 'axios';

interface WeatherData {
  hourly: {
    temperature_2m: number[];
    weathercode: number[];
  };
}

export default async function WeatherPage() {
  let weatherData: WeatherData | null = null;
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: 21.0285,
        longitude: 105.8542,
        hourly: 'temperature_2m,weathercode',
      },
    });

    weatherData = response.data;
  } catch (error) {
    console.error('Lỗi lấy dữ liệu thời tiết:', error);
  }

  if (!weatherData) {
    return <div>Lấy dữ liệu thời tiết thất bại.</div>;
  }
  const temperature = weatherData.hourly.temperature_2m[0];
  const weatherCode = weatherData.hourly.weathercode[0];

  return (
    <div>
      <h1>Thông tin thời tiết</h1>
      <p>Nhiệt độ : {temperature}°C</p>
      <p>Mã thời tiết: {weatherCode}</p>
    </div>
  );
}
