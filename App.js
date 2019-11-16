import React from 'react';
import Routes from './src/routes';
import Service from './src/service/BaseAxios';
import ServiceEnums from './src/service/BaseEnum';

export default function App() {
  Service.init(ServiceEnums.BASE_URL);
  return <Routes />
}

