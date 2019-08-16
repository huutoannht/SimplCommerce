function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}

if(getCookie('cookie-policy-accepted') != 'true') $(".cookie-consent-container").css('display', 'flex');

$('.cookie-consent-container .icon-times').on('click', function() {
  $(".cookie-consent-container").hide();
});

$('.cookie-consent-container .btn-agree').on('click', function() {
  setCookie('cookie-policy-accepted', 'true', 365);
  $(".cookie-consent-container").hide();
});

$('.all-user-orders-data-container').on('click', '.order-container-opener', function(){
  $(this)
    .next('.order-container')
    .stop(true, false)
    .slideToggle();
});

$('.get-GDPR-data').on('click', function() {
  $('.GDPR-data-container').toggle()
    .find('.all-user-data-table tbody').empty();

  $.ajax({
      method: "GET",
      url: "/profile/all-my-data",
  })
  .done(function( data ) {
      //My profile table filling
      var userDataMap = {
        en: {
          avatar: 'Profile picture',
          email: 'Email',
          name: 'Name',
          second_name: 'Surname',
          country: 'Country', 
          city: 'City',
          gender: 'Gender',
          phone: 'Phone number',
          billing_as: 'Billing as',
          created_at: 'Account creation date',
          updated_at: 'Last account update date',
          accepted_GDPR: 'Data collection consent'
        },
        es: {
          avatar: 'Avatar',
          email: 'Correo electrónico',
          name: 'Nombre',
          second_name: 'Segundo nombre',
          country: 'País', 
          city: 'Ciudad',
          gender: 'Género',
          phone: 'Número de teléfono',
          billing_as: 'Facturación como',
          created_at: 'Creado en',
          updated_at: 'Actualizado en',
          accepted_GDPR: 'Consentimiento de recopilación de datos'
        },
        it: {
          avatar: 'Avatar',
          email: 'Indirizzo email',
          name: 'Nome',
          second_name: 'Secondo nome',
          country: 'Paese', 
          city: 'Città',
          gender: 'Genere',
          phone: 'Numero di telefono',
          billing_as: 'Fatturazione come',
          created_at: 'Creato a',
          updated_at: 'Aggiornato a',
          accepted_GDPR: 'Consenso alla raccolta dei dati'
        },
        pt: {
          avatar: 'Avatar',
          email: 'endereço de e-mail',
          name: 'Nome',
          second_name: 'Segundo nome',
          country: 'País', 
          city: 'Cidade',
          gender: 'Gênero',
          phone: 'Número de telefone',
          billing_as: 'Faturamento como',
          created_at: 'Criado em',
          updated_at: 'Atualizado em',
          accepted_GDPR: 'Consumo de coleta de dados'
        }
      };

      console.log('test1');
      if(data.country) data.country = data.country.name;
      console.log('test2');
      if(data.accepted_GDPR == 1) data.accepted_GDPR = 'Accepted';
      else data.accepted_GDPR = 'Declined';

      for(var key in userDataMap[language]) 
      {
          $('.all-user-data-table tbody')
            .append('<tr><td>'+userDataMap[language][key]+'</td><td>'+data[key]+'</td></tr>');
      }

      //company table filling
      console.log('test');
        var CompanyDataMap = {
          en: {
            company_name: 'Name',
            company_number: 'Number',
            company_address: 'Address',
            company_city: 'City',
            company_postal_code: 'Postal code', 
            company_vat_number: 'VAT',
            company_additional_info: 'Additional information',
            company_shipping_city: 'Shipping city',
            company_shipping_address: 'Shipping address',
            company_shipping_postal_code: 'Shipping postal code',
          },
          es: {
            company_name: 'Nombre de empresa',
            company_number: 'Número',
            company_address: 'Dirección',
            company_city: 'Ciudad',
            company_postal_code: 'Código postal', 
            company_vat_number: 'Código del IVA',
            company_additional_info: 'Información adicional',
            company_shipping_city: 'Ciudad de envío',
            company_shipping_address: 'Dirección de envoi',
            company_shipping_postal_code: 'Código postal de envoi',
          },
          it: {
            company_name: 'Nome della società',
            company_number: 'Numero',
            company_address: 'Indirizzo',
            company_city: 'Città',
            company_postal_code: 'Codice postale', 
            company_vat_number: 'Codice Iva',
            company_additional_info: 'Informazioni aggiuntive',
            company_shipping_city: 'Città di spedizione',
            company_shipping_address: 'Indirizzo di spedizione',
            company_shipping_postal_code: 'Codice postale di spedizione',
          },
          pt: {
            company_name: 'Nome da empresa',
            company_number: 'Número',
            company_address: 'Endereço',
            company_city: 'Cidade',
            company_postal_code: 'Codice postale', 
            company_vat_number: 'Código do IVA',
            company_additional_info: 'Informação adicional',
            company_shipping_city: 'Cidade de envio',
            company_shipping_address: 'Endereço para envio',
            company_shipping_postal_code: 'Envio de código postal',
          }
      };

      if(data.company && data.company.length) {
        for(var key in CompanyDataMap[window.language]) 
        {
            $('.all-user-company-data-table tbody')
              .append('<tr><td>'+CompanyDataMap[window.language][key]+'</td><td>'+data.company[key]+'</td></tr>');
        }
      }

      //orders table filling
      var OrderDataMap = {
        en: {
          additional_tax: 'Additional tax',
          additional_tax_name: 'Additional tax name',
          amount: 'Amount',
          amount_without_tax: 'Amount without tax',
          created_at: 'Created at', 
          currency: 'Currency',
          email: 'Email',
          email_sent: 'Email sent',
          order_id_customised: 'Order id customised',
          paid: 'Paid',
          payment_method: 'Payment method',
          payment_type: 'Payment type',
          product_name: 'Product name',
          product_price: 'Product price',
          status: 'Status',
          tax_amount: 'Tax amount',
          tax_percent: 'Tax percent',
          training_id: 'Training id',
          type: 'Type',
          updated_at: 'Updated at'
        },
        es: {
          additional_tax: 'Impuesto adicional',
          additional_tax_name: 'Nombre de impuesto adicional',
          amount: 'Cantidad',
          amount_without_tax: 'Cantidad sin impuestos',
          created_at: 'Creado en', 
          currency: 'Moneda',
          email: 'Correo electrónico',
          email_sent: 'Email enviado',
          order_id_customised: 'ID de pedido personalizado',
          paid: 'Pagado',
          payment_method: 'Método de pago',
          payment_type: 'Tipo de pago',
          product_name: 'Nombre del product',
          product_price: 'Precio del product',
          status: 'Estado',
          tax_amount: 'Importe del impuesto',
          tax_percent: 'Por ciento de impuestos',
          training_id: 'ID de entrenamiento',
          type: 'Tipo',
          updated_at: 'Actualizado en'
        },
        it: {
          additional_tax: 'Imposta aggiuntiva',
          additional_tax_name: 'Nome di imposta aggiuntiva',
          amount: 'Quantità',
          amount_without_tax: 'Importo senza tasse',
          created_at: 'Creato a', 
          currency: 'Valuta',
          email: 'Indirizzo email',
          email_sent: 'Email inviata',
          order_id_customised: 'ID ordine personalizzato',
          paid: 'Pagato',
          payment_method: 'Metodo di pagamento',
          payment_type: 'Tipo di pagamento',
          product_name: 'Nome del prodotto',
          product_price: 'Prezzo del prodotto',
          status: 'Stato',
          tax_amount: 'Importo delle tasse',
          tax_percent: 'Per cento fiscale',
          training_id: 'ID della formazione',
          type: 'Tipo',
          updated_at: 'Aggiornato a'
        },
        pt: {
          additional_tax: 'Imposto adicional',
          additional_tax_name: 'Nome do imposto adicional',
          amount: 'Montante',
          amount_without_tax: 'Montante sem imposto',
          created_at: 'Criado em', 
          currency: 'Moeda',
          email: 'Endereço de e-mail',
          email_sent: 'E-mail enviado',
          order_id_customised: 'ID da encomenda personalizada',
          paid: 'Pago',
          payment_method: 'Método de pagamento',
          payment_type: 'Tipo de pagamento',
          product_name: 'Nome do produto',
          product_price: 'Preço do produto',
          status: 'Estado',
          tax_amount: 'Quantidade de imposto',
          tax_percent: 'Por cento de imposto',
          training_id: 'ID do treinamento',
          type: 'Tipo',
          updated_at: 'Atualizado em'
        },
    };

    if(data.orders) {
      for(var i = 0; i < data.orders.length; i++)
      {
        var currOrder = data.orders[i];
  
        $('.all-user-orders-data-container')
          .append(''+
            '<p class="order-container-opener">'+currOrder.product_name+'</p>'+
            '<div class="order-container"></div>');
  
        var $newRow = $('.all-user-orders-data-container .order-container:last-child');
        
        for(var key in OrderDataMap[language]) 
        {
            $newRow.append(''+
              '<div class="order">'+
                '<span>'+OrderDataMap[language][key]+'</span>'+
                '<span>'+currOrder[key]+'</span>'+
              '</div>'
            );
        }
      }
    }

    //company table filling
    var TrainerDataMap = {
      en: {
        avatar: 'Avatar',
        created_at: 'Created at',
        email: 'Email',
        name: 'Name',
        second_name: 'Second name', 
        updated_at: 'Updated at',
      },
      es: {
        avatar: 'Avatar',
        created_at: 'Creado en',
        email: 'Correo electrónico',
        name: 'Nombre',
        second_name: 'Segundo nombre', 
        updated_at: 'Actualizado en',
      },
      it: {
        avatar: 'Avatar',
        created_at: 'Creato a',
        email: 'Indirizzo email',
        name: 'Nome',
        second_name: 'Secondo nome', 
        updated_at: 'Aggiornato a',
      },
      pt: {
        avatar: 'Avatar',
        created_at: 'Criado em',
        email: 'endereço de e-mail',
        name: 'Nome',
        second_name: 'Segundo nome', 
        updated_at: 'Atualizado em',
      }
    };
    
    if(data.trainer && data.trainer.length) {
      for(var key in TrainerDataMap[language]) 
      {
          $('.all-user-trainer-data-table tbody')
            .append('<tr><td>'+TrainerDataMap[language][key]+'</td><td>'+data.trainer[key]+'</td></tr>');
      }
    }
  });
});

$(function(){
  $('video').attr('poster', '/public/images/loading.gif');
});
//# sourceMappingURL=app.js.map
