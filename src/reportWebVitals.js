const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getFID, getFCP, getLCP, getTTFB }) => {
        if (getFID) {
          getFID(onPerfEntry);
        } else {
          console.error('getFID is not defined');
        }

        if (getFCP) {
          getFCP(onPerfEntry);
        } else {
          console.error('getFCP is not defined');
        }

        if (getLCP) {
          getLCP(onPerfEntry);
        } else {
          console.error('getLCP is not defined');
        }

        if (getTTFB) {
          getTTFB(onPerfEntry);
        } else {
          console.error('getTTFB is not defined');
        }
      })
      .catch((error) => {
        console.error('Ошибка при импорте web-vitals:', error);
      });
  }
};

export default reportWebVitals;