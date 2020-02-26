const Analytics = require('analytics').default
const googleAnalytics = require('@analytics/google-analytics').default
/*import { Analytics } from 'analytics';
import { googleAnalytics } from '@analytics/google-analytics';*/
/*
  Después de inicializar analytics con el googleAnalytics,
  los datos se enviarán a Google Analytics cada vez que se llame a analytics.page,
  analytics.track o analytics.identify.
*/
var analytics=null;
exports.core= {

  init(input){
    analytics=Analytics({
      app: 'GoogleAnalytics',      
      plugins: [
        googleAnalytics({
          trackingId: input
        })
      ]
    });
  },

  page(input) {
    //para enviar datos de vista de página.
    if (analytics==null) {
       return ('Debe inicializar el metodo primero');
    }
    return analytics.page({
      title: 'Pagina '+input.substr(1,input.length),
      path:  input,
      href: 'www.localhost'+input
    });
  },

  track(evento){
    if (analytics==null) {
       return ('Debe inicializar el metodo primero');
    }
    //Rastrear un evento personalizado
    return analytics.track(evento);
    /*
    analytics.track('playedVideo', {
      category: 'Videos',
      label: 'Fall Campaign',
      value: 42
    })
   */
  },

  
};
