const utils = {
  debounce: (func, wait, immediate) => {
    let timeout;
    return () => {
      const context = this, args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    }
  },

  isDeviceMobile: () => {
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/mobile|Mobile/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/BB10; Touch/);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/webOS/i) ;
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    return isMobile.any();
  }
};

export default utils;
