const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        console.log('getCLS:', getCLS); // Проверка доступности функции
        if (getCLS) {
          getCLS(onPerfEntry);
        } else {
          console.error('getCLS is not defined');
        }
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((error) => {
        console.error('Ошибка при импорте web-vitals:', error);
      });
  }
};

export default reportWebVitals;